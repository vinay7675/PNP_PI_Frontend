import { useEffect, useState } from "react";
import Welcome from "./screens/Welcome";
import EnterCode from "./screens/EnterCode";
import Loading from "./screens/Loading";
import Printing from "./screens/Printing";
import Success from "./screens/Success";
import OutOfService from "./screens/OutOfService";
import PrintFailed from "./screens/PrintFailed";
import Error from "./screens/Error";
import { Logo } from "./components/logo";
import type { KioskState } from "./store/kioskState";
import { setKioskState, subscribe } from "./store/kioskState";
import { startPrint } from "./api/backend";
import { connectWS } from "./api/ws";

export default function App() {
  const [state, setState] = useState<KioskState>("WELCOME");

  useEffect(() => {
    const unsub = subscribe(setState);
    
    connectWS((msg) => {
      if (msg.event === "FETCHING") setKioskState("FETCHING");
      if (msg.event === "PRINTING") setKioskState("PRINTING");
      if (msg.event === "DONE") setKioskState("SUCCESS");
      if (msg.event === "INVALID_CODE") setKioskState("ERROR");
      if (msg.event === "PRINT_FAILED") setKioskState("PRINT_FAILED");
      if (msg.event === "OUT_OF_SERVICE" && state !== "OUT_OF_SERVICE") 
        setKioskState("OUT_OF_SERVICE");
      if (msg.event === "HEALTHY" && state !== "HEALTHY") 
        setKioskState("WELCOME");
    });
    
    return unsub;
  }, []);

  useEffect(() => {
    if (state === "SUCCESS") {
      const timer = setTimeout(() => setKioskState("WELCOME"), 10000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  useEffect(() => {
    if (state === "PRINT_FAILED") {
      const timer = setTimeout(() => setKioskState("WELCOME"), 30000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  function handleSubmit(code: string) {
    startPrint(code).catch((err) => {
      if (err.message === "INVALID_CODE") {
        setKioskState("ERROR");
      } else {
        setKioskState("OUT_OF_SERVICE");
      }
    });
  }

  // Determine which screen to show
  let screen;
  switch (state) {
    case "WELCOME":
      screen = <Welcome onStart={() => setKioskState("ENTER_CODE")} />;
      break;
    case "ENTER_CODE":
      screen = <EnterCode 
        onSubmit={handleSubmit} 
        onCancel={() => setKioskState("WELCOME")} 
      />;
      break;
    case "FETCHING":
      screen = <Loading text="Fetching document…" />;
      break;
    case "PRINTING":
      screen = <Printing />;
      break;
    case "SUCCESS":
      screen = <Success />;
      break;
    case "OUT_OF_SERVICE":
      screen = <OutOfService />;
      break;
    case "PRINT_FAILED":
      screen = <PrintFailed onTimeout={() => setKioskState("WELCOME")} />;
      break;
    case "ERROR":
      screen = <Error handleRetry={() => setKioskState("ENTER_CODE")} />;
      break;
    default:
      screen = null;
  }

  // Render screen THEN logo (logo appears on top)
  return (
    <>
      {screen}
      <Logo size={80} />
    </>
  );
}

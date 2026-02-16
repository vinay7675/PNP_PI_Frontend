import { useEffect, useState } from "react";
import Welcome from "./screens/Welcome";
import EnterCode from "./screens/EnterCode";
import Loading from "./screens/Loading";
import Printing from "./screens/Printing";
import Success from "./screens/Success";
import OutOfService from "./screens/OutOfService";
import PrintFailed from "./screens/PrintFailed";
import type { KioskState } from "./store/kioskState";
import Error from "./screens/Error";
import { setKioskState, subscribe } from "./store/kioskState";
import { startPrint } from "./api/backend";
import { connectWS } from "./api/ws";

export default function App() {
  const [state, setState] = useState<KioskState>("WELCOME");

  useEffect(() => {
    // Subscribe to global kiosk state
    const unsub = subscribe(setState);
    
    // Connect WebSocket once
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

  // Go to welcome after displaying success for 10 seconds
  useEffect(() => {
    if (state === "SUCCESS") {
      const timer = setTimeout(() => {
        setKioskState("WELCOME");
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, [state]);

  // Go to welcome after displaying print failed for 30 seconds
  useEffect(() => {
    if (state === "PRINT_FAILED") {
      const timer = setTimeout(() => {
        setKioskState("WELCOME");
      }, 30000); // 30 seconds
      return () => clearTimeout(timer);
    }
  }, [state]);

  function handleSubmit(code: string) {
    // Backend decides what happens next
    startPrint(code).catch((err) => {
      if (err.message === "INVALID_CODE") {
        setKioskState("ERROR");
      } else {
        setKioskState("OUT_OF_SERVICE");
      }
    });
  }

  switch (state) {
    case "WELCOME":
      return <Welcome onStart={() => setKioskState("ENTER_CODE")} />;
    case "ENTER_CODE":
      return (
        <EnterCode 
          onSubmit={handleSubmit} 
          onCancel={() => setKioskState("WELCOME")} 
        />
      );
    case "FETCHING":
      return <Loading text="Fetching document…" />;
    case "PRINTING":
      return <Printing />;
    case "SUCCESS":
      return <Success />;
    case "OUT_OF_SERVICE":
      return <OutOfService />;
    case "PRINT_FAILED":
      return <PrintFailed onTimeout={() => setKioskState("WELCOME")} />;
    case "ERROR":
      return <Error handleRetry={() => setKioskState("ENTER_CODE")} />;
    default:
      return null;
  }
}

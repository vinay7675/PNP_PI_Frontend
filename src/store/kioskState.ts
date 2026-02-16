export type KioskState =
  | "WELCOME"
  | "ENTER_CODE"
  | "FETCHING"
  | "PRINTING"
  | "SUCCESS"
  | "ERROR"
  | "OUT_OF_SERVICE"
  | "PRINT_FAILED";

let listeners: ((state: KioskState) => void)[] = [];
let currentState: KioskState = "WELCOME";

export function setKioskState(state: KioskState) {
  currentState = state;
  listeners.forEach((l) => l(state));
}

export function subscribe(listener: (state: KioskState) => void) {
  listeners.push(listener);
  listener(currentState);

  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

"use client";

import { useEffect, useRef } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

// One Notyf instance for the whole page, created on first use because it needs the DOM.
let notyf: Notyf | null = null;

export function toast(): Notyf {
  notyf ??= new Notyf({
    duration: 5000,
    dismissible: true,
    position: { x: "right", y: "top" },
    types: [
      { type: "success", background: "#5a189a" },
      { type: "error", background: "#d63a1f" },
    ],
  });
  return notyf;
}

// Shows a toast each time a form action returns a new state: the error if there is one, otherwise the success text.
// The state the form starts with is skipped, so nothing shows on page load.
export function useFormToast(state: { error: string | null }, success: string | null = null) {
  const initial = useRef(state);
  useEffect(() => {
    if (state === initial.current) return;
    if (state.error) toast().error(state.error);
    else if (success) toast().success(success);
  }, [state, success]);
}

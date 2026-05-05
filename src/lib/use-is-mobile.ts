"use client";

import { useEffect, useState } from "react";

/**
 * Detecta viewport mobile via matchMedia. Inicia em `false` (server-safe)
 * e atualiza no client após mount. Use pra desligar lógica pesada de
 * animação/scroll em mobile sem causar hydration mismatch.
 */
export function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Hook que resuelve el bug de "sección vacía al navegar por ancla".
 *
 * El contenido es visible por defecto (sin `initial` que lo oculte).
 * Solo se aplica una variante de entrada cuando:
 *   - el componente ya está montado en cliente (no SSR), y
 *   - el usuario no tiene `prefers-reduced-motion`.
 *
 * Uso:
 *   const reveal = useReveal();
 *   <motion.div initial={reveal.initial} whileInView={reveal.whileInView}
 *     viewport={reveal.viewport} transition={reveal.transition}>...</motion.div>
 *
 * En SSR y con motion reducido, `reveal.initial` es la identidad, así el
 * HTML nunca queda invisible si falla IntersectionObserver o JS.
 */
export type RevealProps = {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: true; margin: string };
  transition: { duration: number; ease: number[]; delay?: number };
};

export function useReveal(delay = 0): RevealProps {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted && !reduce;

  return {
    initial: shouldAnimate ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  };
}
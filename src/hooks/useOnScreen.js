// ============================================
// Hook: useOnScreen
// Detecta si un elemento es visible en pantalla
// ============================================

import { useInView } from "react-intersection-observer";

export function useOnScreen(options = {}) {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return { ref, isVisible: inView, entry };
}

// ============================================
// Utilidades compartidas del proyecto
// ============================================

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind CSS de forma segura.
 * Fusiona clsx (condicionales) + twMerge (resolución de conflictos).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ============================================
// Componente: Badge
// Etiqueta pequeña para tecnologías y niveles
// ============================================

import { cn } from "../../lib/utils";

const variantes = {
  default:
    "bg-ice-500/10 text-ice-400 border-ice-500/20",
  accent:
    "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
  purple:
    "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  teal:
    "bg-accent-teal/10 text-accent-teal border-accent-teal/20",
  ai:
    "bg-linear-to-r from-accent-purple/20 to-ice-500/20 text-accent-purple border-accent-purple/30",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
  icon: Icon,
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium font-mono",
        "rounded-full border",
        "transition-colors duration-300",
        variantes[variant],
        className
      )}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}

// ============================================
// Componente: Card
// Tarjeta reutilizable con efecto glassmorphism
// ============================================

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  padding = "p-6",
  ...props
}) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl",
        "bg-slate-850/60 backdrop-blur-sm",
        "border border-ice-500/10",
        padding,
        hover && "hover:border-ice-500/30 transition-all duration-500",
        glow && "shadow-glow",
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : {}
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// Componente: Button
// Botón reutilizable con variantes y animaciones
// ============================================

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const variantes = {
  primary:
    "bg-linear-to-r from-ice-500 to-ice-600 hover:from-ice-600 hover:to-ice-700 text-white shadow-lg shadow-ice-500/25",
  secondary:
    "bg-slate-800/60 hover:bg-slate-800 text-text-secondary hover:text-white border border-ice-500/20 hover:border-ice-500/40",
  outline:
    "bg-transparent border border-ice-500/30 hover:border-ice-500/60 text-ice-500 hover:bg-ice-500/10",
  ghost:
    "bg-transparent hover:bg-slate-800/50 text-text-secondary hover:text-white",
};

const tamaños = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
    "transition-all duration-300 ease-out cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-ice-500/50 focus:ring-offset-2 focus:ring-offset-slate-950",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantes[variant],
    tamaños[size],
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </>
  );

  // Si tiene href, renderizar como enlace
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}

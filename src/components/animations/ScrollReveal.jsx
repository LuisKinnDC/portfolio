// ============================================
// Componente: ScrollReveal
// Revela contenido al hacer scroll con diversas animaciones
// ============================================

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  width = "100%",
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

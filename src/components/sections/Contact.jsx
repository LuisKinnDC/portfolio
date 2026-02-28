// ============================================
// Sección: Contact (Contacto)
// Formulario con validación y enlaces directos
// ============================================

import { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";
import FadeIn from "../animations/FadeIn";
import { personal } from "../../data/personal";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

// Datos de contacto directo
const contactInfo = [
  {
    icono: HiOutlineEnvelope,
    titulo: "Email",
    valor: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icono: FaLinkedinIn,
    titulo: "LinkedIn",
    valor: "linkedin.com/in/luisk",
    href: personal.linkedin,
  },
  {
    icono: FaGithub,
    titulo: "GitHub",
    valor: "github.com/LuisKinnDC",
    href: personal.github,
  },
  {
    icono: HiOutlineMapPin,
    titulo: "Ubicación",
    valor: personal.ubicacion,
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  // Validación en tiempo real
  const validar = (campo, valor) => {
    const nuevosErrores = { ...errors };

    switch (campo) {
      case "nombre":
        if (!valor.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
        else if (valor.trim().length < 2) nuevosErrores.nombre = "Mínimo 2 caracteres";
        else delete nuevosErrores.nombre;
        break;
      case "email":
        if (!valor.trim()) nuevosErrores.email = "El email es obligatorio";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))
          nuevosErrores.email = "Formato de email inválido";
        else delete nuevosErrores.email;
        break;
      case "mensaje":
        if (!valor.trim()) nuevosErrores.mensaje = "El mensaje es obligatorio";
        else if (valor.trim().length < 10) nuevosErrores.mensaje = "Mínimo 10 caracteres";
        else delete nuevosErrores.mensaje;
        break;
    }

    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validar(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos los campos
    const esNombreValido = validar("nombre", form.nombre);
    const esEmailValido = validar("email", form.email);
    const esMensajeValido = validar("mensaje", form.mensaje);

    if (!esNombreValido || !esEmailValido || !esMensajeValido) return;

    setEnviando(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "50d41e72-a6b3-41a0-9cb3-52a77106b9de",
          from_name: form.nombre,
          replyto: form.email,
          subject: `📩 ${form.nombre} te envió un mensaje desde tu Portafolio`,
          Nombre: form.nombre,
          Email: form.email,
          Mensaje: form.mensaje,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      setEnviado(true);
      setForm({ nombre: "", email: "", mensaje: "" });
      setTimeout(() => setEnviado(false), 5000);
    } catch {
      setErrors({ general: "Error al enviar el mensaje. Intenta de nuevo." });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <SectionContainer
      id="contacto"
      titulo="Contacto"
      subtitulo="¿Tienes un proyecto en mente? Me encantaría escucharte"
      className="relative"
    >
      {/* Fondo decorativo con imagen Freepik */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63449.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-ice-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Formulario */}
        <FadeIn direction="left" className="lg:col-span-3">
          <Card padding="p-6 md:p-8" hover={false}>
            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <HiOutlineCheckCircle className="w-16 h-16 text-accent-teal mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-text-secondary">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Campo Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/60 border text-white
                               placeholder:text-text-muted focus:outline-none focus:ring-2
                               transition-all duration-300
                               ${
                                 errors.nombre
                                   ? "border-red-500/50 focus:ring-red-500/30"
                                   : "border-ice-500/10 focus:ring-ice-500/30 focus:border-ice-500/30"
                               }`}
                      aria-describedby={errors.nombre ? "error-nombre" : undefined}
                    />
                    {errors.nombre && (
                      <p id="error-nombre" className="mt-1.5 text-xs text-red-400">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Campo Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/60 border text-white
                               placeholder:text-text-muted focus:outline-none focus:ring-2
                               transition-all duration-300
                               ${
                                 errors.email
                                   ? "border-red-500/50 focus:ring-red-500/30"
                                   : "border-ice-500/10 focus:ring-ice-500/30 focus:border-ice-500/30"
                               }`}
                      aria-describedby={errors.email ? "error-email" : undefined}
                    />
                    {errors.email && (
                      <p id="error-email" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Campo Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/60 border text-white
                             placeholder:text-text-muted focus:outline-none focus:ring-2
                             transition-all duration-300 resize-none
                             ${
                               errors.mensaje
                                 ? "border-red-500/50 focus:ring-red-500/30"
                                 : "border-ice-500/10 focus:ring-ice-500/30 focus:border-ice-500/30"
                             }`}
                    aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
                  />
                  {errors.mensaje && (
                    <p id="error-mensaje" className="mt-1.5 text-xs text-red-400">
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                {/* Botón enviar */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={HiOutlinePaperAirplane}
                  iconPosition="right"
                  disabled={enviando}
                >
                  {enviando ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            )}
          </Card>
        </FadeIn>

        {/* Info de contacto */}
        <FadeIn direction="right" className="lg:col-span-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">
              Información Directa
            </h3>

            {contactInfo.map((info) => {
              const Icon = info.icono;
              const Wrapper = info.href ? "a" : "div";
              const wrapperProps = info.href
                ? {
                    href: info.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <Wrapper
                  key={info.titulo}
                  {...wrapperProps}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-slate-850/40 border border-ice-500/10
                           transition-all duration-300 ${
                             info.href
                               ? "hover:border-ice-500/30 hover:bg-slate-850/60 cursor-pointer"
                               : ""
                           }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-ice-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-ice-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted">{info.titulo}</p>
                    <p className="text-sm text-white truncate">{info.valor}</p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Mensaje motivacional */}
            <div className="mt-8 p-6 rounded-2xl bg-linear-to-br from-ice-500/5 to-accent-purple/5 border border-ice-500/10">
              <p className="text-sm text-text-secondary leading-relaxed italic">
                &ldquo;La mejor forma de predecir el futuro es construirlo.
                Hablemos sobre cómo puedo ayudarte a materializar tus ideas.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}

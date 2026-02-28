// ============================================
// Datos de proyectos del portafolio
// ============================================

export const proyectos = [
  {
    id: 1,
    titulo: "E-Commerce Dashboard",
    descripcion:
      "Panel administrativo para gestión de productos, pedidos y analíticas en tiempo real. Arquitectura modular con componentes reutilizables y autenticación segura.",
    problema: "Gestionar inventario y ventas de forma eficiente.",
    solucion: "Dashboard interactivo con métricas en tiempo real y gestión centralizada.",
    imagen: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg",
    tecnologias: ["React", "Firebase", "Tailwind CSS", "Chart.js"],
    categoria: "web",
    github: "https://github.com/luisk/ecommerce-dashboard",
    demo: "https://ecommerce-demo.vercel.app",
    aiAugmented: true,
  },
  {
    id: 2,
    titulo: "App de Gestión de Tareas",
    descripcion:
      "Aplicación móvil nativa para organización personal con sincronización en la nube, notificaciones push y modo offline.",
    problema: "Organización de tareas diarias sin conexión constante.",
    solucion: "App nativa con sync automático y persistencia local.",
    imagen: "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg",
    tecnologias: ["Android Studio", "Kotlin", "Supabase", "Sqlite"],
    categoria: "movil",
    github: "https://github.com/luisk/task-manager",
    demo: null,
    aiAugmented: true,
  },
  {
    id: 3,
    titulo: "Landing Page Corporativa",
    descripcion:
      "Sitio web de alto rendimiento con animaciones fluidas, SEO optimizado y diseño responsive pixel-perfect para empresa de tecnología.",
    problema: "Presencia digital profesional con alto rendimiento.",
    solucion: "Landing optimizada con Lighthouse 95+ y animaciones premium.",
    imagen: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
    tecnologias: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    categoria: "web",
    github: "https://github.com/luisk/corporate-landing",
    demo: "https://landing-demo.vercel.app",
    aiAugmented: false,
  },
  {
    id: 4,
    titulo: "Biblioteca Virtual de recursos Educativos",
    descripcion:
      "Plataforma full-stack para compartir recursos educativos digitales con búsqueda avanzada.",
    problema: "Acceso limitado a recursos educativos digitales.",
    solucion: "Sistema BaaS escalable con Supabase y autenticación social.",
    imagen: "/BibliotecaVirtual.png",
    tecnologias: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    categoria: "baas",
    github: "https://github.com/LuisKinnDC/biblioteca_virtual_recursos",
    demo: "https://biblioteca-virtual-recursos.vercel.app/",
    aiAugmented: true,
  },
    {
    id: 5,
    titulo: "Gestión Documental Laboral",
    descripcion:
      "Plataforma full-stack para gestión de documentos laborales con autenticación social y sincronización en tiempo real.",
    problema: "Gestión manual de documentos laborales sin control de versiones.",
    solucion: "Sistema BaaS escalable con Supabase y autenticación social.",
    imagen: "/GestionDocumentoLaboral.png",
    tecnologias: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    categoria: "baas",
    github: "https://github.com/LuisKinnDC/gestion_documento_laboral_front",
    demo: "https://gestion-documento-laboral-front.vercel.app",
    aiAugmented: true,
  },
];

// Filtros para la sección de proyectos
export const filtrosProyectos = [
  { id: "todos", nombre: "Todos" },
  { id: "web", nombre: "Web" },
  { id: "movil", nombre: "Móvil" },
  { id: "baas", nombre: "BaaS" },
];

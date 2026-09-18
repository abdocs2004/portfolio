// Project data — the single source of truth for both the projects grid and
// the individual case-study pages. To add a new project, add an object here;
// set `caseStudy: true` and it will automatically get its own /projects/[slug] page.
//
// Images: every project points at /public/images/projects/<slug>.jpg.
// Replace those files directly — no other code changes needed.

export const projects = [
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    tagline: "A complete, role-based clinic management platform",
    category: "fullstack",
    featured: true,
    caseStudy: true,
    description:
      "A full-stack clinic management system covering the complete patient journey — from reception and a live queue, through doctor consultation and prescriptions, to pharmacy and radiology.",
    longDescription:
      "Built to model a real multi-department medical center rather than a single-doctor demo. The system supports five distinct roles — Admin, Receptionist, Doctor, Pharmacist, and Radiology — each with a dedicated dashboard and a backend that enforces exactly what that role is allowed to touch. When a receptionist registers a visit, the backend automatically assigns the active doctor for the chosen specialty; from there the patient moves through a specialty-partitioned queue with urgent-priority handling, into diagnosis and prescriptions, and on to the pharmacy or a radiology request-to-result workflow. An admin layer sits on top with real analytics — patient, visit, doctor, specialty, pharmacy, and radiology statistics — computed with MongoDB aggregation pipelines rather than pulled and calculated client-side.",
    role: "Full-Stack Developer — designed the data models, built the REST API, and implemented every role-specific dashboard.",
    features: [
      "Role-based access control for 5 distinct user types",
      "Automatic doctor assignment by medical specialty",
      "Specialty-partitioned queues with urgent-priority handling",
      "Multi-item digital prescriptions with pharmacy dispensing",
      "Full radiology request-to-result workflow",
      "Admin analytics dashboard powered by MongoDB aggregation pipelines",
      "JWT authentication with server-enforced authorization",
    ],
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RBAC"],
    image: "/images/projects/clinic-management-system-cover.png",
    liveUrl: null,
    githubUrl: "https://github.com/abdocs2004/Clinic-Management-System",
  },
  {
    slug: "hugra-student-housing",
    title: "Hugra — Student Housing",
    tagline: "Full-stack student accommodation platform",
    category: "fullstack",
    featured: true,
    caseStudy: true,
    description:
      "A full-stack, Arabic-language platform built to help university students in Egypt find student housing — developed as a graduation project.",
    longDescription:
      "Hugra was built around a real, specific problem: university students relocating to a new city with little reliable way to find safe, verified housing. The platform is Arabic-first and RTL throughout, since that's the language its actual users think and search in. As a graduation project, it also came with the constraints of any real deliverable — defined requirements, a review process, and the need to actually work end-to-end rather than just look good in a demo.",
    role: "Contributed as a full-stack developer within a small team for our graduation project.",
    features: [
      "Arabic-first, fully RTL interface",
      "Built specifically for the Egyptian university student market",
      "Full-stack architecture from database to UI",
    ],
    techStack: ["Full-Stack", "Arabic RTL"],
    image: "/images/projects/Hugra-student-housing.png",
    liveUrl: "https://hujrah.vercel.app/",
    githubUrl: "https://github.com/abdocs2004/hujrah",
  },
  {
    slug: "kader-academy",
    title: "Kader Academy",
    tagline: "Bilingual site for a kids' coding academy",
    category: "frontend",
    featured: true,
    caseStudy: true,
    description:
      "A bilingual (Arabic/English) site for Kader Academy, an Egypt-based coding academy teaching programming and digital skills to kids and teens aged 6–18.",
    longDescription:
      "Kader Academy needed a site that actually reflected an education product spanning multiple age groups and tracks — Scratch and PictoBlox/mBlock for younger kids, up through Python, Web Development, UI/UX, Mobile, Game Development, and AI for teens. Rather than reach for a third-party i18n library, the Arabic/English routing was built with custom i18n middleware, with full right-to-left support handled through Tailwind's logical properties so the RTL layout is a first-class citizen, not a mirrored afterthought. The project was later rebuilt as a fully static, dependency-free HTML/CSS/JS version for simple, fast deployment.",
    role: "Frontend Developer — built the bilingual architecture, the content system, and both the Next.js and static-HTML versions.",
    features: [
      "Custom i18n middleware for Arabic/English routing",
      "Full RTL support via Tailwind logical properties",
      "Centralized, typed content architecture (locale dictionaries + data arrays)",
      "Age-tracked curriculum sections, ages 6–18",
      "Rebuilt as a fully static, dependency-free production build",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/kader-academy.png",
    liveUrl: "https://kadertech.netlify.app/arabic",
    githubUrl: null,
  },
  {
    slug: "gomapview",
    title: "GoMapView",
    tagline: "Premium site for a 360° virtual-tour company",
    category: "fullstack",
    featured: false,
    caseStudy: false,
    description:
      "A premium, multi-page website built for a company specializing in 360° virtual tours and local SEO services.",
    image: "/images/projects/gomapview.png",
    liveUrl: "https://gomapview.com/en",
    githubUrl: null,
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    tagline: "Menu-focused restaurant site",
    category: "frontend",
    featured: false,
    caseStudy: false,
    description:
      "A modern, visually driven restaurant website built to showcase a menu and brand identity.",
    image: "/images/projects/restrunt-website.jpg",
    liveUrl: "https://special-dish.netlify.app/",
    githubUrl: null,
  },
  {
    slug: "smart-booking",
    title: "Smart Booking",
    tagline: "Appointment booking flow",
    category: "frontend",
    featured: false,
    caseStudy: false,
    description: "A booking-flow web app for scheduling appointments.",
    image: "/images/projects/smart-booking.jpg",
    liveUrl: "https://mowaedy.netlify.app/",
    githubUrl: "https://github.com/abdocs2004/mowaedy",
  },
  {
    slug: "el-shafiq-construction",
    title: "El Shafiq Construction",
    tagline: "Business website",
    category: "frontend",
    featured: false,
    caseStudy: false,
    description: "A business website for a construction and building-materials company.",
    image: "/images/projects/elshafiq-construction.jpg",
    liveUrl: "https://el-shafiq-cement.vercel.app/",
    githubUrl: null,
  },
  {
    slug: "alfajr-somix",
    title: "Alfajr Somix",
    tagline: "Business website",
    category: "frontend",
    featured: false,
    caseStudy: false,
    description: "A business website built and deployed on a custom domain.",
    image: "/images/projects/alfajr-somix.png",
    liveUrl: "https://alfajrsomix.com/",
    githubUrl: null,
  },
  {
    slug: "keyframe-media-production",
    title: "Keyframe | Media Production",
    tagline: "Business website",
    category: "frontend",
    featured: false,
    caseStudy: false,
    description: "A business website for a media production company.",
    image: "/images/projects/keyframe-media-production.png",
    liveUrl: "https://keyframe-lb.com",
    githubUrl: null,
  },
  {
    slug: "cafe-landing-page",
    title: "Cafe Landing Page",
    tagline: "Landing page",
    category: "frontend",
    featured: false,
    caseStudy: false,
    description: "A clean, conversion-focused landing page for a cafe brand.",
    image: "/images/projects/cafe-landing-page.jpg",
    liveUrl: "https://cafe-landing-page-snowy.vercel.app/",
    githubUrl: null,
  },
  {
    slug: "game-keys",
    title: "Game | Keys",
    tagline: "Browser game",
    category: "frontend",
    featured: false,
    caseStudy: false,
    description: "An interactive, browser-based game built as a front-end experiment.",
    image: "/images/projects/games-keys.png",
    liveUrl: "https://game-keys.vercel.app/",
    githubUrl: null,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend & Business Sites" },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

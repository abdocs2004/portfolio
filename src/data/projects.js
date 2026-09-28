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
    slug: "field-operations-management-system",
    title: "Field Operations Management System (منصة توثيق العمليات الميدانية)",
    tagline: "Field Operations Management & Verification Platform",
    category: "fullstack",
    featured: true,
    caseStudy: true,
    description:
      "A full-stack MVP for organizations that need to capture field activity and produce verifiable electronic receipts. The Arabic-first frontend is RTL and provides public pages alongside authenticated field and administration workflows.",
    longDescription:
      "An authenticated field user records an operation from the field. The backend assigns a unique receipt number, generates a QR code containing the verification URL, and exposes the receipt for viewing or PDF download. Anyone can verify a receipt by entering its number or opening the QR link without logging in. Authenticated users can view operations and dashboard metrics; administrators can manage users, services, announcements, and reports.",
    role: "Full-Stack Developer — built the frontend with Next.js and Tailwind, and the backend with Node.js, Express, PostgreSQL, and Prisma.",
    features: [
      "Authenticated field and administration workflows",
      "Unique receipt number and QR code generation for verification",
      "Public verification via receipt number or QR link",
      "PDF receipt generation and downloading",
      "Admin dashboard with metrics and user management",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
    image: "/images/projects/توثيق-إدارة-العمليات-الميدانية.png",
    liveUrl: null,
    githubUrl: "https://github.com/abdocs2004/field-operations-management-system",
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

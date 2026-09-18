// The "Build Process" steps — used by the interactive BuildProcess component
// (the site's signature section) and referenced from the client-facing CTA copy.
export const processSteps = [
  {
    number: "01",
    title: "Understand the Idea",
    description:
      "Every project starts as a conversation, not a spec sheet. I ask about the real problem before touching any code.",
    stack: [],
  },
  {
    number: "02",
    title: "Plan the Solution",
    description:
      "Mapping out the data model, the pages, and the features that actually matter for launch versus later.",
    stack: [],
  },
  {
    number: "03",
    title: "Design & Frontend",
    description:
      "Building a responsive, accessible interface with React — or WordPress and Elementor when that's the right tool for the job.",
    stack: ["react", "html5", "css3", "tailwindcss", "wordpress"],
  },
  {
    number: "04",
    title: "Backend & Database",
    description:
      "Node.js and Express APIs backed by the right database for the job — SQL when the data is relational, MongoDB when it isn't.",
    stack: ["nodedotjs", "express", "mongodb", "postgresql", "mysql"],
  },
  {
    number: "05",
    title: "Testing",
    description: "Checking the flows a real user would actually take, not just the happy path.",
    stack: [],
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Shipping to the platform that fits — Vercel or Netlify for apps, Hostinger/cPanel for WordPress and traditional hosting.",
    stack: ["vercel", "netlify", "hostinger", "cpanel"],
  },
  {
    number: "07",
    title: "Support & Improvements",
    description:
      "A launched project isn't a finished one. I stay reachable for fixes, tweaks, and the next iteration.",
    stack: [],
  },
];

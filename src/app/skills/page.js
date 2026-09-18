import SectionHeading from "../../components/SectionHeading";
import TechStackGrid from "../../components/TechStackGrid";
import ContactCTA from "../../components/ContactCTA";
import { skillGroups } from "../../data/skills";

export const metadata = {
  title: "Skills",
  description:
    "Technical toolkit: React.js, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, WordPress, and deployment platforms including Vercel, Netlify, and Hostinger.",
};

export default function SkillsPage() {
  return (
    <div className="container-x page-shell">
      <SectionHeading
        label="Tech Stack"
        title="My Technical Toolkit"
        description="The technologies and tools I use to take a project from an idea to something live and working."
      />
      <div className="mt-16">
        <TechStackGrid groups={skillGroups} />
      </div>
      <div className="mt-32">
        <ContactCTA />
      </div>
    </div>
  );
}

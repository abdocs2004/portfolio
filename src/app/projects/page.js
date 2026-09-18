import SectionHeading from "../../components/SectionHeading";
import ProjectsGrid from "../../components/ProjectsGrid";
import ContactCTA from "../../components/ContactCTA";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Projects",
  description:
    "A selection of full-stack applications and business websites — including a role-based clinic management system and a bilingual coding-academy platform.",
};

export default function ProjectsPage() {
  return (
    <div className="container-x page-shell">
      <SectionHeading
        label="Portfolio"
        title="Projects"
        description="Full-stack applications, business websites, and everything in between."
      />
      <div className="mt-16">
        <ProjectsGrid projects={projects} />
      </div>
      <div className="mt-32">
        <ContactCTA />
      </div>
    </div>
  );
}

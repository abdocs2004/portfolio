import { site } from "../data/site";
import { projects } from "../data/projects";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/skills", "/projects", "/contact"].map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ url: `${site.siteUrl}/projects/${p.slug}`, lastModified: new Date() }));

  return [...staticRoutes, ...projectRoutes];
}

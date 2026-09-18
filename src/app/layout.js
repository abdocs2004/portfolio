import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { site } from "../data/site";

// Self-hosted variable fonts (no external font-fetch at build or runtime —
// more reliable and better for performance/privacy than next/font/google).
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "300 800",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Full-Stack Web Developer specializing in React.js and Node.js, with practical experience delivering WordPress websites. Final-year Computer Science student.",
  keywords: [
    "Full-Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "WordPress Developer",
    "Egypt",
    site.name,
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: "Full-Stack Web Developer specializing in React.js and Node.js.",
    url: site.siteUrl,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: "Full-Stack Web Developer specializing in React.js and Node.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="grain">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

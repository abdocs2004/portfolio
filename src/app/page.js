"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const cvLink =
  "https://drive.google.com/file/d/1UdpauIdz7KoauKLKeOsFw1KVKaLWVV8m/view?usp=drive_link";
const pages = ["home", "skills", "projects", "trainings", "contact"];

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  const [exitingPage, setExitingPage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hash = (window.location.hash || "#home").replace("#", "");
    const initialPage = pages.includes(hash) ? hash : "home";
    if (initialPage === "home") return;

    const rafId = window.requestAnimationFrame(() => {
      setCurrentPage(initialPage);
    });

    return () => window.cancelAnimationFrame(rafId);
  }, []);

  const showPage = useCallback((targetId) => {
    if (!pages.includes(targetId)) return;
    if (targetId === currentPage) return;
    setExitingPage(currentPage);
    setCurrentPage(targetId);
    setMenuOpen(false);
  }, [currentPage]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${currentPage}`);
  }, [currentPage]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === "h") showPage("home");
      if (key === "s") showPage("skills");
      if (key === "p") showPage("projects");
      if (key === "t") showPage("trainings");
      if (key === "c") showPage("contact");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showPage]);

  const handleTransitionEnd = (id) => (e) => {
    if (e.propertyName !== "transform") return;
    if (exitingPage === id) setExitingPage(null);
  };

  const onDownloadCv = () => {
    window.open(cvLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <header>
        <nav>
          <button className="burger" id="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="text-logo">
            <i className="fa-solid fa-code"></i> Abdelrahman
          </div>

          <ul className={`nav-list ${menuOpen ? "show" : ""}`} id="nav-list">
            {pages.map((page) => (
              <li key={page}>
                <a
                  href={`#${page}`}
                  data-target={page}
                  className={`nav-link ${currentPage === page ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    showPage(page);
                  }}
                >
                  {page === "trainings" ? "training" : page}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="btn-nav" onClick={() => showPage("contact")}>
              get in touch
            </button>
          </div>
        </nav>
      </header>

      <div id="content">
        <section
          id="home"
          className={`page ${currentPage === "home" ? "active" : ""} ${
            exitingPage === "home" ? "exit-right" : ""
          }`}
          onTransitionEnd={handleTransitionEnd("home")}
        >
          <div className="text-main">
            <h1 className="animated-title">
              <span>Software</span> <span>Developer</span>
            </h1>
            <p>
              Full-Stack Web Developer skilled in React.js, Node.js, and WordPress. Experienced in building responsive websites, customizing themes and plugins, and deploying projects using cPanel.
            </p>
            <div className="btns">
              <button className="btn-one" onClick={() => showPage("projects")}>
                view my work <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button id="btn-two" onClick={onDownloadCv}>
                download cv <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>

          <div className="img-main">
            <Image
              src="/images/face1.jpg"
              alt="Abdelrahman"
              fill
              priority
              sizes="(max-width: 768px) 240px, 300px"
            />
          </div>
        </section>

        <section
          id="skills"
          className={`page ${currentPage === "skills" ? "active" : ""} ${
            exitingPage === "skills" ? "exit-right" : ""
          }`}
          onTransitionEnd={handleTransitionEnd("skills")}
        >
          <h2 className="section-title">My technical toolkit</h2>
          <p className="section-sub">
            the technologies and tools i use to bring projects to life.
          </p>

          <div className="skills-container">
            <div className="skill-box">
              <i className="fa-brands fa-html5"></i>
              <h3>HTML5</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-css3-alt"></i>
              <h3>CSS3</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-bootstrap"></i>
              <h3>BootStrap</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-js"></i>
              <h3>JavaScript</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-react"></i>
              <h3>React.js</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-python"></i>
              <h3>Python</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-php"></i>
              <h3>PHP</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-java"></i>
              <h3>Java</h3>
            </div>
            <div className="skill-box">
              <i className="fa-solid fa-database"></i>
              <h3>SQL</h3>
            </div>
            <div className="skill-box">
              <i className="fa-solid fa-database"></i>
              <h3>MySQL</h3>
            </div>
            <div className="skill-box">
              <i className="fa-solid fa-code-branch"></i>
              <h3>Git</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-figma"></i>
              <h3>Figma</h3>
            </div>
            <div className="skill-box">
              <i className="fa-brands fa-wordpress"></i>
              <h3>WordPress</h3>
            </div>
            <div className="skill-box">
              <svg
                className="skill-icon-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Tailwind CSS"
                role="img"
              >
                <path
                  fill="currentColor"
                  d="M12 6c-2.667 0-4.333 1.333-5 4 1-.667 1.917-.917 2.75-.75.476.095 1.018.42 1.618.975.976.902 2.107 1.95 4.632 1.95 2.667 0 4.333-1.333 5-4-1 .667-1.917.917-2.75.75-.476-.095-1.018-.42-1.618-.975C15.656 7.048 14.525 6 12 6Zm-5 6c-2.667 0-4.333 1.333-5 4 1-.667 1.917-.917 2.75-.75.476.095 1.018.42 1.618.975.976.902 2.107 1.95 4.632 1.95 2.667 0 4.333-1.333 5-4-1 .667-1.917.917-2.75.75-.476-.095-1.018-.42-1.618-.975C10.656 13.048 9.525 12 7 12Z"
                />
              </svg>
              <h3>Tailwind CSS</h3>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`page ${currentPage === "projects" ? "active" : ""} ${
            exitingPage === "projects" ? "exit-right" : ""
          }`}
          onTransitionEnd={handleTransitionEnd("projects")}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            A selection of my favorite projects i&apos;ve worked on.
          </p>

          <div className="projects-container">
            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/restrunt.jpg"
                    alt="Restaurant Website"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>Restaurant Website</h3>
                  <a href="https://special-dish.netlify.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/mowaedy.jpg"
                    alt="Smart Booking"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>Smart Booking</h3>
                  <a href="https://mowaedy.netlify.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/elshafiq.jpg"
                    alt="El Shafiq Construction"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>el shafiq construction</h3>
                  <a href="https://el-shafiq-cement.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/inance.jpg"
                    alt="INANC"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>INANC</h3>
                  <a href="https://inance-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/hospital.jpg"
                    alt="College Management System"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>College Management System</h3>
                  <a href="https://github.com/abdocs2004/java" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/alfajr-somix.png"
                    alt="Alfajr Somix"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>alfajr somix</h3>
                  <a href="https://alfajrsomix.com/" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/keyframe.png"
                    alt="keyframe|media production"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>keyframe|media production</h3>
                  <a href="https://keyframe-lb.com" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/ecommerce.png"
                    alt="Dashboard Ecommerce"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>Dashboard Ecommerce</h3>
                  <a href="https://github.com/abdocs2004/Ecommerce-Dashboard.git" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/cafe.jpg"
                    alt="Cafe Landing Page"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>Cafe Landing Page</h3>
                  <a href="https://cafe-landing-page-snowy.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
              <div className="project-cube">
                <div className="project-inner">
                  <div className="project-front">
                    <Image
                      src="/images/kader.png"
                      alt="Kader Academy | لعرض خدماتك التعليمية"
                      width={320}
                      height={220}
                      className="project-image"
                    />
                  </div>
                  <div className="project-back">
                    <h3>Kader Academy | لعرض خدماتك التعليمية</h3>
                    <a href="https://kadertech.netlify.app/arabic" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
              </div>

            <div className="project-cube">
              <div className="project-inner">
                <div className="project-front">
                  <Image
                    src="/images/games.png"
                    alt="Game | Keys"
                    width={320}
                    height={220}
                    className="project-image"
                  />
                </div>
                <div className="project-back">
                  <h3>Game | Keys</h3>
                  <a href="https://game-keys.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="trainings"
          className={`page ${currentPage === "trainings" ? "active" : ""} ${
            exitingPage === "trainings" ? "exit-right" : ""
          }`}
          onTransitionEnd={handleTransitionEnd("trainings")}
        >
          <h2 className="section-title">Trainings</h2>
          <p className="section-sub">
            A commitment to continuous learning and skill development.
          </p>

          <div className="trainings-container">
            <div className="training-box">
              <i className="fa-solid fa-laptop-code"></i>
              <div className="training-text">
                <h3>Front-End Development Training</h3>
                <p>
                  <strong>Div Academy</strong>
                </p>
                <p>Completed hands-on front-end program (HTML, CSS, JS, Bootstrap).</p>
              </div>
            </div>

            <div className="training-box">
              <i className="fa-solid fa-code"></i>
              <div className="training-text">
                <h3>Web Design Scholarship – 120 Hours</h3>
                <p>
                  <strong>National Telecommunication Institute (NTI)</strong>
                </p>
                <p>One-month intensive scholarship covering UI and front-end tools.</p>
              </div>
            </div>

            <div className="training-box">
              <i className="fa-solid fa-briefcase"></i>
              <div className="training-text">
                <h3>Freelancing Skills Scholarship</h3>
                <p>
                  <strong>ITIDA – MCIT</strong>
                </p>
                <p>Training on freelancing platforms, client communication and readiness.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`page ${currentPage === "contact" ? "active" : ""} ${
            exitingPage === "contact" ? "exit-right" : ""
          }`}
          onTransitionEnd={handleTransitionEnd("contact")}
        >
          <h2>have a project in mind?</h2>
          <p>
            i&apos;m always excited to discuss new projects and creative ideas. feel
            free to reach out.
          </p>

          <div className="container-contact">
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:abdo.cs.2004@gmail.com">abdo.cs.2004@gmail.com</a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>{" "}
              <a href="tel:+201025967218">+20 1025967218</a>
            </p>
            <p>
              <i className="fa-brands fa-whatsapp"></i>{" "}
              <a href="https://wa.me/201025967218" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </p>

            <div className="social">
              <a href="https://github.com/abdocs2004" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahman-ibrahim-cs2004/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <button className="btn-nav" onClick={onDownloadCv}>
              download cv <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

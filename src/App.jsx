import { useState } from "react";
import { portfolioData } from "./data/portfolioData";

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    <span className="section-eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
  </div>
);

const Pill = ({ children }) => <span className="pill">{children}</span>;

const ActionLink = ({ href, children, variant = "primary", download = false }) => (
  <a
    className={`action-link ${variant}`}
    href={href}
    {...(download ? { download: true } : {})}
    target={download ? undefined : "_blank"}
    rel={download ? undefined : "noreferrer"}
  >
    {children}
  </a>
);

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const {
    name,
    role,
    tagline,
    intro,
    quote,
    image,
    resumeLink,
    social,
    stats,
    personalDetails,
    experience,
    projects
  } = portfolioData;
  const projectFilters = ["All", "Personal Project", "Company Project"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand-mark" href="#home">
          <span className="brand-core">AP</span>
          <span className="brand-copy">
            <strong>{name}</strong>
            <small>{role}</small>
          </span>
        </a>

        <nav className="topnav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy card">
            <span className="hero-kicker">Future-ready UI/UX Portfolio</span>
            <h1>
              {name}
              <span>{role}</span>
            </h1>
            <p className="hero-tagline">{tagline}</p>
            <p className="hero-intro">{intro}</p>

            <div className="hero-actions">
              <ActionLink href={resumeLink} download>
                Download Resume
              </ActionLink>
              <ActionLink href={social.linkedin} variant="secondary">
                View LinkedIn
              </ActionLink>
              <ActionLink href={social.email} variant="ghost">
                Email Me
              </ActionLink>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual card">
            <div className="portrait-wrap">
              <img src={image} alt={`${name} portrait`} />
            </div>
            <div className="visual-panel">
              <span className="signal">Live Profile Signal</span>
              <div className="visual-grid">
                <div>
                  <small>Focus</small>
                  <strong>Premium UI Systems</strong>
                </div>
                <div>
                  <small>Mode</small>
                  <strong>Responsive + Dynamic</strong>
                </div>
                <div>
                  <small>Strength</small>
                  <strong>Clarity with Futuristic Style</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-grid" id="about">
          <article className="card about-card">
            <SectionTitle
              eyebrow="About Me"
              title="Designing interfaces with energy, precision, and purpose."
              description="A compact snapshot of who I am, how I work, and what I value in digital product design."
            />
            <p className="about-copy">{intro}</p>
            <blockquote>{quote}</blockquote>
          </article>

          <article className="card details-card">
            <SectionTitle
              eyebrow="Personal Details"
              title="Profile Data"
              description="Core information for quick contact, collaboration, and capability review."
            />
            <div className="details-grid">
              {personalDetails.map((item) => (
                <div className="detail-row" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="stacked-section" id="experience">
          <SectionTitle
            eyebrow="Previous Company Details"
            title="Experience that connects product thinking with polished execution."
            description="These entries are fully editable so you can swap in your real company names, roles, and achievements quickly."
          />

          <div className="timeline">
            {experience.map((job) => (
              <article className="card timeline-card" key={`${job.company}-${job.period}`}>
                <div className="timeline-top">
                  <div>
                    <span className="timeline-period">{job.period}</span>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                  </div>
                  <Pill>Experience</Pill>
                </div>
                <p className="timeline-summary">{job.summary}</p>
                <div className="tag-row">
                  {job.highlights.map((highlight) => (
                    <Pill key={highlight}>{highlight}</Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stacked-section" id="projects">
          <SectionTitle
            eyebrow="Projects"
            title="Personal and company work presented as sharp, high-impact case study cards."
            description="Use the live-link buttons to connect each project card to your Behance, Dribbble, portfolio case study, or product demo."
          />

          <div className="filter-row" aria-label="Project filters">
            {projectFilters.map((filter) => (
              <button
                className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                className={`card project-card accent-${project.accent}`}
                key={`${project.title}-${project.type}`}
              >
                <div className="project-top">
                  <Pill>{project.type}</Pill>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Link
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <article className="card contact-card">
            <SectionTitle
              eyebrow="Connect"
              title="Let's build interfaces that feel a step ahead."
              description="You can use the links below to open LinkedIn, email directly, or download the resume."
            />

            <div className="contact-actions">
              <ActionLink href={social.linkedin}>Open LinkedIn</ActionLink>
              <ActionLink href={social.email} variant="secondary">
                Send Email
              </ActionLink>
              <ActionLink href={resumeLink} variant="ghost" download>
                Get Resume
              </ActionLink>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;

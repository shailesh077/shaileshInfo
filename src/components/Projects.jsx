import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX, FiExternalLink, FiMaximize2 } from "react-icons/fi";
import { SectionHeading, reveal, spotlight } from "./shared";

const GITHUB = "https://github.com/shailesh077";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Design",
    description: "Modern portfolio website built with React and Tailwind CSS.",
    details:
      "A fast, fully responsive personal site with a light/dark theme, scroll-driven animations and an accessible, keyboard-friendly layout. It also includes a working contact form powered by EmailJS.",
    highlights: ["Responsive from 320px to 4K", "Light & dark themes", "Animated sections with Framer Motion"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    repo: GITHUB,
    gradient: "from-violet-500/40 via-fuchsia-500/20 to-transparent",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Full Stack",
    description: "A full-featured shopping application with payment integration.",
    details:
      "A complete online store covering the whole flow: browsing products, managing a cart, and paying securely through Stripe. State is managed with Redux and data is served by a Node/Express API.",
    highlights: ["Cart & checkout flow", "Stripe payment integration", "Redux-managed global state"],
    technologies: ["MERN Stack", "Redux", "Stripe API"],
    link: "#",
    repo: GITHUB,
    gradient: "from-cyan-400/40 via-sky-500/20 to-transparent",
  },
  {
    id: 3,
    title: "Blog App",
    category: "Web App",
    description: "Content management system with authentication and comment system.",
    details:
      "A blogging platform where users can sign up, write and manage posts, and discuss them in comments. Built with a React front end and a Node.js + MongoDB back end.",
    highlights: ["User authentication", "Create, edit & delete posts", "Comment system"],
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    repo: GITHUB,
    gradient: "from-lime-400/35 via-emerald-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    category: "API",
    description: "Real-time weather forecasting application with interactive maps.",
    details:
      "A live weather dashboard that fetches forecasts from a public weather API and visualises temperature trends with interactive charts and maps.",
    highlights: ["Real-time forecast data", "Interactive charts", "Search by city"],
    technologies: ["JavaScript", "Weather API", "Chart.js"],
    link: "#",
    repo: GITHUB,
    gradient: "from-amber-400/35 via-orange-500/20 to-transparent",
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

/** Card that tilts toward the pointer (fine pointers only) */
function TiltCard({ children, onOpen, label }) {
  const ref = useRef(null);

  const onMove = (e) => {
    spotlight(e);
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={label}
      className="glass group flex h-full cursor-pointer flex-col !transition-[transform,border-color,background-color] !duration-200"
    >
      {children}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] grid place-items-end bg-black/70 p-0 backdrop-blur-sm sm:place-items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] border border-line bg-soft shadow-2xl sm:rounded-[2rem]"
      >
        <div className={`relative h-40 bg-gradient-to-br ${project.gradient} sm:h-52`}>
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className="absolute -bottom-8 right-6 select-none font-display text-[10rem] font-bold leading-none text-fg/[0.08]">
            0{project.id}
          </span>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line bg-bg/60 backdrop-blur-md transition hover:bg-bg"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="chip">{project.category}</span>
          <h3 id="project-title" className="mt-4 font-display text-3xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-4 text-muted">{project.details}</p>

          <h4 className="eyebrow mt-7 !text-faint">Highlights</h4>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-a1 to-a2" />
                {h}
              </li>
            ))}
          </ul>

          <h4 className="eyebrow mt-7 !text-faint">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.link}
              target={project.link === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="btn btn-primary flex-1"
            >
              <FiExternalLink size={17} /> Live demo
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost flex-1">
              <FiGithub size={17} /> Source code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="projects"
            title="Selected"
            accent="work."
            text="Filter by type, then tap any project to explore the details."
          />
          <motion.a
            {...reveal(0.1)}
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost mb-12 self-start md:mb-16"
          >
            <FiGithub size={18} /> More on GitHub
          </motion.a>
        </div>

        {/* Filters */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`relative shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                filter === c ? "border-transparent text-white" : "border-line bg-surface text-muted hover:text-fg"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-a1 to-a2"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{c}</span>
              <span className="relative ml-2 font-mono text-xs opacity-70">
                {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard onOpen={() => setSelected(p)} label={`Open details for ${p.title}`}>
                  <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:18px_18px]" />
                    <span className="chip absolute left-5 top-5 backdrop-blur-md">{p.category}</span>
                    <span className="absolute -bottom-6 right-4 select-none font-display text-[9rem] font-bold leading-none text-fg/[0.07] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                      0{p.id}
                    </span>
                    <span className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full bg-bg/70 px-3 py-1.5 text-xs font-medium opacity-100 backdrop-blur-md transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                      <FiMaximize2 size={13} /> View details
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-a1 group-hover:bg-a1 group-hover:text-white">
                        <FiArrowUpRight size={18} />
                      </span>
                    </div>
                    <p className="mt-3 text-muted">{p.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

export default Projects;

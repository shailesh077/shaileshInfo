import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs, FaPython, FaJs } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { SectionHeading, reveal, spotlight } from "./shared";

const skills = [
  { name: "React", level: 92, Icon: FaReact, color: "#61dafb" },
  { name: "JavaScript", level: 88, Icon: FaJs, color: "#f7df1e" },
  { name: "HTML5", level: 90, Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", level: 85, Icon: FaCss3Alt, color: "#1572b6" },
  { name: "Tailwind", level: 85, Icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Git", level: 80, Icon: FaGitAlt, color: "#f05032" },
  { name: "Node.js", level: 75, Icon: FaNodeJs, color: "#339933" },
  { name: "TypeScript", level: 50, Icon: SiTypescript, color: "#3178c6" },
  { name: "Python", level: 30, Icon: FaPython, color: "#3776ab" },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="aurora opacity-60" aria-hidden="true">
        <span className="c !left-auto !right-0" />
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="skills"
          title="The toolkit behind"
          accent="every pixel."
          text="Technologies I use daily to design, build and ship modern web products."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, level, Icon, color }, i) => (
            <motion.article
              key={name}
              {...reveal((i % 3) * 0.08)}
              onPointerMove={spotlight}
              className="glass group p-5 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ background: `${color}1f` }}
                >
                  <Icon size={24} style={{ color }} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{name}</h3>
                  <p className="font-mono text-xs text-faint">
                    {level >= 85 ? "Expert" : level >= 70 ? "Advanced" : level >= 45 ? "Intermediate" : "Learning"}
                  </p>
                </div>
                <span className="font-mono text-sm text-muted">{level}%</span>
              </div>

              <div
                className="mt-5 h-1.5 overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-label={`${name} proficiency`}
                aria-valuenow={level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${color}, var(--accent-2))` }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marquee */}
        <div className="marquee mt-14" aria-hidden="true">
          {[0, 1].map((n) => (
            <div key={n} className="marquee-track">
              {skills.map(({ name, Icon, color }) => (
                <span key={name} className="chip !px-4 !py-2 !text-sm">
                  <Icon style={{ color }} /> {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

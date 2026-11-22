import { motion } from "framer-motion";
import { FiDownload, FiMapPin, FiMail, FiBookOpen, FiZap } from "react-icons/fi";
import { SectionHeading, reveal, spotlight } from "./shared";

const EMAIL = "shaileshvishwakarma2000@gmail.com";

const principles = [
  { title: "Performance first", text: "Lean bundles, lazy assets and 60fps motion." },
  { title: "Pixel-perfect", text: "Design systems that scale from 320px to 4K." },
  { title: "Accessible", text: "Keyboard, screen-reader and reduced-motion friendly." },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="about"
          title="Designing with"
          accent="intent, building with care."
          text="I'm a passionate Frontend Developer who loves turning ideas into fast, responsive and delightful websites using React."
        />

        <div className="grid gap-4 md:grid-cols-6 md:gap-5">
          {/* Story */}
          <motion.article {...reveal()} onPointerMove={spotlight} className="glass p-6 sm:p-8 md:col-span-4">
            <FiZap className="text-a2" size={26} />
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">My approach</h3>
            <p className="mt-3 text-muted">
              With a strong foundation in modern web technologies and a keen eye for design, I transform ideas into
              exceptional digital experiences that don&apos;t just look great, they deliver real results.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {principles.map((p) => (
                <li key={p.title} className="rounded-2xl border border-line bg-surface p-4">
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1 text-sm text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Education */}
          <motion.article {...reveal(0.1)} onPointerMove={spotlight} className="glass p-6 sm:p-8 md:col-span-2">
            <FiBookOpen className="text-a1" size={26} />
            <p className="eyebrow mt-5 !text-faint">Education</p>
            <p className="mt-2 font-display text-3xl font-bold tracking-tight">MCA</p>
            <p className="mt-1 text-muted">Master of Computer Applications, graduate.</p>
          </motion.article>

          {/* Location */}
          <motion.article {...reveal(0.15)} onPointerMove={spotlight} className="glass p-6 sm:p-8 md:col-span-2">
            <FiMapPin className="text-a3" size={26} />
            <p className="eyebrow mt-5 !text-faint">Based in</p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-tight">Ahmedabad</p>
            <p className="text-muted">Gujarat, India · Open to remote</p>
          </motion.article>

          {/* Email */}
          <motion.article {...reveal(0.2)} onPointerMove={spotlight} className="glass p-6 sm:p-8 md:col-span-2">
            <FiMail className="text-a2" size={26} />
            <p className="eyebrow mt-5 !text-faint">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block break-all font-medium underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
          </motion.article>

          {/* CV */}
          <motion.article
            {...reveal(0.25)}
            onPointerMove={spotlight}
            className="glass flex flex-col justify-between p-6 sm:p-8 md:col-span-2"
          >
            <p className="font-display text-xl font-semibold tracking-tight">Want the full story?</p>
            <a href="/shailesh_cv.pdf" download="Shailesh_CV.pdf" className="btn btn-primary mt-5 w-full">
              <FiDownload size={18} /> Download CV
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default About;

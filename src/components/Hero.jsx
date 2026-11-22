import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import Shailesh from "../assets/shailesh.jpg";

const roles = ["React interfaces", "responsive layouts", "smooth animations", "accessible products"];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    const delay = deleting ? 35 : text === word ? 1600 : 70;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI((n) => n + 1);
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

const stats = [
  { value: "9", label: "Technologies in my toolkit" },
  { value: "MCA", label: "Computer Applications graduate" },
  { value: "100%", label: "Responsive, always" },
];

const floatChips = [
  { Icon: FaReact, label: "React", cls: "-left-3 top-8 sm:-left-8", delay: 0 },
  { Icon: SiTailwindcss, label: "Tailwind", cls: "-right-2 top-24 sm:-right-8", delay: 1.2 },
  { Icon: FaJs, label: "JavaScript", cls: "-left-2 bottom-16 sm:-left-10", delay: 2.4 },
  { Icon: FaNodeJs, label: "Node.js", cls: "-right-1 bottom-6 sm:-right-6", delay: 0.6 },
];

function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="aurora" aria-hidden="true">
        <span className="a" />
        <span className="b" />
        <span className="c" />
      </div>
      <div className="grid-bg" aria-hidden="true" />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip !px-4 !py-1.5 !text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-a3" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
              <span className="relative h-2 w-2 rounded-full bg-a3" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-display mt-6"
          >
            Hi, I&apos;m <span className="text-gradient">Shailesh</span>
            <br />
            Frontend Developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 min-h-[3.5rem] max-w-xl text-lg text-muted sm:min-h-0 md:text-xl"
          >
            I craft{" "}
            <span className="font-mono text-fg" aria-live="polite">
              {typed}
              <span className="ml-0.5 inline-block w-[2px] bg-a2 align-middle" style={{ height: "1.1em", animation: "blink 1s step-end infinite" }} />
            </span>{" "}
            with React, Tailwind and a love for detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#projects" className="btn btn-primary">
              See my work <FiArrowDownRight size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s talk <FiArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-faint sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-a1 via-a2 to-a3 opacity-40 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-a1 via-a2 to-a3 p-[2px]">
            <div className="aspect-[4/5] overflow-hidden rounded-[calc(2rem-2px)] bg-soft">
              <img
                src={Shailesh}
                alt="Portrait of Shailesh Vishwakarma"
                width="640"
                height="800"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {floatChips.map(({ Icon, label, cls, delay }) => (
            <div
              key={label}
              className={`glass animate-float-y absolute !rounded-2xl px-3 py-2 text-sm font-medium shadow-xl ${cls}`}
              style={{ animationDelay: `${delay}s` }}
            >
              <span className="flex items-center gap-2">
                <Icon className="text-a2" size={18} />
                <span className="hidden sm:inline">{label}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

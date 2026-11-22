import { motion } from "framer-motion";

/** Spotlight handler: feeds cursor position into --mx / --my for .glass cards */
export const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/** Fade-up reveal used across sections */
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export function SectionHeading({ eyebrow, title, accent, text, align = "left" }) {
  return (
    <motion.div
      {...reveal()}
      className={`mb-12 max-w-2xl md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow mb-4">/ {eyebrow}</p>
      <h2 className="h-section">
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {text && <p className="mt-5 text-base text-muted md:text-lg">{text}</p>}
    </motion.div>
  );
}

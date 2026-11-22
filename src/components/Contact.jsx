import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiMail, FiPhone, FiCheck, FiSend, FiAlertCircle } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { SectionHeading, reveal, spotlight } from "./shared";

const contactInfo = [
  { Icon: FiMapPin, title: "Location", content: "Ahmedabad, Gujarat, India" },
  {
    Icon: FiMail,
    title: "Email",
    content: "shaileshvishwakarma2000@gmail.com",
    href: "mailto:shaileshvishwakarma2000@gmail.com",
  },
  { Icon: FiPhone, title: "Call", content: "+91 9265236504", href: "tel:+919265236504" },
];

const socials = [
  { Icon: FaGithub, label: "GitHub", url: "https://github.com/shailesh077" },
  { Icon: FaLinkedinIn, label: "LinkedIn", url: "https://www.linkedin.com/in/shailesh9265/" },
  { Icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/accounts/onetap/?next=%2F" },
];

const field =
  "w-full rounded-2xl border border-line bg-surface px-4 py-3.5 text-fg placeholder:text-faint outline-none transition focus:border-a2 focus:ring-4 focus:ring-a2/15";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { user_name: formData.name, user_email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("sent");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 6000);
        },
        (error) => {
          console.error("EmailJS failed:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="aurora opacity-70" aria-hidden="true">
        <span className="a !top-auto !-bottom-40" />
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something"
          accent="great together."
          text="Have a project, a role, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-5 lg:grid-cols-5">
          {/* Info */}
          <motion.div {...reveal()} onPointerMove={spotlight} className="glass p-6 sm:p-8 lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Contact details</h3>
            <ul className="mt-6 space-y-5">
              {contactInfo.map(({ Icon, title, content, href }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-a2">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow !text-faint">{title}</p>
                    {href ? (
                      <a href={href} className="break-all font-medium hover:text-a2">
                        {content}
                      </a>
                    ) : (
                      <p className="font-medium">{content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow !text-faint">Follow me</p>
              <div className="mt-4 flex gap-3">
                {socials.map(({ Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:-translate-y-1 hover:border-a1 hover:text-fg"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...reveal(0.1)} onPointerMove={spotlight} className="glass p-6 sm:p-8 lg:col-span-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Send a message</h3>

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-a3/40 bg-a3/10 p-10 text-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-a3 text-black">
                    <FiCheck size={28} />
                  </span>
                  <p className="font-display text-xl font-semibold">Message sent!</p>
                  <p className="text-muted">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="mt-6 space-y-5" exit={{ opacity: 0 }}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-muted">
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={field}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-muted">
                        Your email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={field}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-muted">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      className={`${field} resize-y`}
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
                      <FiAlertCircle /> Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message <FiSend size={17} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

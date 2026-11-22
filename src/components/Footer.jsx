import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const socials = [
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/shailesh077" },
  { Icon: FaLinkedinIn, label: "LinkedIn", link: "https://www.linkedin.com/in/shailesh9265/" },
  { Icon: FaInstagram, label: "Instagram", link: "https://www.instagram.com/accounts/onetap/?next=%2F" },
];

function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">
            shailesh<span className="text-gradient">.dev</span>
          </p>
          <p className="mt-1 text-sm text-muted">Creating exceptional digital experiences.</p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ Icon, label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:-translate-y-1 hover:border-a1 hover:text-fg"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <p className="text-sm text-faint">© {new Date().getFullYear()} Shailesh Vishwakarma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

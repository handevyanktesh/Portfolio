import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-ink-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16">
        <a href="#top" className="font-display font-semibold text-paper text-[15px] tracking-tight">
          Vyanktesh<span className="text-signal">.</span>Hande
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] text-paper-dim hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[13px] px-4 py-2 rounded-full bg-signal text-white hover:bg-signal-soft transition-colors"
          >
            Let's talk
          </a>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-border bg-ink/95 backdrop-blur-md">
          <div className="section-shell flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[13px] text-paper-dim hover:text-paper py-2.5 border-b border-ink-border/60 last:border-none"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

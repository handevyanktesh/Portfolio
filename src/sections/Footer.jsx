import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border">
      <div className="section-shell py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-paper text-[14px] font-medium">Vyanktesh Hande</span>
          <span className="font-mono text-paper-faint text-[12px]">© {year}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/handevyanktesh"
            target="_blank"
            rel="noreferrer"
            className="text-paper-dim hover:text-signal-soft transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/vyanktesh-hande-b80212286/"
            target="_blank"
            rel="noreferrer"
            className="text-paper-dim hover:text-signal-soft transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href="mailto:handevyanktesh47@gmail.com"
            className="text-paper-dim hover:text-signal-soft transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <a
            href="#top"
            className="ml-2 h-8 w-8 rounded-full border border-ink-border flex items-center justify-center text-paper-dim hover:text-signal-soft hover:border-signal-dim transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

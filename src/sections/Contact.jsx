import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";

const directLinks = [
  { icon: Mail, label: "handevyanktesh47@gmail.com", href: "mailto:handevyanktesh47@gmail.com" },
  { icon: Phone, label: "+91 74997 52996", href: "tel:+917499752996" },
  { icon: GithubIcon, label: "github.com/handevyanktesh", href: "https://github.com/handevyanktesh" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/vyanktesh-hande-b80212286/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-ink-border">
      <div className="section-shell grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <SectionHeading
            index="04"
            label="contact"
            title="Have a role in mind? Let's talk."
            description="Open to Software Engineer, Full Stack Developer, and AI Engineer roles — internships or full-time. The form below goes straight to my inbox."
          />

          <div className="mt-8 flex flex-col gap-3">
            {directLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-3 text-paper-dim hover:text-signal-soft transition-colors text-[13.5px] font-mono"
              >
                <span className="h-9 w-9 shrink-0 rounded-lg bg-ink-surface border border-ink-border flex items-center justify-center">
                  <Icon size={15} />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-ink-border bg-ink-surface p-7 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

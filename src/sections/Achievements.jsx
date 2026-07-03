import { Trophy, Award } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "200+ DSA problems solved",
    detail: "Across LeetCode and GeeksforGeeks",
  },
  {
    icon: Award,
    title: "NxtWave CCBP 3.0",
    detail: "Software Development Program certification",
  },
];

export default function Achievements() {
  return (
    <section className="border-t border-ink-border">
      <div className="section-shell py-10 grid sm:grid-cols-2 gap-6">
        {items.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="flex items-center gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-ink-surface border border-ink-border flex items-center justify-center text-circuit">
              <Icon size={18} />
            </div>
            <div>
              <p className="text-paper text-[14px] font-medium">{title}</p>
              <p className="text-paper-faint text-[12.5px] font-mono mt-0.5">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

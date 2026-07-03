// Section labels styled like a code comment — "// 02 projects" — since
// this is a developer's own vernacular, not a decorative numbered badge.
export default function Eyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-signal-soft font-mono text-[12.5px]">//</span>
      <span className="font-mono text-[12.5px] tracking-[0.08em] text-signal-soft uppercase">
        {index ? `${index} ` : ""}
        {label}
      </span>
    </div>
  );
}

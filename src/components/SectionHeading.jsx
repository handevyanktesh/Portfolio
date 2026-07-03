import Eyebrow from "./Eyebrow";

export default function SectionHeading({ index, label, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} max-w-2xl`}>
      <Eyebrow index={index} label={label} />
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-paper-dim text-[15px] leading-relaxed">{description}</p>
      )}
    </div>
  );
}

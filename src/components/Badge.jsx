export default function Badge({ children, tone = "default" }) {
  const tones = {
    default: "border-white/10 bg-white/5 text-gray",
    live: "border-secondary/40 bg-secondary/10 text-secondary",
    soon: "border-white/10 bg-white/5 text-gray",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

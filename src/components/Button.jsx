export default function Button({ children, variant = "primary", href, onClick, icon: Icon }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-indigo-500 hover:shadow-[0_0_24px_-6px_rgba(79,70,229,0.7)]",
    ghost:
      "border border-white/15 text-text hover:border-white/40 hover:bg-white/5",
  };

  const cls = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {Icon && <Icon size={16} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
}

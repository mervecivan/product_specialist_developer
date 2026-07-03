export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray sm:flex-row">
        <p>© {new Date().getFullYear()} Merve Civan</p>
        <p className="font-mono text-xs">
          Built with React, Tailwind &amp; Framer Motion — no loot boxes involved
        </p>
      </div>
    </footer>
  );
}

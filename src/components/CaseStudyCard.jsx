import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "./Badge";

export default function CaseStudyCard({ study, index }) {
  const isSoon = study.status === "coming-soon" || study.status === "in-progress";
  const badgeLabel = study.status === "in-progress" ? "In progress" : "Coming soon";

  return (
    <motion.a
      href={isSoon ? undefined : study.link}
      target={isSoon ? undefined : "_blank"}
      rel={isSoon ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={!isSoon ? { scale: 1.03 } : {}}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-card p-7 transition-colors duration-300 ${
        isSoon ? "cursor-default opacity-70" : "hover:border-white/25 hover:bg-card-hover"
      }`}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <Badge tone={isSoon ? "soon" : "live"}>
            {isSoon ? badgeLabel : "Case Study"}
          </Badge>
          {!isSoon && (
            <ArrowUpRight
              size={18}
              className="text-gray transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary"
            />
          )}
        </div>

        <h3 className="font-display text-2xl font-bold text-text">{study.title}</h3>
        <p className="mb-4 text-sm text-secondary">{study.subtitle}</p>
        <p className="text-sm leading-relaxed text-gray">{study.summary}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray"
          >
            {tag}
          </span>
        ))}
      </div>

      {study.metrics.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-lg font-bold text-text">{m.value}</p>
              <p className="text-xs text-gray">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-6 font-mono text-xs text-gray">{study.readTime}</p>
    </motion.a>
  );
}
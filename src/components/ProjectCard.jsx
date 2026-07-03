import { motion } from "framer-motion";
import Badge from "./Badge";

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link || undefined}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={project.link ? { scale: 1.02 } : {}}
      className={`block rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 ${
        project.link ? "hover:border-white/25" : "cursor-default"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-text">{project.title}</h3>
        {project.status === "in-progress" && (
          <Badge tone="soon">In progress</Badge>
        )}
      </div>
      <p className="text-sm leading-relaxed text-gray">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
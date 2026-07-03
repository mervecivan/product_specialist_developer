import { motion } from "framer-motion";

export default function SkillCard({ label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.05 }}
      className="rounded-xl border border-white/10 bg-card px-5 py-4 text-center transition-colors duration-300 hover:border-secondary/40 hover:bg-card-hover"
    >
      <p className="text-sm font-medium text-text">{label}</p>
    </motion.div>
  );
}

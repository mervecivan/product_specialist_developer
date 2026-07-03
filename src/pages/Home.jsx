import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CaseStudyCard from "../components/CaseStudyCard";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { caseStudies } from "../data/caseStudies";
import { skills, projects } from "../data/content";
import { motion } from "framer-motion";
import { Mail, Code2, Link2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Case Studies */}
      <section id="case-studies" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="Featured Work"
          title="Product Case Studies"
          description="Mobil oyunları core loop'tan ekonomiye, retention'dan monetizasyona kadar derinlemesine inceliyorum."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* Product Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Inventory" title="Product Skills" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill} label={skill} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="Side Quests"
          title="Featured Projects"
          description="Feature tasarımından uçtan uca veri projelerine, product thinking'i farklı formatlarda uyguladığım çalışmalar."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-secondary">
              Origin Story
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Why some games keep players for years — and others lose them in days.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-base leading-relaxed text-gray"
          >
            <p>
              That question has followed me through 4+ years of competitive
              Clash Royale, a degree in Information Systems &amp; Technologies,
              and every product teardown I've written since.
            </p>
            <p>
              It's what led me from writing SQL queries to asking why the
              numbers looked the way they did — and eventually, to studying
              product management, game economy and player behavior as one
              discipline rather than three separate skills.
            </p>
            <p>
              Today I combine that curiosity with a practical toolkit: Python,
              SQL, Power BI, and a builder's instinct — this site included.
              (I main support characters. Turns out that's not just a game
              habit.)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-card px-8 py-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-secondary">
            Insert Coin
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Let's talk about building better games.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-gray">
            Product Specialist / Product Analyst pozisyonları için açığım —
            mesaj bırak, dönüş yapayım.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="mailto:merve.civan25@gmail.com" icon={Mail}>
              Email
            </Button>
            <Button href="https://www.linkedin.com/in/merve-civan/" variant="ghost" icon={Link2}>
              LinkedIn
            </Button>
            <Button href="https://github.com/mervecivan" variant="ghost" icon={Code2}>
              GitHub
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

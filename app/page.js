"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Figma, Layers3, MapPin, Sparkles } from "lucide-react";
import Contact from "@/components/contact";
import ProjectsSection from "@/components/project_tabs";
import SkillsSlider from "@/components/skills_slider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const education = [
  { date: "2026 — Present", place: "Futura School", role: "User Experience Design" },
  { date: "2026 — Present", place: "UXcellence", role: "UX Design With AI" },
  { date: "2025", place: "Fairway Technology", role: "Professional UI/UX Design" },
  { date: "2025", place: "Donato", role: "Mastering Adobe Photoshop" },
  { date: "2024 — 2025", place: "Fairway Technology", role: "Rockstar Developer Course" },
  { date: "2022 — 2024", place: "KBTC School of IT", role: "ITPEC · NCC Level-4 Diploma in Programming" },
];

const experience = [
  { date: "Sep 2026 — Present", place: "ET.Verdict", role: "UI/UX Intern", note: "Designing clear, thoughtful experiences for digital products." },
  { date: "Jun 2024 — Jun 2026", place: "MetaTeam Myanmar Company", role: "Junior Developer", note: "Maintained 300+ dental websites, improved layouts, investigated Shopify plugins, and collaborated on product design." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div className="availability" variants={fadeUp}><span className="status-dot" /> UI/UX Designer &amp; Frontend Developer</motion.div>
          <motion.div className="hero-mascot" variants={fadeUp}>
            <Image src="/img/hsu-mini-character.png" alt="Mini character illustration of Hsu Thinzar" width={512} height={512} priority />
          </motion.div>
          <motion.p className="eyebrow" variants={fadeUp}>Hello, I&apos;m Hsu Thinzar</motion.p>
          <motion.h1 variants={fadeUp}>I design thoughtful<br /><span>digital experiences.</span></motion.h1>
          <motion.p className="hero-description" variants={fadeUp}>I bring product ideas to life through intuitive UI/UX and clean, responsive frontend development.</motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
            <a className="button button-quiet" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
          </motion.div>
          <motion.div className="hero-location" variants={fadeUp}><MapPin size={15} /> Based in Myanmar <span className="hero-divider" /> Open to meaningful opportunities</motion.div>
        </motion.div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span /> Scroll to explore</a>
      </section>

      <section className="section about-section" id="about">
        <div className="section-shell">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <span className="section-kicker">A little about me</span>
            <h2>Curious by nature.<br /><span>Considerate by design.</span></h2>
          </motion.div>
          <div className="about-grid">
            <motion.article className="glass-card about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <span className="card-index">01 / ABOUT</span>
              <p>I’m a UI/UX designer with a background in frontend development and CMS platforms. Currently working as a UI/UX Intern, I’m continuing to grow my design skills and explore ways to turn complex workflows into simple, intuitive experiences.</p>
              <p>At MetaTeam Myanmar, I gained hands-on experience in frontend development and CMS maintenance, supporting more than 300 dental websites, improving WordPress layouts, and investigating Shopify plugin issues. I also participated in UXMM’s Into the AI Ocean Buildathon as a UI Designer.</p>
              <a className="text-link" href="/HsuThinzar_CV.pdf" target="_blank" rel="noreferrer">View my résumé <ArrowUpRight size={16} /></a>
            </motion.article>
            <motion.article className="glass-card focus-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <span className="card-index">02 / WHAT I DO</span>
              <div className="focus-item"><span className="focus-icon"><Figma size={19} /></span><div><h3>Product design</h3><p>Research, user flows, wireframes &amp; prototypes</p></div></div>
              <div className="focus-item"><span className="focus-icon"><Code2 size={19} /></span><div><h3>Frontend development</h3><p>Responsive interfaces and polished details</p></div></div>
              <div className="focus-item"><span className="focus-icon"><Layers3 size={19} /></span><div><h3>Website care</h3><p>WordPress, Shopify &amp; ongoing improvements</p></div></div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-shell">
          <motion.div className="section-heading compact-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <span className="section-kicker">My toolkit</span><h2>Skills &amp; <span>technologies</span></h2>
          </motion.div>
          <SkillsSlider />
        </div>
      </section>

      <section className="section journey-section" id="experience">
        <div className="section-shell journey-grid">
          <motion.div className="journey-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <span className="section-kicker">The path so far</span><h2>Experience &amp;<br /><span>education</span></h2>
            <p>Each role and course has added a new tool to my way of thinking and making.</p>
          </motion.div>
          <div className="journey-columns">
            <motion.div className="journey-column" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
              <h3 className="column-title"><BriefcaseBusiness size={17} /> Experience</h3>
              {experience.map((item) => <article className="timeline-card" key={item.place}><span className="timeline-date">{item.date}</span><h4>{item.place}</h4><p className="timeline-role">{item.role}</p><p className="timeline-note">{item.note}</p></article>)}
            </motion.div>
            <motion.div className="journey-column" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
              <h3 className="column-title"><Sparkles size={17} /> Learning</h3>
              {education.map((item) => <article className="timeline-card education-card" key={item.place + item.date}><span className="timeline-date">{item.date}</span><h4>{item.place}</h4><p className="timeline-role">{item.role}</p></article>)}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-shell">
          <motion.div className="section-heading projects-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <span className="section-kicker">Selected work</span><h2>Ideas made <span>real.</span></h2><p>A mix of product design, web development, and visual experiments.</p>
          </motion.div>
          <ProjectsSection />
        </div>
      </section>
      <Contact />
      <footer className="site-footer"><p>Designed with care by Hsu Thinzar</p></footer>
    </main>
  );
}

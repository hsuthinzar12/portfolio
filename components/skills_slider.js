"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const groups = [
  { title: "Product design", note: "From first sketch to clickable flow", skills: ["Figma", "Photoshop"] },
  { title: "Frontend", note: "Accessible, responsive interfaces", skills: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind", "Sass"] },
  { title: "Platforms & tools", note: "Building and maintaining for the web", skills: ["WordPress", "Shopify", "Webflow"] },
];
const icons = { HTML: "html", CSS: "css", JavaScript: "js", WordPress: "wordpress", Shopify: "shopify", "Next.js": "nextjs", Tailwind: "tailwind", Sass: "sass", Figma: "figma", Webflow: "webflow", Photoshop: "psd" };

export default function SkillsSlider() {
  return <div className="skill-groups">{groups.map((group, i) => <motion.article className="glass-card skill-card" key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: i * 0.1 }}><span className="card-index">0{i + 1} / TOOLKIT</span><h3>{group.title}</h3><p>{group.note}</p><div className="skill-list">{group.skills.map((skill) => <span className="skill-pill" key={skill}><Image src={`/img/svg/${icons[skill]}.svg`} alt="" width={17} height={17} />{skill}</span>)}</div></motion.article>)}</div>;
}

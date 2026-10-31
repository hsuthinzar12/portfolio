"use client";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const projectsData = [
  { id: 1, category: "coding", title: "Corporate Website Renewal", eyebrow: "Web development", tags: ["WordPress", "CSS", "jQuery"], visual: "visual-purple", mark: "01", description: "Audited a corporate website, removed redundant plugins, and implemented custom functionality. Fixed layout bugs and refined pages to match updated designs." },
  { id: 2, category: "coding", title: "Dental Website Network", eyebrow: "Multi-site maintenance", tags: ["HTML", "CSS", "WordPress"], visual: "visual-blue", mark: "300+", description: "Maintained more than 300 dental websites, keeping daily experiences stable while resolving layout issues and supporting long-term improvements." },
  { id: 3, category: "coding", title: "Shopify Plugin Investigation", eyebrow: "Technical research", tags: ["Shopify", "Liquid", "Local setup"], visual: "visual-pink", mark: "03", description: "Set up local Shopify testing environments to investigate plugin conflicts and app constraints, then shared findings to support client decisions." },
  { id: 4, category: "uiux", title: "Ferry App", eyebrow: "UI/UX Case Study · Transportation", tags: ["Figma", "UX research"], img: "/img/img_ferry_app.png", link: "https://www.figma.com/design/I5XDQ3l5G8Rc7nz3Bqte64/Ferry-App?node-id=2391-531&t=qSYFX7SoifbgSWiZ-1", description: "Explored ways to make daily commutes smoother by addressing pain points shared by both employees and drivers." },
  { id: 10, category: "uiux", title: "StockSense", eyebrow: "Buildathon Project", tags: ["Product design", "Inventory", "Food warehouse"], visual: "visual-ocean", mark: "SS", link: "https://oceanblue-ten.vercel.app/dashboard", linkLabel: "Live Demo", description: "AI-powered inventory management system for food warehouses, with plans to expand to convenience stores. Contributed to frontend development and UI improvements." },
  { id: 11, category: "uiux", title: "Skillence", eyebrow: "UI/UX · Job Portal App", tags: ["UI/UX design", "Job portal"], visual: "visual-purple", mark: "SK", confidential: true, description: "UI/UX design for a job portal application. Project details and design files are confidential." },
  { id: 12, category: "uiux", title: "Pawverse", eyebrow: "UI/UX Group Project · Pet Community App", tags: ["Figma", "Mobile app", "Community"], visual: "visual-pink", mark: "PV", link: "https://www.figma.com/design/JZAqh2xQR7csYRaUZ5cHpo/PawVerse-Product-UI?node-id=1-3&t=xBLVH1nOe4Atc6er-1", description: "Collaborated on a pet community app with pet posts, chat, missing-pet updates, and health articles." },
  { id: 6, category: "uiux", title: "BurmaBeat", eyebrow: "UI/UX Group Project · Music App", tags: ["Figma", "UX research"], visual: "visual-pink", mark: "♪", link: "https://www.figma.com/design/JtdBg0wl3ELJQ7SVSy7ay2/BurmaBeat?node-id=2-2&t=dWxvZA83ERvpFnpe-1", description: "Designed an interactive nine-screen music experience covering Beatjam, Find Song, and Music Play, guided by user personas." },
  { id: 5, category: "uiux", title: "EMS Dashboard", eyebrow: "Interface design", tags: ["Figma", "Prototyping"], visual: "visual-blue", mark: "EMS", link: "https://www.figma.com/design/AfWeMxljNPWH8oAs2p3uJW/EMS?node-id=0-1&t=lc9F3rg9o6iHicQb-1", description: "Recreated the interface of an existing enterprise platform, keeping its established structure and visual behavior intact." },
  { id: 7, category: "design", title: "Foodpanda Campaign", eyebrow: "Visual design", tags: ["Photoshop"], img: "/img/img_foodpanda.webp" },
  { id: 8, category: "design", title: "KFC Campaign", eyebrow: "Visual design", tags: ["Photoshop"], img: "/img/img_kfc.webp" },
  { id: 9, category: "design", title: "Heineken Campaign", eyebrow: "Visual design", tags: ["Photoshop"], img: "/img/img_heineken.webp" },
];
const tabs = [["coding", "Development"], ["uiux", "UI/UX design"], ["design", "Visual design"]];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("coding");
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: true });
  const updateEdges = () => {
    const track = trackRef.current;
    if (track) setEdges({ start: track.scrollLeft <= 2, end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2 });
  };
  useEffect(() => {
    const track = trackRef.current;
    track.scrollTo({ left: 0, behavior: "instant" });
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    return () => observer.disconnect();
  }, [activeTab]);
  const slide = (direction) => {
    const track = trackRef.current;
    const card = track.querySelector("article");
    if (!card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
    const maxScroll = track.scrollWidth - track.clientWidth;
    // Wrap in either direction, including after a touch swipe to an endpoint.
    const target = direction > 0
      ? (track.scrollLeft >= maxScroll - 2 ? 0 : Math.min(maxScroll, track.scrollLeft + step))
      : (track.scrollLeft <= 2 ? maxScroll : Math.max(0, track.scrollLeft - step));
    track.scrollTo({ left: target, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  const visibleProjects = projectsData.filter((project) => project.category === activeTab);
  return <div className="project-block">
    <div className="project-tabs" role="group" aria-label="Filter projects">{tabs.map(([key, label]) => <button key={key} type="button" aria-pressed={activeTab === key} className={activeTab === key ? "active" : ""} onClick={() => setActiveTab(key)}>{label}<span>{projectsData.filter((project) => project.category === key).length.toString().padStart(2, "0")}</span></button>)}</div>
    <div ref={trackRef} className="project-list project-carousel" onScroll={updateEdges} role="region" aria-label="Projects — scroll horizontally" tabIndex={0} onKeyDown={(event) => {
      if (event.target !== event.currentTarget) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); slide(event.key === "ArrowRight" ? 1 : -1); }
    }}>
      {visibleProjects.map((project) => <article className="project-card" key={project.id}>
        {project.img ? <div className="project-visual"><Image src={project.img} alt={`${project.title} preview`} width={700} height={450} /></div> : <div className={`project-visual project-visual-generated ${project.visual}`}><span>{project.mark}</span><i /><i /><i /></div>}
        <div className="project-body"><span className="project-eyebrow">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.confidential ? <span className="project-link">Confidential</span> : project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel || "View Details"} <ExternalLink size={15} /></a>}
        </div>
      </article>)}
    </div>
    {(!edges.start || !edges.end) && <div className="project-carousel-controls">
      <button type="button" onClick={() => slide(-1)} aria-label="Previous projects"><ChevronLeft size={20} /></button>
      <span>Explore {visibleProjects.length} projects</span>
      <button type="button" onClick={() => slide(1)} aria-label="Next projects"><ChevronRight size={20} /></button>
    </div>}
    <p className="project-note"><ArrowUpRight size={15} /> Select a category to explore different sides of my work.</p>
  </div>;
}

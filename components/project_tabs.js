"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("coding");

  // Sample data array
  const projectsData = [
    {
      id: 1,
      category: "coding",
      title: "Corporate Website Renewal & Optimization",
      tags: ["WordPress", "CSS", "jQuery"],
      description:
        "Assisted in auditing a corporate site by removing redundant plugins and manually implementing custom functionalities to boost performance. Fixed bugs and customized layouts according to design updates.",
    },
    {
      id: 2,
      category: "coding",
      title: "Multi-Site Dental Platforms Maintenance",
      tags: ["HTML", "CSS", "jQuery", "WordPress"],
      description:
        "Successfully managed and maintained over 300+ dental websites, ensuring daily stability, resolving technical layout bugs, and providing seamless long-term code support.",
    },
    {
      id: 3,
      category: "uiux",
      title: "Ferry App",
      tags: ["Figma", "UX Research"],
      link: "https://www.figma.com/design/I5XDQ3l5G8Rc7nz3Bqte64/Ferry-App?node-id=38-717&t=xJ9DFbIOcSyh6Dpt-1",
      description:
        "Focused on resolving critical pain points experienced by both employees and drivers to streamline daily commutes.",
    },
    {
      id: 4,
      category: "uiux",
      title: "EMS Dashboard",
      tags: ["Figma", "Prototyping"],
      link: "https://www.figma.com/design/AfWeMxljNPWH8oAs2p3uJW/EMS?node-id=0-1&t=lc9F3rg9o6iHicQb-1",
      description:
        "A complete UI layout recreation of the pre-developed enterprise platform, maintained exactly as-is.",
    },
    {
      id: 5,
      category: "design",
      title: "FoodPanda Poster",
      tags: ["Adobe Photoshop"],
      img: "/img/img_foodpanda.webp",
    },
    {
      id: 6,
      category: "coding",
      title: "Shopify Plugin Investigation",
      tags: ["Shopify", "Liquid", "Local Dev Environment"],
      description:
        "Configured local Shopify testing setups to investigate complex plugin conflicts and app architecture constraints, delivering technical analysis for client requirements.",
    },
    {
      id: 7,
      category: "uiux",
      title: "BurmaBeat",
      tags: ["Figma", "UX Research"],
      link: "https://www.figma.com/design/JtdBg0wl3ELJQ7SVSy7ay2/BurmaBeat?node-id=2-2&t=dWxvZA83ERvpFnpe-1",
      description:
        "Designed an interactive 9-screen layout for Beatjam, Find Song, and Music Play features, based on research-driven user personas.",
    },
    {
      id: 8,
      category: "design",
      title: "KFC Poster",
      tags: ["Adobe Photoshop"],
      img: "/img/img_kfc.webp",
    },
    {
      id: 9,
      category: "design",
      title: "Heineken Poster",
      tags: ["Adobe Photoshop"],
      img: "/img/img_heineken.webp",
    },
  ];

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeTab,
  );

  return (
    <div className="project-blk">
      <div className="project-tabs">
        <button
          className={`tab-btn ${activeTab === "coding" ? "active" : ""}`}
          onClick={() => setActiveTab("coding")}
        >
          Coding
        </button>
        <button
          className={`tab-btn ${activeTab === "uiux" ? "active" : ""}`}
          onClick={() => setActiveTab("uiux")}
        >
          UI/UX Design
        </button>
        <button
          className={`tab-btn ${activeTab === "design" ? "active" : ""}`}
          onClick={() => setActiveTab("design")}
        >
          Design
        </button>
      </div>
      <div className="project-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="img-blk">
                {project.category === "design" && (
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={300}
                    height={300}
                  />
                )}
              </div>
            </div>
            {project.category === "uiux" && project.link && (
              <div className="project-btn">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prototype-link"
                >
                  <span>View Prototype</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

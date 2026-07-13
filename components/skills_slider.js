"use client";

const skills = [
  { name: "HTML", icon: "/img/svg/html.svg" },
  { name: "CSS", icon: "/img/svg/css.svg" },
  { name: "JavaScript", icon: "/img/svg/js.svg" },
  { name: "WordPress", icon: "/img/svg/wordpress.svg" },
  { name: "Shopify", icon: "/img/svg/shopify.svg" },
  { name: "Next.js", icon: "/img/svg/nextjs.svg" },
  { name: "Tailwind", icon: "/img/svg/tailwind.svg" },
  { name: "Sass", icon: "/img/svg/sass.svg" },
  { name: "Figma", icon: "/img/svg/figma.svg" },
  { name: "WebFlow", icon: "/img/svg/webflow.svg" },
  { name: "PhotoShop", icon: "/img/svg/psd.svg" },
];

export default function SkillsSlider() {
  const looped = [...skills, ...skills]; 

  return (
    <div className="skill-blk">
      <ul className="skill-list animate-slide">
        {looped.map((skill, index) => (
          <li key={index} >
            <div className="skill-img">
              <img
              src={skill.icon}
              alt={skill.name}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

const tools = [
  { name: "HTML", icon: "/img/html.svg" },
  { name: "CSS", icon: "/img/css.svg" },
  { name: "JavaScript", icon: "/img/js.svg" },
  { name: "WordPress", icon: "/img/wordpress.svg" },
  { name: "Shopify", icon: "/img/shopify.svg" },
  { name: "Next.js", icon: "/img/nextjs.svg" },
  { name: "Tailwind", icon: "/img/tailwind.svg" },
  { name: "Sass", icon: "/img/sass.svg" },
  { name: "Figma", icon: "/img/figma.svg" },
  { name: "WebFlow", icon: "/img/webflow.svg" },
  { name: "PhotoShop", icon: "/img/psd.svg" },
];

export default function ToolSlider() {
  const looped = [...tools, ...tools]; 

  return (
    <div className="w-full overflow-hidden py-6">
      <div className="slider-track flex gap-12 animate-slide">
        {looped.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[100px] flex-shrink-0"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-12 h-12 object-contain"
            />
            <span className="mt-2 font-bold text-sm text-white text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

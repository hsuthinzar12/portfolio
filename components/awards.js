import Image from "next/image";
import { Trophy, Award, ArrowUpRight } from "lucide-react";

const awards = [
  { title: "Best Idea Award", image: "/img/awards/best-idea.png", Icon: Trophy, description: "Recognized for StockSense’s inventory management concept." },
  { title: "Funded Award", image: "/img/awards/funded-award.png", Icon: Award, highlight: "$1,000 Investment", description: "Selected for investment support." },
];

export default function AwardsSection() {
  return (
    <section className="section awards-section" id="awards" aria-labelledby="awards-heading">
      <div className="section-shell">
        <div className="section-heading awards-heading">
          <span className="section-kicker">Milestones</span>
          <h2 id="awards-heading">Awards &amp; <span>Recognition</span></h2>
          <p>UXMM · Into the AI Ocean Buildathon 2026</p>
        </div>
        <div className="awards-grid">
          {awards.map(({ title, image, Icon, description, highlight }) => (
            <article className="glass-card award-card" key={title}>
              <a className="award-image-link" href={image} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} announcement (opens in a new tab)`}>
                <Image src={image} alt={`${title} announcement for Team Ocean Blue’s StockSense project`} width={2048} height={2048} sizes="(max-width: 620px) 132px, (max-width: 1100px) 180px, 220px" />
                <span className="award-image-action" aria-hidden="true"><ArrowUpRight size={15} /></span>
              </a>
              <div className="award-copy">
                <Icon className="award-icon" size={25} aria-hidden="true" />
                <h3>{title}</h3>
                {highlight && <strong className="award-highlight">{highlight}</strong>}
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="awards-credit">
          <p className="awards-team">Team Ocean Blue · StockSense</p>
          <span>StockSense is now known as Operight.</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function SkillCard() {
  const [coding, setCoding] = useState(0);
  const [cms, setCms] = useState(0);
  const [uiux, setUiux] = useState(0);
  const [psd, setPsd] = useState(0);

  useEffect(() => {
    setTimeout(() => setCoding(80), 300);
    setTimeout(() => setCms(60), 300);
    setTimeout(() => setUiux(70), 300);
    setTimeout(() => setPsd(40), 300);
  }, []);

  return (
    <div className="skill-list">
      <div className="skill-blk">
        <h3>Design Coding</h3>
        <p>Responsive design coding using HTML, CSS, and jQuery.</p>
        <div className="progress-blk">
          <span>{coding}%</span>
          <div className="progress-bar">
            <Progress value={coding} className="progress" />
          </div>
        </div>
      </div>
      <div className="skill-blk">
        <h3>CMS & Ecommerce</h3>
        <p>Building and customizing websites using WordPress and Shopify.</p>
        <div className="progress-blk">
          <span>{cms}%</span>
          <div className="progress-bar">
            <Progress value={cms} className="progress" />
          </div>
        </div>
      </div>
      <div className="skill-blk">
        <h3>
          UI/UX
        </h3>
        <p>Designed wireframes and interactive layouts, focusing on component consistency and user flow optimization in Figma.</p>
        <div className="progress-blk">
          <span>{uiux}%</span>
          <div className="progress-bar">
            <Progress value={uiux} className="progress" />
          </div>
        </div>
      </div>
      <div className="skill-blk">
        <h3>PhotoShop</h3>
        <p>Basic image editing with Photoshop</p>
        <div className="progress-blk">
          <span>{psd}%</span>
          <div className="progress-bar">
            <Progress value={psd} className="progress" />
          </div>
        </div>
      </div>
    </div>
  );
}

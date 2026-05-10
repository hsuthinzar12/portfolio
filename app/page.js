"use client";
import ToolSlider from "@/components/tool-slider";
import Skill from "@/components/skill";
import Projects from "@/components/projects";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Contact from "@/components/contact";

export default function Home() {
  const [selectDesign, setselectDesign] = useState(0);
  const designs = [
    { src: "/img/design01.webp", alt: "Design 01" },
    { src: "/img/design02.webp", alt: "Design 02" },
    { src: "/img/design03.webp", alt: "Design 03" },
  ];

  return (
    <div className="wrapper">
      <section className="sec-mv">
        <div className="inner">
          <div className="mv-blk">
            <div className="mv-txt">
              <h1>
                <span>
                  Hello,
                  <Image
                    src="/img/hand-waving.gif"
                    className="hand-wave"
                    alt="wave"
                    width={100}
                    height={100}
                  />
                </span>
                I'm Hsu Thinzar
              </h1>
              <p>
                Web Developer & UIUX Designer passionate about building responsive design & creating eye catching designs
              </p>
            </div>
            <div className="mv-img">
              <Image src="/img/hsu.webp" alt="Hsu" width={300} height={300} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-about scroll-mt-30" id="about">
        <h2 className="cmn-ttl">About Me</h2>
        <div className="inner">
          <div className="abt-blk">
            <p>
              I am Junior Web Developer at MetaTeam Myanmar (since June 2024), specializing in WordPress and Shopify development. I build and customize high-performance layouts using HTML, CSS, and jQuery.
            </p>
            <p>
              In addition to development, I work with Photoshop to assist with
              design assets, and I support junior team members by training and
              explaining project workflows, which has strengthened my teaching
              and communication skills.
            </p>
            <p>
              Recently certified in a Professional UI/UX Design Course at
              Fairway Technology, I have built a diverse portfolio ranging from
              Burma Beat (a collaborative music app focused on user research) to
              NearBrew (a solo project featuring deli and pickup logic).
              Additionally, I redesigned the EMS UI to ensure a professional,
              user-ready interface for a live system.
            </p>
          </div>
          <div className="edu-blk">
            <div className="edu-list">
              <div className="edu-itm">
                <h3>Education</h3>
                <ul>
                  <li>
                    <span>2022 ~ 2024</span>
                    <span>
                      KBTC School Of IT
                      <small>
                        ITPEC
                        <br />
                        NCC Level-4 Diploma Programming
                      </small>
                    </span>
                  </li>
                  <li>
                    <span>2024 ~ 2025</span>
                    <span>
                      Fairway Technology
                      <small>Rockstar Developer Course</small>
                    </span>
                  </li>
                  <li>
                    <span>
                      2025<small>(March ~ June)</small>
                    </span>
                    <span>
                      Donato
                      <small>Mastering Adobe Photoshop</small>
                    </span>
                  </li>
                  <li>
                    <span>
                      2025<small>(Oct ~ Dec)</small>
                    </span>
                    <span>
                      Fairway Technology
                      <small>Professional UI/UX Design</small>
                    </span>
                  </li>
                  <li>
                    <span>
                      2026<small>(May ~ Present)</small>
                    </span>
                    <span>
                      Futura School
                      <small>User Experience Design</small>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="edu-itm">
                <h3>Job Experience</h3>
                <ul>
                  <li>
                    <span>2024 ~ present</span>
                    <span>
                      MetaTeam Myanmar Company
                      <small>Junior Developer</small>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-skill scroll-mt-30" id="skills">
        <h2 className="cmn-ttl">Skills</h2>
        <div className="inner">
          <Skill />
        </div>
      </section>

      <section className="sec-tools">
        <h2 className="cmn-ttl">Tools I Use</h2>
        <ToolSlider />
      </section>

      <section className="sec-projects scroll-mt-30" id="projects">
        <h2 className="cmn-ttl">Projects</h2>
        <Projects />
      </section>

      <section id="designs" className="sec-designs uiux-designs scroll-mt-30">
        <div className="inner">
          <div className="designs-blk uiux">
            <div className="design-txt">
              <h2>UI/UX Designs I Created</h2>
              <p>
                These UI/UX designs were created using Figma, focusing on user
                flow, layout structure, component consistency, and real-world
                usability. Each project reflects my understanding of UI/UX
                principles and product-oriented design thinking.
              </p>
            </div>
            <ul className="uiuxdesign-list">
              <li>
                <h3>Portfolio</h3>
                <p>Designed a personal portfolio focusing on a clean visual identity and a responsive layout.</p>
                <a href="https://www.figma.com/design/KuLsj5tvQmz6kR79wHPHbW/Portfolio?node-id=0-1&t=k6yyYIBZuwsHfbEW-1" target="_blank">View Detail</a>
              </li>
              <li>
                <h3>BurmaBeat<span>(Group Project)</span></h3>
                <p>I designed a 9-screen layout for Beatjam, find song, and music play features, based on research-driven user personas (Sayar Myo Maung).</p>
                <a href="https://www.figma.com/design/JtdBg0wl3ELJQ7SVSy7ay2/BurmaBeat" target="_blank">View Detail</a>
              </li>
              <li>
                <h3>NearBrew</h3>
                <p>Designed location-based search and checkout flows to simplify the cafe ordering experience for users.</p>
                <a href="https://www.figma.com/design/OsvFuUIA79n3efNDLdfDe0/NearBrew?node-id=1-2&p=f" target="_blank">View Detail</a>
              </li>
              <li>
                <h3>EMS(redesign)</h3>
                <p>Transformed a developed EMS into a user-friendly platform by redesigning core layouts based on requirements.</p>
                <a href="https://www.figma.com/design/AfWeMxljNPWH8oAs2p3uJW/EMS?node-id=1-2&p=f" target="_blank">View Detail</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="designs" className="sec-designs scroll-mt-30">
        <div className="inner">
          <div className="designs-blk">
            <div className="design-txt">
              <h2>Designs I Created</h2>
              <p>
                These are design projects I created during the MAP course by
                Donato. Throughout the course, I practiced and improved my
                skills in Photoshop, color theory, layout structure, visual
                balance, typography, and creative presentation. Each design
                reflects what I learned—from choosing the right colors and
                arranging elements properly to creating clean, attractive
                visuals.
              </p>
            </div>
            <ul className="design-list">
              <li>
                <Image
                  src="/img/design01.webp"
                  alt="Heineken"
                  width={300}
                  height={300}
                />
              </li>
              <li>
                <Image
                  src="/img/design02.webp"
                  alt="Food Panda"
                  width={300}
                  height={300}
                />
              </li>
              <li>
                <Image
                  src="/img/design03.webp"
                  alt="Ryo"
                  width={300}
                  height={300}
                />
              </li>
              <li>
                <Image
                  src="/img/design04.webp"
                  alt="KFC"
                  width={300}
                  height={300}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="sec-contact scroll-mt-30">
        <h2>Contact Me</h2>

        <Contact />
      </section>
    </div>
  );
}

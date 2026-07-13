import Contact from "@/components/contact";
import ProjectsSection from "@/components/project_tabs";
import SkillsSlider from "@/components/skills_slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="sec-mv">
        <div className="inner">
          <div className="mv-txt">
            <h1>
              I'm Hsu Thinzar
              <span>UIUX Designer & Developer</span>
            </h1>
            <p>
              Passionate about building responsive design and creating intuitive
              user experiences.
            </p>
            <div className="btn-blk">
              <div className="btn-sns">
                <a
                  href="https://www.linkedin.com/in/hsu-thinzar-72a9b023b/"
                  target="_blank"
                >
                  <span>Connect On LinkedIn</span>
                </a>
              </div>
              <div className="btn-cv">
                <a href="/HsuThinzar_CV.pdf" target="_blank">
                  <span>View My CV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mv-img">
            <Image
              src="/img/hsu.webp"
              alt="Hsu Thinzar"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="sec-about scroll-mt-30" id="about">
        <div className="inner">
          <h2 className="cmn-ttl">
            <span>About Me</span>
          </h2>
          <div className="about-blk">
            <p>
              I am a Junior Developer with two years of professional experience
              at MetaTeam Myanmar Company (June 2024 – June 2026). I specialize
              in building, modifying, and maintaining high-performance layouts
              using HTML, CSS, jQuery, and WordPress. Throughout my career, I
              successfully managed and maintained over 300 dental websites,
              regularly customized dynamic WordPress projects based on specific
              client requirements, and conducted local environment
              investigations for Shopify plugin systems.
            </p>
            <p>
              Beyond coding, I frequently collaborated on UI/UX assets using
              Figma and Photoshop, and even spearheaded a corporate website
              renewal by auditing plugins, resolving critical layout bugs, and
              creating complete handover documentation. Passionate about
              teamwork, I also took on responsibilities in mentoring interns and
              new team members, reviewing frontend codes, and establishing
              onboarding manuals to ensure seamless project transitions.
            </p>
          </div>
          <div className="edu-blk">
            <div className="edu-list">
              <div className="edu-itm">
                <h3>
                  <span>Education</span>
                </h3>
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
                <h3>
                  <span>Job Experience</span>
                </h3>
                <ul>
                  <li>
                    <span>2024 June ~ 2026 June</span>
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
      <section className="sec-skills scroll-mt-30" id="skills">
        <h2 className="cmn-ttl">
          <span>Skills</span>
        </h2>
        <SkillsSlider />
        <div className="inner"></div>
      </section>
      <section className="sec-projects scroll-mt-30" id="projects">
        <div className="inner">
          <h2 className="cmn-ttl">
            <span>Projects</span>
          </h2>
          <ProjectsSection />
        </div>
      </section>
      <Contact />
    </div>
  );
}

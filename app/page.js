import ToolSlider from "@/components/tool-slider";
import Image from "next/image";
export default function Home() {
  return (
    <div className="inner">
      <section className="sec-mv">
        <div className="mv-txt">
          <h2 className="cmn-ttl">Hello, <Image src="/img/hand-waving.gif" className="hand-wave sp" alt="wave" width={30} height={30} /><br className="sp"></br>I'm Hsu Thinzar</h2>
          <p>
            <span>Junior Frontend Developer & <br className="sp"></br>Graphic Designer</span>
            passionate about building reponsive design & creating eye catching
            poster designs
          </p>
        </div>
        <div className="mv-img">
          <Image src="/img/hsu.jpg" alt="Hsu" width={300} height={300} />
        </div>
      </section>

      <section className="sec-tools">
        <h2 className="cmn-ttl">Tools I Use</h2>
        <ToolSlider />
      </section>

      <section className="sec-about" id="about">
        <h2 className="cmn-ttl">About</h2>
        <p>
          I'm Junior Frontend Developer currently working at MetaTeam Myanmar
          Company since 2024 June.
          <br />
          I specialized in creating reponsive design and had experience in
          designing UI with tools like Figma and WebFlow.
          <br />
          I actively contributed in WordPress CMS design as well.
          <br />
          Beyond design, I’ve also begun exploring CRM platforms like{" "}
          <strong>Salesforce</strong> to expand my understanding of digital
          business tools and workflows.
        </p>
      </section>

      <section className="sec-designs">
        <h2 className="cmn-ttl">Designs I Created</h2>

        <ul className="designs-list">
          <li>
            <Image
              src="/img/design01.webp"
              alt="Design 01"
              width={400}
              height={400}
            />
          </li>
          <li>
            <Image
              src="/img/design02.webp"
              alt="Design 02"
              width={400}
              height={400}
            />
          </li>
          <li>
            <Image
              src="/img/design03.webp"
              alt="Design 03"
              width={400}
              height={400}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

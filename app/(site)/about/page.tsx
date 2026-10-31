import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";
import { PROGRAMMES, SIP_AND_SEW } from "@/lib/programmes";
import Highlight from "@/components/site/Highlight";
import RibbonScroll from "@/components/site/RibbonScroll";
import { RIBBON_CYCLES, RIBBON_TEXT } from "@/lib/ribbon";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description:
    "Asif Fashion Academy (AFA) in Milton Keynes offers practical fashion education for aspiring designers, sewing enthusiasts and anyone ready to develop their garment-making skills.",
};

const STATS = [
  { value: "3", label: "Programmes, from first stitch to masterclass" },
  { value: "2–3", label: "Classes a week on our core programmes" },
  { value: "MK", label: "Based in Milton Keynes, United Kingdom" },
  { value: "£175", label: "Early bird price for Sip & Sew Workshops" },
];

const APPROACH = [
  "Students learn through demonstrations, guided exercises and practical projects, developing their understanding of sewing and garment construction as they progress.",
  "We aim to provide a supportive learning environment where questions are encouraged, techniques are explained clearly and students have opportunities to develop their individual abilities.",
  "Whether you are starting from scratch or refining existing techniques, we want you to leave each learning experience with greater knowledge, confidence and practical skills.",
];

const REASONS = [
  {
    title: "A professional learning environment",
    text: "Learn in a dedicated fashion studio with a focus on practical skills and craftsmanship.",
  },
  {
    title: "A hands-on approach",
    text: "Develop your skills by practising techniques rather than relying on theory alone.",
  },
  {
    title: "Learning for different levels",
    text: "Explore training opportunities suited to your experience, from introductory sewing to more advanced development.",
  },
  {
    title: "A focus on quality",
    text: "Build an appreciation for precision, garment construction and thoughtful finishing.",
  },
  {
    title: "A creative community",
    text: "Learn alongside others who share an interest in sewing, fashion and creative development.",
  },
];

export default async function AboutPage() {
  await logTraffic("about");

  return (
    <>
      <section className="tp-about-fit-hero text-center">
        <div className="container">
          <span className="tp-hero-fit-badge">Milton Keynes, United Kingdom</span>
          <h1 className="tp-about-fit-title">
            A Foundation for Creativity. <Highlight>A Future in Fashion.</Highlight>
          </h1>
          <div className="tp-about-fit-lead">
            <p>
              Asif Fashion Academy was established by fashion designer <strong>Yétúndé Asif</strong> to create a space where
              students can learn the practical skills and techniques behind garment making.
            </p>
            <p>
              With a focus on hands-on training, craftsmanship and creative development, AFA provides an environment where
              students can learn at their level, strengthen their abilities and explore their potential in fashion.
            </p>
            <p>
              We believe that learning to sew is more than mastering a machine. It is about understanding fabric, developing
              precision, learning construction techniques and gaining the confidence to transform an idea into a finished
              garment.
            </p>
            <p>
              Our aim is to make fashion education engaging, practical and accessible while maintaining a professional
              standard of teaching.
            </p>
            <p className="tp-about-fit-story-close">At AFA, every stitch is an opportunity to learn, improve and create.</p>
          </div>
        </div>
      </section>

      <section className="tp-about-fit-banner">
        {/* Runs behind the photo, so only its ends show at either side */}
        <svg className="tp-about-fit-ribbon" viewBox="0 0 1440 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path id="tp-about-fit-curve" d="M-80 400C200 420 300 300 520 290C760 280 880 360 1100 300C1260 256 1340 170 1520 150" fill="none" stroke="currentColor" strokeWidth="44"></path>
          <text dy="7">
            <textPath className="tp-about-fit-ribbon-text" href="#tp-about-fit-curve">{RIBBON_TEXT}</textPath>
          </text>
        </svg>
        <RibbonScroll selector=".tp-about-fit-ribbon-text" cycles={RIBBON_CYCLES} />
        <div className="tp-about-fit-banner-img">
          <img src="/assets/img/IMG_0126.JPG" alt="A Sip & Sew session at Asif Fashion Academy" />
        </div>
        <svg className="tp-about-fit-scallop" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0 90V52a70 52 0 0 1 140 0a55 38 0 0 1 110 0a75 58 0 0 1 150 0a60 42 0 0 1 120 0a70 52 0 0 1 140 0a50 34 0 0 1 100 0a75 58 0 0 1 150 0a60 42 0 0 1 120 0a70 52 0 0 1 140 0a55 38 0 0 1 110 0a80 62 0 0 1 160 0V90Z"
              fill="currentColor"
            ></path>
          </svg>
      </section>

      <section className="tp-about-fit-stats">
        <div className="container tp-about-fit-container">
          <div className="tp-about-fit-stats-grid">
            {STATS.map((stat, index) => (
              <div key={stat.label} className={`tp-about-fit-stat tp-about-fit-stat-${index + 1}`}>
                <p className="tp-about-fit-stat-value">{stat.value}</p>
                <p className="tp-about-fit-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tp-about-fit-teach">
        <div className="container tp-about-fit-container">
          <div className="tp-about-fit-teach-intro text-center">
            <span className="tp-hero-fit-badge">Our Approach</span>
            <h2 className="tp-about-fit-heading">
              Practical Learning. <Highlight>Professional Craftsmanship.</Highlight>
            </h2>
            <p className="tp-about-fit-lead">
              Our training is built around the belief that the best way to develop a skill is to practise it.
            </p>
          </div>
          <div className="tp-about-fit-steps">
            {APPROACH.map((text, index) => (
              <article key={text} className="tp-about-fit-step">
                <span className={`tp-about-fit-step-num tp-about-fit-stat-${index + 1}`}>0{index + 1}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tp-about-fit-split">
        <div className="container tp-about-fit-container">
          <div className="tp-about-fit-split-grid">
            <div className="tp-about-fit-split-img">
              <img src="/assets/img/IMG_0134.JPG" alt="Students sewing together at the academy" />
            </div>
            <div>
              <span className="tp-hero-fit-badge">Your journey starts here</span>
              <h2 className="tp-about-fit-heading">
                Learn at the pace that <Highlight>suits you</Highlight>
              </h2>
              <p className="tp-about-fit-text">
                Whether fashion is your passion, your next career move or the foundation of a future business, there&apos;s a
                programme to take you from your very first stitch to more advanced garment construction.
              </p>
              <ul className="tp-about-fit-chips">
                {[...PROGRAMMES, SIP_AND_SEW].map((programme) => (
                  <li key={programme.id}>{programme.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-about-fit-cta">
        <div className="tp-about-fit-cta-photo d-none d-lg-block">
          <img src="/assets/img/IMG_0129.JPG" alt="An Asif Fashion Academy instructor" />
        </div>
        <div className="tp-about-fit-note d-none d-lg-block" aria-hidden="true">
          Learn the skill.
          <br />
          Develop the craft.
          <br />
          Create your future.
        </div>
        <div className="container text-center">
          <span className="tp-hero-fit-badge">Asif Fashion Academy</span>
          <h2 className="tp-about-fit-title tp-about-fit-cta-title">
            Your Creativity Has <Highlight>Somewhere to Grow.</Highlight>
          </h2>
          <div className="tp-about-fit-lead">
            <p>
              Every accomplished maker starts somewhere. Whether you are learning your first stitch or developing the skills to
              take your fashion ambitions further, Asif Fashion Academy invites you to take that next step.
            </p>
            <p>Explore our courses, discover what is possible and begin building your skills with purpose.</p>
          </div>
          <div className="tp-hero-fit-btns d-flex flex-wrap justify-content-center">
            <a href="/contact" className="tp-hero-fit-btn tp-hero-fit-btn-primary">Enquire About Courses</a>
            <a href="/pricing" className="tp-hero-fit-btn tp-hero-fit-btn-outline">View pricing</a>
          </div>
          <p className="tp-about-fit-cta-tagline d-lg-none">Learn the skill. Develop the craft. Create your future.</p>
        </div>
      </section>

      <section className="tp-about-fit-why">
        <div className="container tp-about-fit-container">
          <h2 className="tp-about-fit-heading">
            Why Choose <Highlight>Asif Fashion Academy?</Highlight>
          </h2>
          <div className="tp-about-fit-why-grid">
            {REASONS.map((reason, index) => (
              <article key={reason.title} className="tp-about-fit-why-card">
                <span className={`tp-about-fit-step-num tp-about-fit-stat-${(index % 4) + 1}`}>0{index + 1}</span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

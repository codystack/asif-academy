import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN } from "@/lib/config";
import { CONTACT, JsonLd, OG_IMAGE, pageMetadata, SITE_ORIGIN } from "@/lib/seo";
import { SOCIAL_LINKS } from "@/components/site/socialLinks";
import CoursePicker from "@/components/site/CoursePicker";
import Highlight from "@/components/site/Highlight";
import HomeWelcome from "@/components/site/HomeWelcome";
import JourneySteps from "@/components/site/JourneySteps";
import RibbonScroll from "@/components/site/RibbonScroll";
import VideoCard from "@/components/site/VideoCard";
import WhoCanLearn from "@/components/site/WhoCanLearn";
import WhyChooseHome from "@/components/site/WhyChooseHome";
import { RIBBON_CYCLES, RIBBON_TEXT } from "@/lib/ribbon";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = pageMetadata({
  path: "/",
});

// Tells search engines who the academy is, where it is and how to reach it.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: SITE_NAME,
  alternateName: "AFA",
  slogan: SITE_SLOGAN,
  description: SITE_DESCRIPTION,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/assets/img/afa-logo-dark.png`,
  image: `${SITE_ORIGIN}${OG_IMAGE.url}`,
  email: CONTACT.email,
  telephone: CONTACT.telephone,
  founder: { "@type": "Person", name: "Yétúndé Asif", jobTitle: "Fashion designer" },
  address: { "@type": "PostalAddress", addressLocality: CONTACT.locality, addressCountry: CONTACT.country },
  areaServed: { "@type": "City", name: CONTACT.locality },
  sameAs: SOCIAL_LINKS.map((link) => link.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  publisher: { "@id": `${SITE_ORIGIN}/#organization` },
};

export default async function HomePage() {
  await logTraffic("home");

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      {/* tp-hero-area-start */}
      <section className="tp-hero-fit p-relative z-1">
        <div className="container">
          <div className="tp-hero-fit-content text-center">
            <span className="tp-hero-fit-badge wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">Learn. Create. Master Your Craft.</span>
            <h1 className="tp-hero-fit-title wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
              The Art of Fashion.
              <br />
              {" "}The
              {" "}
              <span className="tp-hero-fit-highlight">
                Skill of Creation.
                {" "}
                <svg className="tp-hero-fit-spark" width="40" height="36" viewBox="0 0 40 36" fill="none" aria-hidden="true">
                  <path d="M6 4L10 16M22 2L14 18M36 18L18 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
                {" "}
                <svg className="tp-hero-fit-scribble" viewBox="0 0 520 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 14C120 8 300 6 430 12M50 22C200 16 380 20 512 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            <div className="tp-hero-fit-btns d-flex flex-wrap justify-content-center wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <a href="/pricing" className="tp-hero-fit-btn tp-hero-fit-btn-primary">Find classes</a>
              {" "}
              <a href="/about" className="tp-hero-fit-btn tp-hero-fit-btn-outline">Meet your instructor</a>
            </div>
          </div>
        </div>
        <div className="tp-hero-fit-gallery p-relative wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".6s">
          <svg className="tp-hero-fit-ribbon tp-hero-fit-ribbon-desktop" viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path id="tp-hero-fit-curve" d="M-60 330C120 330 240 400 380 330C460 290 500 215 560 200C720 165 760 340 930 330C1130 318 1240 120 1500 140" fill="none" stroke="currentColor" strokeWidth="46" strokeLinecap="butt"></path>
            <text dy="7">
              <textPath className="tp-hero-fit-ribbon-text" href="#tp-hero-fit-curve">{RIBBON_TEXT}</textPath>
            </text>
          </svg>
          {" "}
          <svg className="tp-hero-fit-ribbon tp-hero-fit-ribbon-mobile" viewBox="0 0 440 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path id="tp-hero-fit-curve-mobile" d="M-40 400C30 380 70 337 130 320C200 300 260 360 330 330C400 300 440 230 470 110" fill="none" stroke="currentColor" strokeWidth="40" strokeLinecap="butt"></path>
            <text dy="6">
              <textPath className="tp-hero-fit-ribbon-text" href="#tp-hero-fit-curve-mobile">{RIBBON_TEXT}</textPath>
            </text>
          </svg>
          <RibbonScroll cycles={RIBBON_CYCLES} />
          <div className="tp-hero-fit-card tp-hero-fit-card-left">
            <img src="/assets/img/IMG_0131.JPG" alt="Student working on a garment" />
          </div>
          <span className="tp-hero-fit-blob tp-hero-fit-blob-smile d-none d-md-flex" aria-hidden="true">
            <svg width="44" height="24" viewBox="0 0 56 30" fill="none">
              <circle cx="16" cy="6" r="5" fill="currentColor"></circle>
              <circle cx="40" cy="6" r="5" fill="currentColor"></circle>
              <path d="M8 18C20 30 36 30 48 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round"></path>
            </svg>
          </span>
          <div className="tp-hero-fit-card tp-hero-fit-card-main">
            <img src="/assets/img/IMG_0125.JPG" alt="Live sewing class with Asif Academy" />
          </div>
          <span className="tp-hero-fit-blob tp-hero-fit-blob-clover d-none d-md-block" aria-hidden="true"></span>
          <div className="tp-hero-fit-card tp-hero-fit-card-right">
            <img src="/assets/img/IMG_0130.JPG" alt="Students learning together" />
          </div>
        </div>
      </section>
      {/* tp-hero-area-end */}
      <HomeWelcome />
      <CoursePicker />
      <WhoCanLearn />
      <JourneySteps />
      <section className="tp-videos-fit">
        <div className="container tp-about-fit-container">
          <div className="tp-videos-fit-intro text-center">
            <h2 className="tp-about-fit-heading">
              See AFA <Highlight>in action</Highlight>
            </h2>
            <p className="tp-about-fit-lead">Step inside the studio and see what a session at Asif Fashion Academy looks like.</p>
          </div>
          <div className="tp-videos-fit-grid">
            <VideoCard src="/assets/video/afa-studio-1.mp4" poster="/assets/video/afa-studio-1.jpg" title="Sip & Sew for Beginners" />
            <VideoCard src="/assets/video/afa-studio-2.mp4" poster="/assets/video/afa-studio-2.jpg" title="Inside the studio" />
          </div>
        </div>
      </section>
      <WhyChooseHome />
    </>
  );
}

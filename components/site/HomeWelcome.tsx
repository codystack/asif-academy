import Highlight from "./Highlight";

// Home page introduction straight after the hero: photo on one side, the academy's welcome on the other.
export default function HomeWelcome() {
  return (
    <section className="tp-welcome-fit">
      <div className="container tp-about-fit-container">
        <div className="tp-welcome-fit-grid">
          <div className="tp-welcome-fit-img">
            <img src="/assets/img/IMG_0135.JPG" alt="Students enjoying a class at Asif Fashion Academy" />
          </div>
          <div>
            <h2 className="tp-about-fit-heading">
              Discover your potential. <Highlight>Create with purpose.</Highlight>
            </h2>
            <div className="tp-welcome-fit-text">
              <p>Welcome to Asif Fashion Academy (AFA), where creativity meets craftsmanship.</p>
              <p>
                Based in Milton Keynes, United Kingdom, AFA offers practical fashion education for aspiring designers, sewing
                enthusiasts and individuals ready to develop their garment-making skills.
              </p>
              <p>
                From your very first stitch to more advanced garment construction, our programmes are designed to help you build
                technical ability, develop your creative vision and approach your work with confidence.
              </p>
              <p>
                Whether fashion is your passion, your next career move or the foundation of a future business, your journey
                starts here.
              </p>
            </div>
            <div className="tp-welcome-fit-btns">
              <a href="/courses" className="tp-hero-fit-btn tp-hero-fit-btn-primary">
                Explore Our Courses
              </a>
              <a href="/contact" className="tp-hero-fit-btn tp-hero-fit-btn-outline">
                Enquire About Enrolment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

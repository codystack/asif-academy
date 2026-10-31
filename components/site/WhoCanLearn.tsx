import Highlight from "./Highlight";

const LEARNERS = [
  "Complete beginners taking their first steps into sewing.",
  "Sewing enthusiasts who want to create their own garments.",
  "Developing sewists who want to improve their techniques.",
  "Aspiring fashion designers building practical skills.",
  "Entrepreneurs exploring opportunities in the fashion industry.",
  "Experienced learners looking to refine specific techniques.",
];

// Home page: who the training is for, as a dark card overlapping a tilted photo.
export default function WhoCanLearn() {
  return (
    <section className="tp-who-fit">
      <div className="container tp-about-fit-container">
        <div className="tp-who-fit-intro text-center">
          <h2 className="tp-about-fit-heading">
            Who Can Learn at <Highlight>AFA?</Highlight>
          </h2>
          <p className="tp-about-fit-lead">
            Fashion skills can be developed at different stages of life and experience. Our training opportunities are
            intended for:
          </p>
          <a href="/contact" className="tp-hero-fit-btn tp-hero-fit-btn-outline">
            Not sure? Ask us
          </a>
        </div>
        <div className="tp-who-fit-stage">
          <div className="tp-who-fit-card">
            <ul>
              {LEARNERS.map((learner, index) => (
                <li key={learner}>
                  <span className="tp-who-fit-num">0{index + 1}</span>
                  <span className="tp-who-fit-text">{learner}</span>
                </li>
              ))}
            </ul>
            <p className="tp-who-fit-note">
              Course suitability depends on the programme and its entry requirements. We encourage prospective students to
              enquire if they are unsure which course is right for them.
            </p>
          </div>
          <div className="tp-who-fit-img">
            <img src="/assets/img/IMG_0133.JPG" alt="A student being guided at the sewing machine" />
          </div>
        </div>
      </div>
    </section>
  );
}

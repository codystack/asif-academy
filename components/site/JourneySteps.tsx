import Highlight from "./Highlight";

const STEPS = [
  {
    title: "Choose your course",
    text: "Explore the available programmes and select the training that best matches your experience and goals.",
  },
  {
    title: "Enrol",
    text: "Submit your enquiry, review the course details and complete the enrolment process.",
  },
  {
    title: "Learn through practice",
    text: "Develop your understanding through demonstrations, guided exercises and hands-on projects.",
  },
  {
    title: "Build your skills",
    text: "Practise your techniques, learn from feedback and develop your confidence as you progress.",
  },
  {
    title: "Keep creating",
    text: "Apply what you have learned to your personal projects and future ambitions in fashion.",
  },
];

// Home page: the student journey as five tilted step cards beside a heading and photo.
export default function JourneySteps() {
  return (
    <section className="tp-journey-fit">
      <div className="container tp-about-fit-container">
        <div className="tp-journey-fit-grid">
          <div className="tp-journey-fit-side">
            <h2 className="tp-about-fit-heading">
              Your Journey <Highlight>with AFA</Highlight>
            </h2>
            <p className="tp-journey-fit-lead">Five steps from choosing a course to creating on your own.</p>
            <div className="tp-journey-fit-img">
              <img src="/assets/img/IMG_0127.JPG" alt="A student working on a project at Asif Fashion Academy" />
            </div>
          </div>
          <ol className="tp-journey-fit-steps">
            {STEPS.map((step, index) => (
              <li key={step.title} className="tp-journey-fit-step">
                <span className={`tp-about-fit-step-num tp-about-fit-stat-${(index % 4) + 1}`}>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

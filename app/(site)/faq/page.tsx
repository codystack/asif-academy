import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `FAQ — ${SITE_NAME}`,
  description: "Answers to common questions about live sewing and fashion design classes at Asif Academy.",
};

export default async function FaqPage() {
  await logTraffic("faq");

  return (
    <>
      {/* tp-breadcrumb-area-start */}
      <div className="tp-breadcrumb-area tp-breadcrumb-bg z-1 p-relative">
        <div className="tp-breadcrumb-thumb">
          <img src="/assets/img/breadcrumb/02.jpg" alt="" />
        </div>
        <div className="container container-1324">
          <div className="tp-breadcrumb text-center p-relative z-index-2">
            <h2 className="tp-breadcrumb-title fw-700 wow fadeInUp mb-10" data-wow-duration=".9s" data-wow-delay=".3s">Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
      {/* tp-breadcrumb-area-end */}
      {/* tp-faq-area-start */}
      <div className="tp-faq-area pt-135 pb-110">
        <div className="container container-1324">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-faq-title-wrap mb-30">
                <span className="tp-section-subtitle d-inline-block mb-10 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <span className="mr-5">
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.625 7.76196V10.1183C14.625 10.9741 14.1019 11.7379 13.2919 12.0954C12.3075 12.5287 10.8169 13 9 13C7.18313 13 5.6925 12.5287 4.7025 12.0954C3.89812 11.7379 3.375 10.9741 3.375 10.1183V7.76196L7.37437 9.52242C7.88625 9.74993 8.4375 9.86368 9 9.86368C9.5625 9.86368 10.1137 9.74993 10.6256 9.52242L14.625 7.76196Z" fill="currentColor"></path>
                      <path d="M16.8751 6.77063V10.2915C16.8751 10.5895 16.6219 10.8332 16.3126 10.8332C16.0032 10.8332 15.7501 10.5895 15.7501 10.2915V7.26898L16.8751 6.77063Z" fill="currentColor"></path>
                      <path d="M7.84013 8.53863C8.20856 8.70059 8.604 8.78184 9 8.78184C9.396 8.78184 9.79088 8.70113 10.1599 8.53863L17.3436 5.37631C17.7486 5.19809 18 4.82054 18 4.39099C18 3.96144 17.7486 3.58335 17.3436 3.40513L10.1599 0.24335C9.42244 -0.0811165 8.57812 -0.0811165 7.84069 0.24335L0.656438 3.40459C0.251438 3.58335 0 3.9609 0 4.39045C0 4.82 0.251438 5.19755 0.656438 5.37631L7.84013 8.53863Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  {" "}
                  Our FAQ
                </span>
                <h2 className="tp-section-title mb-50 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
                  Got questions
                  <br />
                  about our live
                  <br />
                  sewing classes?
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-faq mb-30">
                <div className="accordion" id="accordionExample">
                  <div className="tp-faq-item active wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <h2 className="accordion-header">
                      <button className="tp-faq-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is Asif Academy?</button>
                    </h2>
                    <div id="collapseOne" className="tp-faq-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="tp-faq-body">
                        <p>
                          We&apos;re a live, instructor-led online school for fashion design
                          <br />
                          and sewing, taught in small cohorts over video.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-faq-item wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <h2 className="accordion-header">
                      <button className="tp-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Is online learning available?</button>
                    </h2>
                    <div id="collapseTwo" className="tp-faq-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="tp-faq-body">
                        <p>
                          Yes, every class runs live over video so you can ask questions
                          <br />
                          and get feedback in real time, wherever you are.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-faq-item wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <h2 className="accordion-header">
                      <button className="tp-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can I access classes anytime?</button>
                    </h2>
                    <div id="collapseThree" className="tp-faq-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="tp-faq-body">
                        <p>
                          Live sessions run on a set weekly schedule, and session notes
                          <br />
                          stay available to you for the length of the course.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-faq-item wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <h2 className="accordion-header">
                      <button className="tp-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Do you provide study materials?</button>
                    </h2>
                    <div id="collapseFour" className="tp-faq-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="tp-faq-body">
                        <p>
                          Yes, every class includes a downloadable pattern library and
                          <br />
                          step-by-step written guides for each project.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-faq-item wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <h2 className="accordion-header">
                      <button className="tp-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Do you offer student support?</button>
                    </h2>
                    <div id="collapseFive" className="tp-faq-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="tp-faq-body">
                        <p>
                          Yes, your instructor reviews your project photos between
                          <br />
                          sessions and answers questions over email.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-faq-item wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <h2 className="accordion-header">
                      <button className="tp-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">What do I need to get started?</button>
                    </h2>
                    <div id="collapseSix" className="tp-faq-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="tp-faq-body">
                        <p>
                          A sewing machine, basic supplies, and a stable internet
                          <br />
                          connection for your live video sessions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-faq-area-end */}
      {/* tp-brands-area-start */}
      <div className="tp-brand-area fix">
        <div className="swiper tp-brand-slider">
          <div className="swiper-wrapper slide-transtion">
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo.png" alt="Creative partner brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-2.png" alt="Creative partner brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-3.png" alt="Creative partner brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-4.png" alt="Creative partner brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-5.png" alt="Creative partner brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-6.png" alt="Creative partner brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-7.png" alt="Creative partner brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-4.png" alt="Creative partner brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-brands-area-end */}
    </>
  );
}

import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description: "Meet Asif Academy: a live, instructor-led online school for fashion design and sewing.",
};

export default async function AboutPage() {
  await logTraffic("about");

  return (
    <>
      {/* tp-breadcrumb-area-start */}
      <div className="tp-breadcrumb-area tp-breadcrumb-bg z-1 p-relative">
        <div className="tp-breadcrumb-thumb">
          <img src="/assets/img/breadcrumb/01.jpg" alt="" />
        </div>
        <div className="container container-1324">
          <div className="tp-breadcrumb text-center p-relative z-index-2">
            <h2 className="tp-breadcrumb-title fw-700 wow fadeInUp mb-10" data-wow-duration=".9s" data-wow-delay=".3s">About Us</h2>
          </div>
        </div>
      </div>
      {/* tp-breadcrumb-area-end */}
      {/* tp-about-area-start */}
      <div className="tp-about-area p-relative pt-140 pb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="tp-about-3-content mb-30">
                <span className="tp-section-subtitle tp-section-3-subtitle text-red d-inline-block mb-5 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">Ready To Learn!</span>
                <h2 className="tp-section-title mb-20 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
                  Accelerate your
                  <br />
                  {" "}growth with guidance
                </h2>
                <p className="tp-section-dec mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  Our approach equips you with the practical skills, strategic insights
                  <br />
                  {" "}and confidence needed to accelerate your career growth.
                </p>
                <p className="tp-section-dec mb-40 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".6s">
                  Learn from experienced professionals, apply proven techniques, and
                  <br />
                  {" "}achieve measurable success at every step of your journey.
                </p>
                <ul className="tp-about-feature-list mb-50 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3886 20.4H20.4H20.3886ZM20.3886 20.4C19.6414 21.141 18.2872 20.9564 17.3375 20.9564C16.1718 20.9564 15.6104 21.1844 14.7785 22.0164C14.0701 22.7249 13.1204 24 12 24C10.8796 24 9.92988 22.7249 9.22149 22.0164C8.38954 21.1844 7.82819 20.9564 6.66247 20.9564C5.71282 20.9564 4.35862 21.141 3.61139 20.4C2.85817 19.6531 3.04354 18.2933 3.04354 17.3375C3.04354 16.1297 2.77939 15.5743 1.91926 14.7142C0.639768 13.4347 2.4e-05 12.7949 0 12C1.2e-05 11.205 0.639744 10.5653 1.91922 9.2858C2.68704 8.51798 3.04354 7.75714 3.04354 6.66247C3.04354 5.71278 2.85899 4.35857 3.6 3.61133C4.34692 2.85814 5.70672 3.04351 6.6625 3.04351C7.75712 3.04351 8.51798 2.68704 9.28578 1.91924C10.5653 0.639744 11.205 0 12 0C12.795 0 13.4347 0.639744 14.7142 1.91924C15.4818 2.68688 16.2426 3.04351 17.3375 3.04351C18.2872 3.04351 19.6415 2.85896 20.3887 3.6C21.1418 4.34692 20.9564 5.70671 20.9564 6.66247C20.9564 7.8703 21.2207 8.42564 22.0807 9.2858C23.3603 10.5653 24 11.205 24 12C24 12.7949 23.3603 13.4347 22.0807 14.7142C21.2206 15.5743 20.9564 16.1297 20.9564 17.3375C20.9564 18.2933 21.1418 19.6531 20.3886 20.4Z" fill="#F4F2EE"></path>
                      <path d="M8.39648 13.0715L10.5565 15L15.5965 9" stroke="#1F242E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {" "}
                    Personal mentorship
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3886 20.4H20.4H20.3886ZM20.3886 20.4C19.6414 21.141 18.2872 20.9564 17.3375 20.9564C16.1718 20.9564 15.6104 21.1844 14.7785 22.0164C14.0701 22.7249 13.1204 24 12 24C10.8796 24 9.92988 22.7249 9.22149 22.0164C8.38954 21.1844 7.82819 20.9564 6.66247 20.9564C5.71282 20.9564 4.35862 21.141 3.61139 20.4C2.85817 19.6531 3.04354 18.2933 3.04354 17.3375C3.04354 16.1297 2.77939 15.5743 1.91926 14.7142C0.639768 13.4347 2.4e-05 12.7949 0 12C1.2e-05 11.205 0.639744 10.5653 1.91922 9.2858C2.68704 8.51798 3.04354 7.75714 3.04354 6.66247C3.04354 5.71278 2.85899 4.35857 3.6 3.61133C4.34692 2.85814 5.70672 3.04351 6.6625 3.04351C7.75712 3.04351 8.51798 2.68704 9.28578 1.91924C10.5653 0.639744 11.205 0 12 0C12.795 0 13.4347 0.639744 14.7142 1.91924C15.4818 2.68688 16.2426 3.04351 17.3375 3.04351C18.2872 3.04351 19.6415 2.85896 20.3887 3.6C21.1418 4.34692 20.9564 5.70671 20.9564 6.66247C20.9564 7.8703 21.2207 8.42564 22.0807 9.2858C23.3603 10.5653 24 11.205 24 12C24 12.7949 23.3603 13.4347 22.0807 14.7142C21.2206 15.5743 20.9564 16.1297 20.9564 17.3375C20.9564 18.2933 21.1418 19.6531 20.3886 20.4Z" fill="#F4F2EE"></path>
                      <path d="M8.39648 13.0715L10.5565 15L15.5965 9" stroke="#1F242E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {" "}
                    Professional coaching
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3886 20.4H20.4H20.3886ZM20.3886 20.4C19.6414 21.141 18.2872 20.9564 17.3375 20.9564C16.1718 20.9564 15.6104 21.1844 14.7785 22.0164C14.0701 22.7249 13.1204 24 12 24C10.8796 24 9.92988 22.7249 9.22149 22.0164C8.38954 21.1844 7.82819 20.9564 6.66247 20.9564C5.71282 20.9564 4.35862 21.141 3.61139 20.4C2.85817 19.6531 3.04354 18.2933 3.04354 17.3375C3.04354 16.1297 2.77939 15.5743 1.91926 14.7142C0.639768 13.4347 2.4e-05 12.7949 0 12C1.2e-05 11.205 0.639744 10.5653 1.91922 9.2858C2.68704 8.51798 3.04354 7.75714 3.04354 6.66247C3.04354 5.71278 2.85899 4.35857 3.6 3.61133C4.34692 2.85814 5.70672 3.04351 6.6625 3.04351C7.75712 3.04351 8.51798 2.68704 9.28578 1.91924C10.5653 0.639744 11.205 0 12 0C12.795 0 13.4347 0.639744 14.7142 1.91924C15.4818 2.68688 16.2426 3.04351 17.3375 3.04351C18.2872 3.04351 19.6415 2.85896 20.3887 3.6C21.1418 4.34692 20.9564 5.70671 20.9564 6.66247C20.9564 7.8703 21.2207 8.42564 22.0807 9.2858C23.3603 10.5653 24 11.205 24 12C24 12.7949 23.3603 13.4347 22.0807 14.7142C21.2206 15.5743 20.9564 16.1297 20.9564 17.3375C20.9564 18.2933 21.1418 19.6531 20.3886 20.4Z" fill="#F4F2EE"></path>
                      <path d="M8.39648 13.0715L10.5565 15L15.5965 9" stroke="#1F242E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {" "}
                    Project assistance
                  </li>
                </ul>
                <div className="tp-about-btn-wrap tp-about-3-btn-wrap d-inline-flex align-items-center flex-wrap wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".8s">
                  <div className="tp-about-contact d-flex align-items-center mb-20 mr-90">
                    <span className="tp-about-contact-icon mr-10 d-inline-flex justify-content-center align-items-center">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.12475 9.3792L6.05852 6.44541C6.65698 5.84696 6.86406 4.96268 6.62202 4.15168C6.43275 3.51752 6.21951 2.75515 6.07777 2.10324C5.94667 1.5003 5.4176 1 4.80057 1H3.12475C1.8907 1 0.877283 2.00426 1.01265 3.23088C2.04169 12.5551 9.44527 19.9587 18.7694 20.9878C19.996 21.1232 21.0002 20.1097 21.0002 18.8756V17.1999C21.0002 16.5829 20.4979 16.0766 19.8908 15.9662C19.2211 15.8444 18.5126 15.6449 17.9198 15.4559C17.0682 15.1843 16.1215 15.3752 15.4895 16.0072L12.6211 18.8756" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M17.1117 9.89107L19.8895 9.88884M12.1118 4.89102V2.11108M17.6114 4.38913L15.6462 6.35441" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                    <div className="tp-about-contact-content">
                      <span className="fw-500 d-block">Need Help!</span>
                      {" "}
                      <a className="fw-600 tp-ff-heading" href="tel:+12345678910">+1 (234) 567-8910</a>
                    </div>
                  </div>
                  <a href="/contact" className="tp-btn tp-btn-xl tp-btn-grey mb-20">
                    Contact Us
                    {" "}
                    <span className="ml-8">
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.71527 1L13 5.28471L8.71527 9.56941" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1 5.28473H12.88" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tp-about-3-thumb text-end ml-60 p-relative mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".6s">
                <div className="tp-about-3-thumb-1">
                  <img src="/assets/img/about/about-3/thumb-2.jpg" alt="" />
                </div>
                <img className="tp-about-3-thumb-2" src="/assets/img/about/about-3/thumb.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-about-area-end */}
      {/* tp-misson-area-start */}
      <div className="bg-grey-4">
        <div className="tp-misson-area pt-140 pb-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="tp-misson-thumb mr-25 mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <img className="w-100" src="/assets/img/misson/bg.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tp-misson-content ml-50 mr-100 mb-30">
                  <span className="tp-section-subtitle d-inline-block mb-10 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
                    <span className="mr-5">
                      <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.625 7.76196V10.1183C14.625 10.9741 14.1019 11.7379 13.2919 12.0954C12.3075 12.5287 10.8169 13 9 13C7.18313 13 5.6925 12.5287 4.7025 12.0954C3.89812 11.7379 3.375 10.9741 3.375 10.1183V7.76196L7.37437 9.52242C7.88625 9.74993 8.4375 9.86368 9 9.86368C9.5625 9.86368 10.1137 9.74993 10.6256 9.52242L14.625 7.76196Z" fill="currentColor"></path>
                        <path d="M16.8751 6.77063V10.2915C16.8751 10.5895 16.6219 10.8332 16.3126 10.8332C16.0032 10.8332 15.7501 10.5895 15.7501 10.2915V7.26898L16.8751 6.77063Z" fill="currentColor"></path>
                        <path d="M7.84013 8.53863C8.20856 8.70059 8.604 8.78184 9 8.78184C9.396 8.78184 9.79088 8.70113 10.1599 8.53863L17.3436 5.37631C17.7486 5.19809 18 4.82054 18 4.39099C18 3.96144 17.7486 3.58335 17.3436 3.40513L10.1599 0.24335C9.42244 -0.0811165 8.57812 -0.0811165 7.84069 0.24335L0.656438 3.40459C0.251438 3.58335 0 3.9609 0 4.39045C0 4.82 0.251438 5.19755 0.656438 5.37631L7.84013 8.53863Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    {" "}
                    Our Mission
                  </span>
                  <h2 className="tp-section-title mb-20 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".5s">
                    Learn by doing,
                    <br />
                    {" "}not just watching
                  </h2>
                  <p className="tp-section-dec fw-500 mb-50 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".6s">
                    Our mission is to make live, expert sewing instruction accessible from anywhere
                    — small classes, real feedback, and a curriculum that takes you from
                    your first stitch to garments you&apos;re proud to wear.
                  </p>
                  <div className="row mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".7s">
                    <div className="col-md-6">
                      <div className="tp-misson-help">
                        <span className="tp-misson-help-icon d-inline-block mb-15">
                          <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.3579 9.10269L23.1522 0.106282C22.989 0.0361574 22.8133 0 22.6358 0C22.4582 0 22.2825 0.0361574 22.1193 0.106282L0.808748 9.0703C0.568858 9.17643 0.364781 9.35009 0.221239 9.57024C0.077697 9.79039 0.000849867 10.0476 7.00845e-06 10.3107C-0.00083585 10.5738 0.0743617 10.8315 0.21649 11.0525C0.358618 11.2736 0.561578 11.4486 0.800784 11.5563C2.06038 12.0978 9.43295 15.2021 10.4674 15.6536L22.1193 20.5851C22.4514 20.718 22.8222 20.7151 23.1522 20.577C26.8956 18.9918 36.5582 14.8929 40.1538 13.362C40.1451 14.3644 40.1601 22.817 40.1538 24.0427C38.5511 24.4484 37.9004 27.1902 38.7983 28.6745L37.6121 34.0189C37.5744 34.1793 37.5877 34.3474 37.6499 34.4998C37.7121 34.6522 37.8202 34.7814 37.959 34.8692C38.0969 34.9598 38.2594 35.0053 38.4241 34.9995C38.5888 34.9937 38.7477 34.9369 38.8789 34.8368C39.4526 34.4116 40.1429 34.174 40.8559 34.1566C41.6145 34.1453 42.3554 34.3875 42.9619 34.8449C43.0985 34.9412 43.2612 34.9932 43.4281 34.9938C43.595 34.9944 43.7581 34.9436 43.8953 34.8482C44.0326 34.7529 44.1373 34.6176 44.1955 34.4606C44.2537 34.3036 44.2625 34.1324 44.2207 33.9703L42.7118 28.6502C43.4883 27.3143 43.066 24.9149 41.7676 24.2453C41.7749 23.0089 41.7625 13.6548 41.7677 12.6818L44.3579 11.5805C44.5963 11.4737 44.7988 11.2998 44.9409 11.08C45.083 10.8601 45.1586 10.6037 45.1586 10.3416C45.1586 10.0796 45.083 9.82311 44.9409 9.60325C44.7988 9.3834 44.5963 9.20954 44.3579 9.10269Z" fill="currentColor"></path>
                            <path d="M21.4908 22.075C20.519 21.6635 9.45328 16.97 8.85455 16.7225V24.6095C8.86004 25.0329 8.96792 25.4487 9.16892 25.8211C9.36991 26.1935 9.65801 26.5113 10.0084 26.7473C13.556 29.1675 17.7193 30.519 22.0072 30.6422C26.7059 30.7358 31.3207 29.3852 35.2326 26.7715C35.5917 26.5344 35.8876 26.2127 36.0944 25.8344C36.3012 25.4561 36.4125 25.0328 36.4187 24.6014V16.7144C35.859 16.9581 24.732 21.672 23.7825 22.075C23.0485 22.3785 22.2248 22.3785 21.4908 22.075Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <h2 className="tp-misson-help-title mb-10">Live Guidance</h2>
                        <p className="tp-misson-help-dec fw-500">We focus on delivering high-quality education through innovative.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tp-misson-help">
                        <span className="tp-misson-help-icon d-inline-block mb-15">
                          <svg width="49" height="35" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.7925 30.4902L4.32614 34.6195C4.30196 34.8335 4.542 34.9773 4.71932 34.8552L8.19997 32.4574L4.7925 30.4902ZM47.0191 12.7193H43.3382C42.7541 12.7193 42.2757 13.1978 42.2757 13.7819V32.1661C42.2757 32.7502 42.7541 33.2287 43.3382 33.2287H47.0191C47.6033 33.2287 48.0817 32.7502 48.0817 32.1661V13.782C48.0817 13.1979 47.6031 12.7193 47.0191 12.7193ZM9.53961 33.6688L9.6187 33.8057C10.1139 34.6635 11.2355 34.965 12.0939 34.4694C12.9525 33.9737 13.2545 32.8513 12.7585 31.9924C12.4752 31.5016 12.1909 31.0092 11.9087 30.5204L10.5561 32.8632C10.4908 32.9768 10.4017 33.0739 10.2939 33.1483L9.53961 33.6688ZM12.9223 28.7648L15.0147 25.1407L16.6828 28.0299C17.1783 28.8883 16.8758 30.0083 16.0182 30.5035C16.082 30.6127 14.3414 31.2225 13.543 29.8398L12.9223 28.7648ZM16.4042 24.0332L17.4672 25.8744C17.9606 26.7291 19.0913 27.0364 19.9459 26.5378C20.7664 26.0638 21.0797 25.0129 20.6604 24.1652C20.6266 24.1213 20.5932 24.0774 20.5605 24.0333L16.4042 24.0332ZM10.5913 16.0481L14.7838 8.78645C14.292 9.00206 13.8336 9.30243 13.4126 9.72345L0.650912 22.4851C-0.216824 23.3528 -0.217076 24.7701 0.650787 25.638C1.5184 26.5056 2.93574 26.5062 3.80373 25.6383L7.23526 22.2069C6.82935 21.5821 6.59295 20.8379 6.59295 20.0407C6.59295 17.8431 8.388 16.0481 10.5855 16.0481H10.5913ZM25.0368 7.78156L20.3209 15.9499C21.7509 15.7064 23.3861 14.9942 24.2683 13.8133C24.5594 13.4235 25.1113 13.3433 25.5012 13.6342C25.891 13.9252 25.9712 14.4771 25.6803 14.867C24.0489 17.051 21.3295 17.7551 18.7419 17.8113H10.5857C9.3614 17.8113 8.35626 18.8163 8.35626 20.0407C8.35626 21.2654 9.36203 22.2701 10.5857 22.2701H21.0156C21.3006 22.2704 21.5801 22.4108 21.7491 22.6662C24.3991 26.6575 31.8411 29.408 36.4106 29.9836L40.5126 30.5004V15.4482C38.7537 15.2771 37.6108 15.2257 36.2003 13.9693C32.8891 11.02 29.2984 9.50519 25.0368 7.78156ZM18.237 16.0481H12.6223L18.7404 5.45114L22.9514 7.88231L18.237 16.0481ZM23.8293 6.36207L25.3722 3.68972C26.0643 2.49101 25.7658 1.04596 24.5081 0.31978C23.3549 -0.344183 21.8528 0.060467 21.1877 1.21258L19.6183 3.93077L23.8293 6.36207ZM8.15803 23.7773L8.4958 23.4395C9.10448 23.8157 9.82058 24.0333 10.5855 24.0333H13.6269L9.50182 31.1781L5.28933 28.746L8.15803 23.7773Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <h2 className="tp-misson-help-title mb-10">Practical Projects</h2>
                        <p className="tp-misson-help-dec fw-500">We focus on delivering high-quality education through innovative.</p>
                      </div>
                    </div>
                  </div>
                  <a href="/contact" className="tp-btn tp-btn-xl wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".8s">
                    Read More
                    {" "}
                    <span className="ml-8">
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.71527 1L13 5.28471L8.71527 9.56941" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1 5.28473H12.88" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-vision-area pb-110">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="tp-misson-content mr-100 mb-30">
                  <span className="tp-section-subtitle d-inline-block mb-10 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    <span className="mr-5">
                      <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.625 7.76196V10.1183C14.625 10.9741 14.1019 11.7379 13.2919 12.0954C12.3075 12.5287 10.8169 13 9 13C7.18313 13 5.6925 12.5287 4.7025 12.0954C3.89812 11.7379 3.375 10.9741 3.375 10.1183V7.76196L7.37437 9.52242C7.88625 9.74993 8.4375 9.86368 9 9.86368C9.5625 9.86368 10.1137 9.74993 10.6256 9.52242L14.625 7.76196Z" fill="currentColor"></path>
                        <path d="M16.8751 6.77063V10.2915C16.8751 10.5895 16.6219 10.8332 16.3126 10.8332C16.0032 10.8332 15.7501 10.5895 15.7501 10.2915V7.26898L16.8751 6.77063Z" fill="currentColor"></path>
                        <path d="M7.84013 8.53863C8.20856 8.70059 8.604 8.78184 9 8.78184C9.396 8.78184 9.79088 8.70113 10.1599 8.53863L17.3436 5.37631C17.7486 5.19809 18 4.82054 18 4.39099C18 3.96144 17.7486 3.58335 17.3436 3.40513L10.1599 0.24335C9.42244 -0.0811165 8.57812 -0.0811165 7.84069 0.24335L0.656438 3.40459C0.251438 3.58335 0 3.9609 0 4.39045C0 4.82 0.251438 5.19755 0.656438 5.37631L7.84013 8.53863Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    {" "}
                    Our Vision
                  </span>
                  <h2 className="tp-section-title mb-20 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">Excellence &amp; innovation</h2>
                  <p className="tp-section-dec fw-500 mb-50 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".5s">
                    We want every student to leave with more than technique — a finished
                    garment they&apos;re proud of, and the confidence to keep creating on their own.
                    That means small live cohorts, honest feedback, and instructors who care
                    about your progress.
                  </p>
                  <div className="tp-misson-list wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".6s">
                    <ul>
                      <li>Small cohorts so every student gets real feedback.</li>
                      <li>Projects you actually finish and can wear.</li>
                      <li>Live instruction, not pre-recorded playback.</li>
                      <li>A curriculum that builds from first stitch to couture finish.</li>
                      <li>A supportive community of fellow makers.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tp-misson-thumb mr-25 mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  <img className="w-100" src="/assets/img/misson/bg-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-misson-area-end */}
      {/* tp-team-area-start */}
      <div className="tp-team-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section-title-wrap mb-40 text-center">
                <span className="tp-section-subtitle d-inline-block mb-10 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
                  <span className="mr-5">
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.625 7.76196V10.1183C14.625 10.9741 14.1019 11.7379 13.2919 12.0954C12.3075 12.5287 10.8169 13 9 13C7.18313 13 5.6925 12.5287 4.7025 12.0954C3.89812 11.7379 3.375 10.9741 3.375 10.1183V7.76196L7.37437 9.52242C7.88625 9.74993 8.4375 9.86368 9 9.86368C9.5625 9.86368 10.1137 9.74993 10.6256 9.52242L14.625 7.76196Z" fill="currentColor"></path>
                      <path d="M16.8751 6.77063V10.2915C16.8751 10.5895 16.6219 10.8332 16.3126 10.8332C16.0032 10.8332 15.7501 10.5895 15.7501 10.2915V7.26898L16.8751 6.77063Z" fill="currentColor"></path>
                      <path d="M7.84013 8.53863C8.20856 8.70059 8.604 8.78184 9 8.78184C9.396 8.78184 9.79088 8.70113 10.1599 8.53863L17.3436 5.37631C17.7486 5.19809 18 4.82054 18 4.39099C18 3.96144 17.7486 3.58335 17.3436 3.40513L10.1599 0.24335C9.42244 -0.0811165 8.57812 -0.0811165 7.84069 0.24335L0.656438 3.40459C0.251438 3.58335 0 3.9609 0 4.39045C0 4.82 0.251438 5.19755 0.656438 5.37631L7.84013 8.53863Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  {" "}
                  Guiding Every Stitcher
                </span>
                <h2 className="tp-section-title wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  Empowering makers
                  <br />
                  {" "}through craft
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-wrap mb-30 wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".4s">
                <div className="tp-team-thumb p-relative mb-25">
                  <img className="w-100" src="/assets/img/team/thumb.jpg" alt={"Asif Karim, Founder & Lead Instructor at Asif Academy"} />
                  <div className="tp-team-social p-absolute">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.62839 7.77713C0.911363 7.77713 0.761719 7.91782 0.761719 8.59194V9.81416C0.761719 10.4883 0.911363 10.629 1.62839 10.629H3.36172V15.5179C3.36172 16.192 3.51136 16.3327 4.22839 16.3327H5.96172C6.67874 16.3327 6.82839 16.192 6.82839 15.5179V10.629H8.77466C9.31846 10.629 9.45859 10.5296 9.60798 10.038L9.97941 8.81579C10.2353 7.97368 10.0776 7.77713 9.14609 7.77713H6.82839V5.74009C6.82839 5.29008 7.21641 4.92527 7.69505 4.92527H10.1617C10.8787 4.92527 11.0284 4.78458 11.0284 4.11046V2.48083C11.0284 1.80671 10.8787 1.66602 10.1617 1.66602H7.69505C5.30182 1.66602 3.36172 3.49004 3.36172 5.74009V7.77713H1.62839Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.28884 0.714844H0.666992L6.14691 7.9153L1.01754 13.9556H3.38746L7.26697 9.38713L10.7118 13.9136H15.3337L9.69453 6.50391L9.70451 6.51669L14.5599 0.798959H12.19L8.58427 5.04503L5.28884 0.714844ZM3.21817 1.97588H4.65702L12.7825 12.6525H11.3436L3.21817 1.97588Z" fill="currentColor"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.99991" cy="9.99991" r="8.38077" stroke="currentColor" strokeWidth="1.5"></circle>
                        <path d="M18.3799 11.0604C17.6032 10.9148 16.8043 10.8389 15.9891 10.8389C11.5034 10.8389 7.51372 13.1373 4.9707 16.7054" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M15.8665 4.13281C13.2437 7.2064 9.30255 9.16128 4.8957 9.16128C3.76828 9.16128 2.67133 9.03332 1.61914 8.79143" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M12.1938 18.3815C12.4039 17.3641 12.5142 16.3104 12.5142 15.2309C12.5142 9.93756 9.86111 5.26259 5.80957 2.45801" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66602 8.99935C1.66602 5.54238 1.66602 3.8139 2.73996 2.73996C3.8139 1.66602 5.54238 1.66602 8.99935 1.66602C12.4563 1.66602 14.1848 1.66602 15.2587 2.73996C16.3327 3.8139 16.3327 5.54238 16.3327 8.99935C16.3327 12.4563 16.3327 14.1848 15.2587 15.2587C14.1848 16.3327 12.4563 16.3327 8.99935 16.3327C5.54238 16.3327 3.8139 16.3327 2.73996 15.2587C1.66602 14.1848 1.66602 12.4563 1.66602 8.99935Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M12.4747 9.00103C12.4747 10.9195 10.9195 12.4747 9.00103 12.4747C7.08256 12.4747 5.52734 10.9195 5.52734 9.00103C5.52734 7.08256 7.08256 5.52734 9.00103 5.52734C10.9195 5.52734 12.4747 7.08256 12.4747 9.00103Z" stroke="currentColor" strokeWidth="1.5"></path>
                        <path d="M13.251 4.75391L13.242 4.75391" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="tp-team-content text-center">
                  <h2 className="tp-team-title fw-600 mb-5">Asif Karim</h2>
                  <span className="tp-team-subtitle">Founder &amp; Lead Instructor</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-wrap mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">
                <div className="tp-team-thumb p-relative mb-25">
                  <img className="w-100" src="/assets/img/team/thumb-2.jpg" alt={"Sofia Martins, Pattern & Fit Specialist at Asif Academy"} />
                  <div className="tp-team-social p-absolute">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.62839 7.77713C0.911363 7.77713 0.761719 7.91782 0.761719 8.59194V9.81416C0.761719 10.4883 0.911363 10.629 1.62839 10.629H3.36172V15.5179C3.36172 16.192 3.51136 16.3327 4.22839 16.3327H5.96172C6.67874 16.3327 6.82839 16.192 6.82839 15.5179V10.629H8.77466C9.31846 10.629 9.45859 10.5296 9.60798 10.038L9.97941 8.81579C10.2353 7.97368 10.0776 7.77713 9.14609 7.77713H6.82839V5.74009C6.82839 5.29008 7.21641 4.92527 7.69505 4.92527H10.1617C10.8787 4.92527 11.0284 4.78458 11.0284 4.11046V2.48083C11.0284 1.80671 10.8787 1.66602 10.1617 1.66602H7.69505C5.30182 1.66602 3.36172 3.49004 3.36172 5.74009V7.77713H1.62839Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.28884 0.714844H0.666992L6.14691 7.9153L1.01754 13.9556H3.38746L7.26697 9.38713L10.7118 13.9136H15.3337L9.69453 6.50391L9.70451 6.51669L14.5599 0.798959H12.19L8.58427 5.04503L5.28884 0.714844ZM3.21817 1.97588H4.65702L12.7825 12.6525H11.3436L3.21817 1.97588Z" fill="currentColor"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.99991" cy="9.99991" r="8.38077" stroke="currentColor" strokeWidth="1.5"></circle>
                        <path d="M18.3799 11.0604C17.6032 10.9148 16.8043 10.8389 15.9891 10.8389C11.5034 10.8389 7.51372 13.1373 4.9707 16.7054" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M15.8665 4.13281C13.2437 7.2064 9.30255 9.16128 4.8957 9.16128C3.76828 9.16128 2.67133 9.03332 1.61914 8.79143" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M12.1938 18.3815C12.4039 17.3641 12.5142 16.3104 12.5142 15.2309C12.5142 9.93756 9.86111 5.26259 5.80957 2.45801" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66602 8.99935C1.66602 5.54238 1.66602 3.8139 2.73996 2.73996C3.8139 1.66602 5.54238 1.66602 8.99935 1.66602C12.4563 1.66602 14.1848 1.66602 15.2587 2.73996C16.3327 3.8139 16.3327 5.54238 16.3327 8.99935C16.3327 12.4563 16.3327 14.1848 15.2587 15.2587C14.1848 16.3327 12.4563 16.3327 8.99935 16.3327C5.54238 16.3327 3.8139 16.3327 2.73996 15.2587C1.66602 14.1848 1.66602 12.4563 1.66602 8.99935Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M12.4747 9.00103C12.4747 10.9195 10.9195 12.4747 9.00103 12.4747C7.08256 12.4747 5.52734 10.9195 5.52734 9.00103C5.52734 7.08256 7.08256 5.52734 9.00103 5.52734C10.9195 5.52734 12.4747 7.08256 12.4747 9.00103Z" stroke="currentColor" strokeWidth="1.5"></path>
                        <path d="M13.251 4.75391L13.242 4.75391" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="tp-team-content text-center">
                  <h2 className="tp-team-title fw-600 mb-5">Sofia Martins</h2>
                  <span className="tp-team-subtitle">Pattern &amp; Fit Specialist</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-wrap mb-30 wow fadeInRight" data-wow-duration=".9s" data-wow-delay=".4s">
                <div className="tp-team-thumb p-relative mb-25">
                  <img className="w-100" src="/assets/img/team/thumb-3.jpg" alt={"Marvin McKinney, Couture & Finishing Coach at Asif Academy"} />
                  <div className="tp-team-social p-absolute">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.62839 7.77713C0.911363 7.77713 0.761719 7.91782 0.761719 8.59194V9.81416C0.761719 10.4883 0.911363 10.629 1.62839 10.629H3.36172V15.5179C3.36172 16.192 3.51136 16.3327 4.22839 16.3327H5.96172C6.67874 16.3327 6.82839 16.192 6.82839 15.5179V10.629H8.77466C9.31846 10.629 9.45859 10.5296 9.60798 10.038L9.97941 8.81579C10.2353 7.97368 10.0776 7.77713 9.14609 7.77713H6.82839V5.74009C6.82839 5.29008 7.21641 4.92527 7.69505 4.92527H10.1617C10.8787 4.92527 11.0284 4.78458 11.0284 4.11046V2.48083C11.0284 1.80671 10.8787 1.66602 10.1617 1.66602H7.69505C5.30182 1.66602 3.36172 3.49004 3.36172 5.74009V7.77713H1.62839Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.28884 0.714844H0.666992L6.14691 7.9153L1.01754 13.9556H3.38746L7.26697 9.38713L10.7118 13.9136H15.3337L9.69453 6.50391L9.70451 6.51669L14.5599 0.798959H12.19L8.58427 5.04503L5.28884 0.714844ZM3.21817 1.97588H4.65702L12.7825 12.6525H11.3436L3.21817 1.97588Z" fill="currentColor"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.99991" cy="9.99991" r="8.38077" stroke="currentColor" strokeWidth="1.5"></circle>
                        <path d="M18.3799 11.0604C17.6032 10.9148 16.8043 10.8389 15.9891 10.8389C11.5034 10.8389 7.51372 13.1373 4.9707 16.7054" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M15.8665 4.13281C13.2437 7.2064 9.30255 9.16128 4.8957 9.16128C3.76828 9.16128 2.67133 9.03332 1.61914 8.79143" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M12.1938 18.3815C12.4039 17.3641 12.5142 16.3104 12.5142 15.2309C12.5142 9.93756 9.86111 5.26259 5.80957 2.45801" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                    {" "}
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66602 8.99935C1.66602 5.54238 1.66602 3.8139 2.73996 2.73996C3.8139 1.66602 5.54238 1.66602 8.99935 1.66602C12.4563 1.66602 14.1848 1.66602 15.2587 2.73996C16.3327 3.8139 16.3327 5.54238 16.3327 8.99935C16.3327 12.4563 16.3327 14.1848 15.2587 15.2587C14.1848 16.3327 12.4563 16.3327 8.99935 16.3327C5.54238 16.3327 3.8139 16.3327 2.73996 15.2587C1.66602 14.1848 1.66602 12.4563 1.66602 8.99935Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M12.4747 9.00103C12.4747 10.9195 10.9195 12.4747 9.00103 12.4747C7.08256 12.4747 5.52734 10.9195 5.52734 9.00103C5.52734 7.08256 7.08256 5.52734 9.00103 5.52734C10.9195 5.52734 12.4747 7.08256 12.4747 9.00103Z" stroke="currentColor" strokeWidth="1.5"></path>
                        <path d="M13.251 4.75391L13.242 4.75391" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="tp-team-content text-center">
                  <h2 className="tp-team-title fw-600 mb-5">Marvin McKinney</h2>
                  <span className="tp-team-subtitle">Couture &amp; Finishing Coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-team-area-end */}
      {/* tp-counter-area-start */}
      <div className="tp-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <span className="tp-counter-icon d-inline-block mb-20 p-relative">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.95 0.75H17.55C10.6636 0.75 7.22044 0.75 4.77971 2.45901C3.87671 3.09127 3.09129 3.87668 2.45902 4.77967C0.75 7.22038 0.75 10.6635 0.75 17.5498C0.75 24.4361 0.75 27.8792 2.45902 30.32C3.09129 31.223 3.87671 32.0084 4.77971 32.6407C7.22044 34.3497 10.6636 34.3497 17.55 34.3497H25.95C32.8363 34.3497 36.2795 34.3497 38.7203 32.6407C39.6233 32.0084 40.4087 31.223 41.041 30.32C42.75 27.8792 42.75 24.4361 42.75 17.5498C42.75 10.6635 42.75 7.22038 41.041 4.77967C40.4087 3.87668 39.6233 3.09127 38.7203 2.45901C36.2795 0.75 32.8363 0.75 25.95 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M27 42.75L26.3374 41.8703C24.8439 39.8875 24.4735 36.8583 25.4183 34.3501M16.5 42.75L17.1626 41.8703C18.6561 39.8875 19.0265 36.8583 18.0817 34.3501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M11.25 42.7495H32.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M13.3508 25.9493C17.2116 20.499 26.2003 20.2016 30.1508 25.9493M25.9508 13.3494C25.9508 15.669 24.0705 17.5493 21.7508 17.5493C19.4311 17.5493 17.5508 15.669 17.5508 13.3494C17.5508 11.0298 19.4311 9.14941 21.7508 9.14941C24.0705 9.14941 25.9508 11.0298 25.9508 13.3494Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </span>
                <h2 className="tp-counter-title mb-0">
                  <span className="purecounter" data-purecounter-duration="2" data-purecounter-end="850">850</span>
                  +
                </h2>
                <span className="tp-counter-subtitle">Students Trained</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <span className="tp-counter-icon d-inline-block mb-20 p-relative">
                  <svg width="54" height="44" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 19.125C0.75 10.4629 0.75 6.13191 3.44097 3.44097C6.13191 0.749999 10.4629 0.75 19.125 0.75H21.75C30.412 0.75 34.743 0.749999 37.4341 3.44097C40.125 6.13191 40.125 10.4629 40.125 19.125V24.375C40.125 33.037 40.125 37.368 37.4341 40.0591C34.743 42.75 30.412 42.75 21.75 42.75H19.125C10.4629 42.75 6.13191 42.75 3.44097 40.0591C0.75 37.368 0.75 33.037 0.75 24.375V19.125Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M40.125 13.6279L40.4555 13.3552C46.0095 8.77261 48.7864 6.48133 51.0182 7.58766C53.25 8.69399 53.25 12.3618 53.25 19.6975V23.8025C53.25 31.1383 53.25 34.806 51.0182 35.9124C48.7864 37.0186 46.0095 34.7275 40.4555 30.1448L40.125 29.872" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M25.6875 19.125C27.8621 19.125 29.625 17.3621 29.625 15.1875C29.625 13.0129 27.8621 11.25 25.6875 11.25C23.5129 11.25 21.75 13.0129 21.75 15.1875C21.75 17.3621 23.5129 19.125 25.6875 19.125Z" stroke="currentColor" strokeWidth="1.5"></path>
                  </svg>
                </span>
                <h2 className="tp-counter-title mb-0">
                  <span className="purecounter" data-purecounter-duration="2" data-purecounter-end="120">120</span>
                  +
                </h2>
                <span className="tp-counter-subtitle">Live Classes Hosted</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <span className="tp-counter-icon d-inline-block mb-20 p-relative">
                  <svg width="66" height="44" viewBox="0 0 66 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.535 28.7544C37.401 28.7544 40.535 25.6204 40.535 21.7544C40.535 17.8884 37.401 14.7544 33.535 14.7544C29.6689 14.7544 26.5349 17.8884 26.5349 21.7544C26.5349 25.6204 29.6689 28.7544 33.535 28.7544Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M21.1094 7.74561C17.6094 11.2456 15.8594 16.4956 15.8594 21.7456C15.8594 26.9956 17.6094 32.2456 21.1094 35.7456" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.50005 0.75C4.25002 6 0.75 13 0.75 21.75C0.75 30.5 4.25002 37.5 9.50005 42.75" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M45.9734 35.7456C49.4734 32.2456 51.2234 26.9956 51.2234 21.7456C51.2234 16.4956 49.4734 11.2456 45.9734 7.74561" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M56.4734 42.75C61.7234 37.5 65.2234 30.5 65.2234 21.75C65.2234 13 61.7234 6 56.4734 0.75" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <h2 className="tp-counter-title mb-0">
                  <span className="purecounter" data-purecounter-duration="2" data-purecounter-end="12">12</span>
                </h2>
                <span className="tp-counter-subtitle">Weekly Live Sessions</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <span className="tp-counter-icon d-inline-block mb-20 p-relative">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 4.24999C0.75 2.31699 2.31699 0.75 4.24997 0.75H8.91661C10.8496 0.75 12.4166 2.31699 12.4166 4.24999V8.91665C12.4166 10.8496 10.8496 12.4166 8.91661 12.4166H4.24997C2.31699 12.4166 0.75 10.8496 0.75 8.91665V4.24999Z" stroke="#141B34" strokeWidth="1.5"></path>
                    <path d="M0.75 34.5835C0.75 32.6506 2.31699 31.0835 4.24997 31.0835H8.91661C10.8496 31.0835 12.4166 32.6506 12.4166 34.5835V39.2501C12.4166 41.1831 10.8496 42.7501 8.91661 42.7501H4.24997C2.31699 42.7501 0.75 41.1831 0.75 39.2501V34.5835Z" stroke="#141B34" strokeWidth="1.5"></path>
                    <path d="M12.4155 36.9172H42.7486M31.082 6.58398H12.4155M31.8368 11.6624L11.5957 31.9036" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M31.083 4.24999C31.083 2.31699 32.6501 0.75 34.583 0.75H39.2496C41.1825 0.75 42.7496 2.31699 42.7496 4.24999V8.91665C42.7496 10.8496 41.1825 12.4166 39.2496 12.4166H34.583C32.6501 12.4166 31.083 10.8496 31.083 8.91665V4.24999Z" stroke="#141B34" strokeWidth="1.5"></path>
                    <path d="M35.75 42.7501L38.9893 40.5421C41.4965 38.8332 42.7499 37.9787 42.7499 36.9168C42.7499 35.8549 41.4965 35.0005 38.9893 33.2915L35.75 31.0835" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <h2 className="tp-counter-title mb-0">
                  <span className="purecounter" data-purecounter-duration="2" data-purecounter-end="3">3</span>
                </h2>
                <span className="tp-counter-subtitle">Skill Tracks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-counter-area-end */}
      {/* tp-testimonial-area-start */}
      <div className="tp-testimonial-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-department-title-wrap text-center mb-50">
                <span className="tp-section-subtitle d-inline-block mb-10 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <span className="mr-5">
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.625 7.76196V10.1183C14.625 10.9741 14.1019 11.7379 13.2919 12.0954C12.3075 12.5287 10.8169 13 9 13C7.18313 13 5.6925 12.5287 4.7025 12.0954C3.89812 11.7379 3.375 10.9741 3.375 10.1183V7.76196L7.37437 9.52242C7.88625 9.74993 8.4375 9.86368 9 9.86368C9.5625 9.86368 10.1137 9.74993 10.6256 9.52242L14.625 7.76196Z" fill="currentColor"></path>
                      <path d="M16.8751 6.77063V10.2915C16.8751 10.5895 16.6219 10.8332 16.3126 10.8332C16.0032 10.8332 15.7501 10.5895 15.7501 10.2915V7.26898L16.8751 6.77063Z" fill="currentColor"></path>
                      <path d="M7.84013 8.53863C8.20856 8.70059 8.604 8.78184 9 8.78184C9.396 8.78184 9.79088 8.70113 10.1599 8.53863L17.3436 5.37631C17.7486 5.19809 18 4.82054 18 4.39099C18 3.96144 17.7486 3.58335 17.3436 3.40513L10.1599 0.24335C9.42244 -0.0811165 8.57812 -0.0811165 7.84069 0.24335L0.656438 3.40459C0.251438 3.58335 0 3.9609 0 4.39045C0 4.82 0.251438 5.19755 0.656438 5.37631L7.84013 8.53863Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  {" "}
                  Our Testimonial
                </span>
                <h2 className="tp-section-title mb-15 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".4s">Student voices that inspire</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center p-relative wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".6s">
            <div className="col-xxl-9 col-xl-10 col-lg-12">
              <div className="swiper tp-testimonial-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="tp-testimonial-thumb ml-45 mb-30">
                          <img src="/assets/img/testimonial/thumb.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tp-testimonial-content mb-30">
                          <div className="tp-testimonial-ratings mb-20">
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </div>
                          <p className="tp-testimonial-dec tp-ff-heading fw-600 mb-75">
                            I&apos;d never touched a sewing machine before Asif
                            Academy. The live sessions meant I could ask
                            questions in real time, and by week six I&apos;d
                            finished my first wearable garment. Worth
                            every class!
                          </p>
                          <div className="tp-testimonial-name">
                            <span className="tp-ff-heading fw-600">Amara Chen</span>
                            <p className="mb-0">Sewing Foundation graduate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="tp-testimonial-thumb ml-45 mb-30">
                          <img src="/assets/img/testimonial/thumb.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tp-testimonial-content mb-30">
                          <div className="tp-testimonial-ratings mb-20">
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            {" "}
                            <span>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3251 11.1971C14.092 11.4349 13.985 11.7788 14.0381 12.116L14.8381 16.7768C14.9055 17.1718 14.7472 17.5716 14.4331 17.7999C14.1253 18.0367 13.7159 18.0651 13.3802 17.8757L9.39466 15.6874C9.25608 15.6097 9.1022 15.568 8.94472 15.5633H8.70085C8.61626 15.5765 8.53347 15.605 8.45788 15.6485L4.4714 17.8472C4.27433 17.9514 4.05116 17.9884 3.83249 17.9514C3.29976 17.8453 2.9443 17.3111 3.03159 16.7474L3.83249 12.0867C3.88558 11.7466 3.77849 11.4008 3.54543 11.1593L0.29595 7.84369C0.0241851 7.56613 -0.0703026 7.14931 0.0538812 6.77323C0.174465 6.3981 0.482225 6.12433 0.853877 6.06275L5.32629 5.37975C5.66645 5.3428 5.96521 5.12492 6.11819 4.80284L8.08893 0.549437C8.13573 0.454706 8.19602 0.367554 8.26891 0.293665L8.3499 0.227353C8.39219 0.178093 8.44079 0.137359 8.49478 0.104204L8.59287 0.0663114L8.74585 0H9.1247C9.46305 0.0369449 9.76091 0.250089 9.91659 0.568383L11.9134 4.80284C12.0574 5.11261 12.3373 5.32764 12.6603 5.37975L17.1328 6.06275C17.5107 6.11959 17.8266 6.39431 17.9516 6.77323C18.0695 7.1531 17.9678 7.56992 17.6907 7.84369L14.3251 11.1971Z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </div>
                          <p className="tp-testimonial-dec tp-ff-heading fw-600 mb-75">
                            The Pattern Explorer course changed how I
                            think about fit. My instructor caught mistakes
                            on camera that I&apos;d never have noticed on my
                            own, and I now alter my own patterns with
                            confidence.
                          </p>
                          <div className="tp-testimonial-name">
                            <span className="tp-ff-heading fw-600">Priya Nandan</span>
                            <p className="mb-0">Pattern Explorer graduate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="tp-testimonial-navigation tp-bounce p-absolute d-flex justify-content-between">
                <button className="tp-testimonial-prev bounce d-flex justify-content-center align-items-center rounded-circle">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11L1 6L6 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  {" "}
                  <span></span>
                </button>
                {" "}
                <button className="tp-testimonial-next bounce d-flex justify-content-center align-items-center rounded-circle">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  {" "}
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-testimonial-area-end */}
      {/* tp-brands-area-start */}
      <div className="tp-brand-area fix pt-110">
        <div className="swiper tp-brand-slider">
          <div className="swiper-wrapper slide-transtion">
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-2.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-3.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-4.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-5.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-6.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-7.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tp-brand-item">
                <img src="/assets/img/brand/logo-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-brands-area-end */}
      {/* tp-faq-area-start */}
      <div className="tp-faq-area pt-135 pb-110">
        <div className="container">
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
                  Everything you&apos;re
                  <br />
                  wondering about
                  <br />
                  our sewing classes
                </h2>
                <a href="/faq" className="tp-btn tp-btn-xl mr-10 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  Learn More
                  {" "}
                  <span className="ml-8">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.71527 1L13 5.28471L8.71527 9.56941" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 5.28473H12.88" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </a>
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
    </>
  );
}

export default function Breadcrumb({ title }: { title: string }) {
  return (
    <>
      {/* tp-breadcrumb-area-start */}
      <div className="tp-breadcrumb-area tp-breadcrumb-2 tp-breadcrumb-3 p-relative bg-grey-4">
        <img className="tp-breadcrumb-3-shape d-none d-xl-block" src="/assets/img/breadcrumb/shape.png" alt="" />
        <img className="tp-breadcrumb-3-shape-2 d-none d-xl-block" src="/assets/img/breadcrumb/shape-2.png" alt="" />
        <img className="tp-breadcrumb-3-shape-3 d-none d-xl-block" src="/assets/img/breadcrumb/shape-3.png" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-breadcrumb-3-content text-center">
                <h2 className="tp-breadcrumb-title text-black mb-0 fw-700 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-breadcrumb-area-end */}
    </>
  );
}

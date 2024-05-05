import React from "react";

function About() {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4 about-us fw-semibold">Hoşgeldiniz!</h1>
              <p className="lead text-muted mb-0 about-us fw-semibold ms-1">
              Biz sadece ürün satmıyoruz, aynı zamanda kalite de satıyoruz.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="about-us fw-semibold">
                Müşteri memnuniyeti bizim için çok önemli
              </h2>
              <p className="font-italic text-muted mb-4 about-us fw-semibold">
              Her zaman müşteri memnuniyetini ön planda tutarak, sizin için en iyi deneyimi sağlamak bizim önceliğimizdir.
              </p>
              <a
                href="#"
                className="fw-semibold btn btn-light px-5 rounded-pill shadow-sm"
              >
                Daha Fazla
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0 rounded"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 me-5">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="rounded img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6 ms-5">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="about-us fw-semibold">
                Ödeme Yöntemi Güvenliği
              </h2>
              <p className="font-italic text-muted mb-4 about-us fw-semibold">
                
Müşterilerimizin güvenliğini sağlamak için en güncel ödeme yöntemi güvenlik standartlarını kullanıyoruz.
              </p>
              <a
                href="#"
                className="fw-semibold btn btn-light px-5 rounded-pill shadow-sm"
              >
                Daha Fazla
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-5 ">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5 about-us fw-semibold">
              <h2 className="display-4 fw-normal">Çalışma Arkadaşlarımız</h2>
              <p className="font-italic text-muted ms-1">
                
              </p>
            </div>
          </div>

          <div className="row text-center">
            {/* <!-- Team item--> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://media.licdn.com/dms/image/C5603AQHT4w-qQbwouQ/profile-displayphoto-shrink_200_200/0/1642713438967?e=1720656000&v=beta&t=nWul8sZ4Lqy57sQEOpvXTOMwhPzEVTOHjS2OFz34z7E"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Orçun Ünlü</h5>
                <span className="small text-uppercase text-muted">
                  Kurucu-Yazılım Mühendisi
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

          
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

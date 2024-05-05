import React from "react";

const Login = () => {
  return (
    <>
      <div className="float-end ms-xl-2 my-2 my-lg-0">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-secondary buttons fw-semibold"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          <i className="fa fa-sign-in me-1" aria-hidden="true"></i>
          Giriş
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Hoşgeldiniz!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <button className="btn btn-primary w-100 mb-2">
                  <span className="fa fa-google me-2"></span>Google ile giriş yap
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-facebook me-2"></span>Facebook ile giriş yap
                </button>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email 
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      Emailini kimse ile paylaşmayacağız!
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Şifre
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Beni Hatırla!
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100 mt-3"
                  >
                    Giriş
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import resetPasswordImg from "../../assets/imgs/page/reset_password.svg";

export default function ResetPassword() {
  return (
    <main className="main pages profinder-background">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" rel="nofollow">
              <i className="fi-rs-home mr-5"></i>Home
            </a>
            <span></span> Pages <span></span> My Account
          </div>
        </div>
      </div>

      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 m-auto">
              <div className="row">
                <div className="heading_s1">
                  <img
                    className="border-radius-15"
                    src={resetPasswordImg}
                    alt="Reset Password"
                  />
                  <h2 className="mb-15 mt-15">Set new password</h2>
                  <p className="mb-30">
                    Please create a new password that you don’t use on any other site.
                  </p>
                </div>

                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <form method="post">
                        <div className="form-group">
                          <input
                            type="password"
                            required
                            name="password"
                            placeholder="Password *"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            required
                            name="confirm_password"
                            placeholder="Confirm your password *"
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-heading btn-block hover-up"
                            name="reset"
                          >
                            Reset password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 pl-50">
                  <h6 className="mb-15">Password must:</h6>
                  <p>Be between 9 and 64 characters</p>
                  <p>Include at least two of the following:</p>
                  <ol className="list-insider">
                    <li>An uppercase character</li>
                    <li>A lowercase character</li>
                    <li>A number</li>
                    <li>A special character</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

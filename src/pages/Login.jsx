import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Static image import
import loginImage from '../../assets/imgs/page/login-1.png';

export default function Login() {
  return (
    <main className="main pages profinder-background">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              <i className="fi-rs-home mr-5" />
              Home
            </Link>
            <span /> Pages <span /> My Account
          </div>
        </div>
      </div>

      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-12 m-auto">
              <div className="row">
                {/* Image Side */}
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img
                    className="border-radius-15"
                    src={loginImage}
                    alt="login"
                  />
                </div>

                {/* Form Side */}
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        <p className="mb-30">
                          Don't have an account?{" "}
                          <Link to="/register">Create here</Link>
                        </p>
                      </div>

                      <form method="post">
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="email"
                            placeholder="Username or Email *"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            required
                            name="password"
                            placeholder="Your password *"
                          />
                        </div>

                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <input
                              type="text"
                              required
                              name="security"
                              placeholder="Security code *"
                            />
                          </div>
                          <span className="security-code">
                            <b className="text-new">8</b>
                            <b className="text-hot">6</b>
                            <b className="text-sale">7</b>
                            <b className="text-best">5</b>
                          </span>
                        </div>

                        <div className="login_footer form-group mb-50 d-flex justify-content-between">
                          <div className="custome-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember"
                            />
                            <label className="form-check-label" htmlFor="remember">
                              Remember me
                            </label>
                          </div>
                          <Link className="text-muted" to="/forgot">
                            Forgot password?
                          </Link>
                        </div>

                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-heading btn-block hover-up"
                            name="login"
                          >
                            Log in
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div> {/* End Form Side */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

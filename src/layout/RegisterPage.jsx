import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Static image imports
import facebookIcon from '../../assets/imgs/theme/icons/logo-facebook.svg';
import googleIcon from '../../assets/imgs/theme/icons/logo-google.svg';
import appleIcon from '../../assets/imgs/theme/icons/logo-apple.svg';

const RegisterPage = () => {
  return (
    <main className="main pages profinder-background">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              Home <i className="fi-rs-home mr-5" />
            </Link>
            <span> / Pages / My Account</span>
          </div>
        </div>
      </div>

      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Create an Account</h1>
                        <p className="mb-30">
                          Already have an account? <Link to="/login">Login</Link>
                        </p>
                      </div>

                      <form method="post">
                        <div className="form-group">
                          <input type="text" name="username" placeholder="Username" required />
                        </div>
                        <div className="form-group">
                          <input type="text" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                          <input type="password" name="confirm_password" placeholder="Confirm Password" required />
                        </div>

                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <input type="text" name="security_code" placeholder="Security code *" required />
                          </div>
                          <span className="security-code">
                            <b className="text-new">8</b>
                            <b className="text-hot">6</b>
                            <b className="text-sale">7</b>
                            <b className="text-best">5</b>
                          </span>
                        </div>

                        <div className="payment_option mb-50">
                          <div className="custome-radio">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="user_type"
                              id="customerOption"
                              defaultChecked
                              required
                            />
                            <label className="form-check-label" htmlFor="customerOption">
                              I am a customer
                            </label>
                          </div>
                          <div className="custome-radio">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="user_type"
                              id="vendorOption"
                              required
                            />
                            <label className="form-check-label" htmlFor="vendorOption">
                              I am a vendor
                            </label>
                          </div>
                        </div>

                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="terms"
                                id="agreeTerms"
                                required
                              />
                              <label className="form-check-label" htmlFor="agreeTerms">
                                <span>I agree to terms &amp; Policy.</span>
                              </label>
                            </div>
                          </div>
                          <Link to="/privacy-policy">
                            <i className="fi-rs-book-alt mr-5 text-muted" /> Learn more
                          </Link>
                        </div>

                        <div className="form-group mb-30">
                          <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold">
                            Submit &amp; Register
                          </button>
                        </div>

                        <p className="font-xs text-muted">
                          <strong>Note:</strong> Your personal data will be used to support your experience
                          throughout this website, to manage access to your account, and for other purposes
                          described in our privacy policy.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <div className="card-login mt-145">
                    <a href="#" className="social-login facebook-login">
                      <img src={facebookIcon} alt="facebook" />
                      <span>Continue with Facebook</span>
                    </a>
                    <a href="#" className="social-login google-login">
                      <img src={googleIcon} alt="google" />
                      <span>Continue with Google</span>
                    </a>
                    <a href="#" className="social-login apple-login">
                      <img src={appleIcon} alt="apple" />
                      <span>Continue with Apple</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    securityCode: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the API call or form validation here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="main pages profinder-background">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" rel="nofollow">
              <i className="fi-rs-home mr-5" />
              Home
            </a>
            <span> / Pages / My Account</span>
          </div>
        </div>
      </div>

      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 m-auto">
              <div className="login_wrap widget-taber-content background-white">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1 text-center">
                    <img
                      className="border-radius-15"
                      src="../../assets/imgs/page/forgot_password.svg"
                      alt="Forgot Password"
                    />
                    <h2 className="mb-15 mt-15">Forgot your password?</h2>
                    <p className="mb-30">
                      Not to worry, we got you! Let’s get you a new password.
                      Please enter your email address or your Username.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="emailOrUsername"
                        placeholder="Username or Email *"
                        value={formData.emailOrUsername}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="login_footer form-group">
                      <div className="chek-form">
                        <input
                          type="text"
                          name="securityCode"
                          placeholder="Security code *"
                          value={formData.securityCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <span className="security-code">
                        <b className="text-new">8</b>
                        <b className="text-hot">6</b>
                        <b className="text-sale">7</b>
                        <b className="text-best">5</b>
                      </span>
                    </div>

                    <div className="login_footer form-group mb-50">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                          id="exampleCheckbox1"
                          checked={formData.agree}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox1"
                        >
                          <span>I agree to terms &amp; Policy.</span>
                        </label>
                      </div>
                      <a className="text-muted ms-2" href="#">
                        Learn more
                      </a>
                    </div>

                    <div className="form-group">
                    <Link to= "/reset">   <button
                        type="submit"
                        className="btn btn-heading btn-block hover-up"
                        name="login"
                      >
                        Reset password
                      </button></Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;

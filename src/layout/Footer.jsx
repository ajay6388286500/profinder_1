import React from "react";

// Banner
import banner from "../../assets/imgs/banner/banner-13.png";

// Theme images
import logo from "../../assets/imgs/theme/logo.png";
import paymentMethod from "../../assets/imgs/theme/payment-method.png";

// Contact Icons
import iconLocation from "../../assets/imgs/theme/icons/icon-location.svg";
import iconContact from "../../assets/imgs/theme/icons/icon-contact.svg";
import iconEmail from "../../assets/imgs/theme/icons/icon-email-2.svg";
import iconClock from "../../assets/imgs/theme/icons/icon-clock.svg";
import phoneIcon from "../../assets/imgs/theme/icons/phone-call.svg";

// Featured Services
import icon1 from "../../assets/imgs/theme/icons/icon-1.svg";
import icon2 from "../../assets/imgs/theme/icons/icon-2.svg";
import icon3 from "../../assets/imgs/theme/icons/icon-3.svg";
import icon4 from "../../assets/imgs/theme/icons/icon-4.svg";
import icon5 from "../../assets/imgs/theme/icons/icon-5.svg";
import icon6 from "../../assets/imgs/theme/icons/icon-6.svg";

// App Links
import appStore from "../../assets/imgs/theme/app-store.jpg";
import googlePlay from "../../assets/imgs/theme/google-play.jpg";

// Social Icons
import facebookIcon from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import twitterIcon from "../../assets/imgs/theme/icons/icon-twitter-white.svg";
import instagramIcon from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import pinterestIcon from "../../assets/imgs/theme/icons/icon-pinterest-white.svg";
import youtubeIcon from "../../assets/imgs/theme/icons/icon-youtube-white.svg";

const contactInfo = [
  { icon: iconLocation, label: "Address:", value: "5171 W Campbell Ave undefined Kent, Utah 53127 United States" },
  { icon: iconContact, label: "Call Us:", value: "(+91) - 540-025-124553" },
  { icon: iconEmail, label: "Email:", value: "sale@Nest.com" },
  { icon: iconClock, label: "Hours:", value: "10:00 - 18:00, Mon - Sat" },
];

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us", "Support Center", "Careers"],
  },
  {
    title: "Account",
    links: ["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help Ticket", "Shipping Details", "Compare products"],
  },
  {
    title: "Corporate",
    links: ["Become a Vendor", "Affiliate Program", "Farm Business", "Farm Careers", "Our Suppliers", "Accessibility", "Promotions"],
  },
  {
    title: "Popular",
    links: ["Milk & Flavoured Milk", "Butter and Margarine", "Eggs Substitutes", "Marmalades", "Sour Cream and Dips", "Tea & Kombucha", "Cheese"],
  },
];

const featuredServices = [
  { icon: icon1, title: "Best prices & offers", desc: "Orders $50 or more" },
  { icon: icon2, title: "Free delivery", desc: "24/7 amazing services" },
  { icon: icon3, title: "Great daily deal", desc: "When you sign up" },
  { icon: icon4, title: "Wide assortment", desc: "Mega Discounts" },
  { icon: icon5, title: "Easy returns", desc: "Within 30 days" },
  { icon: icon6, title: "Safe delivery", desc: "Within 30 days" },
];

const appLinks = [
  { src: appStore, alt: "App Store" },
  { src: googlePlay, alt: "Google Play" },
];

const socialIcons = [
  { icon: facebookIcon, name: "facebook" },
  { icon: twitterIcon, name: "twitter" },
  { icon: instagramIcon, name: "instagram" },
  { icon: pinterestIcon, name: "pinterest" },
  { icon: youtubeIcon, name: "youtube" },
];

export default function Footer() {
  return (
    <footer className="main profinder-background footer_wrapper">
      {/* Newsletter */}
      <section className="newsletter mb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative newsletter-inner">
                <div className="newsletter-content">
                  <h2 className="mb-20">
                    Stay home & get your daily <br />
                    needs from our shop
                  </h2>
                  <p className="mb-45">
                    Start You're Daily Shopping with{" "}
                    <span className="text-brand">Nest Mart</span>
                  </p>
                  <form className="form-subcriber d-flex">
                    <input type="email" placeholder="Your email address" />
                    <button className="btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <img src={banner} alt="newsletter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured section-padding">
        <div className="container">
          <div className="row">
            {featuredServices.map((service, idx) => (
              <div
                className={`col-lg-1-5 col-md-4 col-12 col-sm-6 my-1 ${
                  idx === 5 ? "d-xl-none" : ""
                }`}
                key={idx}
              >
                <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                  <div className="banner-icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Mid Section */}
      <section className="section-padding footer-mid">
        <div className="container pt-15 pb-20">
          <div className="row">
            {/* About */}
            <div className="col">
              <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                <div className="logo mb-30">
                  <a href="index.html" className="mb-15">
                    <img src={logo} alt="logo" />
                  </a>
                  <p className="font-lg text-heading">
                    Awesome grocery store website template
                  </p>
                </div>
                <ul className="contact-infor">
                  {contactInfo.map((info, idx) => (
                    <li key={idx}>
                      <img src={info.icon} alt="" />
                      <strong>{info.label}</strong>
                      <span>{info.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, idx) => (
              <div className="footer-link-widget col" key={idx}>
                <h4 className="widget-title">{section.title}</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Install App */}
            <div className="footer-link-widget widget-install-app col">
              <h4 className="widget-title">Install App</h4>
              <p className="wow fadeIn animated">From App Store or Google Play</p>
              <div className="download-app">
                {appLinks.map((app, idx) => (
                  <a href="#" className="hover-up mb-sm-2 mb-lg-0" key={idx}>
                    <img src={app.src} alt={app.alt} />
                  </a>
                ))}
              </div>
              <p className="mb-20">Secured Payment Gateways</p>
              <img
                className="wow fadeIn animated"
                src={paymentMethod}
                alt="payment methods"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="container pb-30">
        <div className="row align-items-center">
          <div className="col-12 mb-30">
            <div className="footer-bottom" />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <p className="font-sm mb-0">
              © 2025, <strong className="text-brand">Nest</strong> - HTML Ecommerce
              Template <br />
              All rights reserved
            </p>
          </div>
          <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
            <div className="hotline d-lg-inline-flex mr-30">
              <img src={phoneIcon} alt="hotline" />
              <p>
                1900 - 6666<span>Working 8:00 - 22:00</span>
              </p>
            </div>
            <div className="hotline d-lg-inline-flex">
              <img src={phoneIcon} alt="hotline" />
              <p>
                1900 - 8888<span>24/7 Support Center</span>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
            <div className="mobile-social-icon">
              <h6>Follow Us</h6>
              {socialIcons.map((social, idx) => (
                <a href="#" key={idx}>
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
            <p className="font-sm">Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

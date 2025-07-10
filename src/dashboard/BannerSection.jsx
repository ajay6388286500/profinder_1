import React from "react";
import banner1 from '../../assets/imgs/banner/banner-1.png';
import banner2 from '../../assets/imgs/banner/banner-2.png';
import banner3 from '../../assets/imgs/banner/banner-3.png';
import { Link } from "react-router-dom";

const bannerData = [
  {
    img: banner1,
    title: (
      <>
        Everyday Fresh &amp; <br />
        Clean with Our <br />
        Products
      </>
    ),
    delay: "0s",
  },
  {
    img: banner2,
    title: (
      <>
        Make your Breakfast <br />
        Healthy and Easy
      </>
    ),
    delay: ".2s",
  },
  {
    img: banner3,
    title: (
      <>
        The best Organic <br />
        Products Online
      </>
    ),
    delay: ".4s",
    additionalClasses: "d-md-none d-lg-flex",
  },
];

const BannerSection = () => {
  return (
    <section className="banners mb-25">
      <div className="container">
        <div className="row">
          {bannerData.map((banner, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 ${banner.additionalClasses || ""}`}
            >
              <div
                className="banner-img wow animate__animated animate__fadeInUp"
                data-wow-delay={banner.delay}
              >
                <img src={banner.img} alt="banner" />
                <div className="banner-text">
                  <h4>{banner.title}</h4>
                  <Link to="/dashboards/shop" className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

import React from "react";

const bannerData = [
  {
    img: "assets/imgs/banner/banner-1.png",
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
    img: "assets/imgs/banner/banner-2.png",
    title: (
      <>
        Make your Breakfast <br />
        Healthy and Easy
      </>
    ),
    delay: ".2s",
  },
  {
    img: "assets/imgs/banner/banner-3.png",
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
              className={`col-lg-4 col-md-6 ${
                banner.additionalClasses || ""
              }`}
            >
              <div
                className="banner-img wow animate__animated animate__fadeInUp"
                data-wow-delay={banner.delay}
              >
                <img src={banner.img} alt="banner" />
                <div className="banner-text">
                  <h4>{banner.title}</h4>
                  <a href="shop-grid-right.html" className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right" />
                  </a>
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

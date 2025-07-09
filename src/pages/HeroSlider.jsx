import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/imgs/slider/slider-1.png";
import slider2 from "../../assets/imgs/slider/slider-2.png";

const HeroSlider = () => {
  return (
    <section className="home-slider position-relative mb-30">
      <div className="container">
        <div className="home-slide-cover mt-2">
          <Carousel fade indicators>
            <Carousel.Item>
              <div
                className="single-hero-slider single-animation-wrap d-flex align-items-center"
                style={{
                  backgroundImage: `url(${slider1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                }}
              >
                <div className="slider-content text-white px-5">
                  <h1 className="display-2 mb-4">
                    Don’t miss amazing <br />
                    grocery deals
                  </h1>
                  <p className="mb-4">Sign up for the daily newsletter</p>
                  <form className="form-subcriber d-flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="form-control me-2"
                    />
                    <button className="btn btn-primary" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div
                className="single-hero-slider single-animation-wrap d-flex align-items-center"
                style={{
                  backgroundImage: `url(${slider2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                }}
              >
                <div className="slider-content text-white px-5">
                  <h1 className="display-2 mb-4">
                    Fresh Vegetables <br />
                    Big discount
                  </h1>
                  <p className="mb-4">Save up to 50% off on your first order</p>
                  <form className="form-subcriber d-flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="form-control me-2"
                    />
                    <button className="btn btn-primary" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

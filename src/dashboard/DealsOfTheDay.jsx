import React from "react";
import banner5 from "../../assets/imgs/banner/banner-5.png";
import banner6 from "../../assets/imgs/banner/banner-6.png";
import banner7 from "../../assets/imgs/banner/banner-7.png";
import banner8 from "../../assets/imgs/banner/banner-8.png";
import { Link } from "react-router-dom";

const productData = [
  {
    image: banner5,
    countdown: "2025/12/25 00:00:00",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    brand: "NestFood",
    price: 32.85,
    oldPrice: 33.8,
    delay: "0s",
    visibility: "",
  },
  {
    image: banner6,
    countdown: "2026/04/25 00:00:00",
    title: "Perdue Simply Smart Organics Gluten Free",
    rating: 4.0,
    brand: "Old El Paso",
    price: 24.85,
    oldPrice: 26.8,
    delay: ".1s",
    visibility: "",
  },
  {
    image: banner7,
    countdown: "2027/03/25 00:00:00",
    title: "Signature Wood-Fired Mushroom and Caramelized",
    rating: 3.0,
    brand: "Progresso",
    price: 12.85,
    oldPrice: 13.8,
    delay: ".2s",
    visibility: "d-none d-lg-block",
  },
  {
    image: banner8,
    countdown: "2025/02/25 00:00:00",
    title: "Simply Lemonade with Raspberry Juice",
    rating: 3.0,
    brand: "Yoplait",
    price: 15.85,
    oldPrice: 16.8,
    delay: ".3s",
    visibility: "d-none d-xl-block",
  },
];


const DealsOfTheDay = () => {
  return (
    <section className="section-padding pb-5">
      <div className="container">
        <div
          className="section-title wow animate__animated animate__fadeIn"
          data-wow-delay="0s"
        >
          <h3 className="">Deals Of The Day</h3>
          <a className="show-all" href="shop-grid-right.html">
            All Deals
            <i className="fi-rs-angle-right" />
          </a>
        </div>

        <div className="row">
          {productData.map((product, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-4 col-md-6 ${product.visibility}`}
            >
              <div
                className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                data-wow-delay={product.delay}
              >
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="shop-product-right.html">
                      <img src={product.image} alt={product.title} />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown={product.countdown}
                    />
                  </div>
                  <div className="deals-content">
                    <h2>
                      <a href="shop-product-right.html">{product.title}</a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: `${product.rating * 20}%` }}
                        />
                      </div>
                      <span className="font-small ml-5 text-muted">
                        ({product.rating.toFixed(1)})
                      </span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By{" "}
                        <a href="vendor-details-1.html">{product.brand}</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>£{product.price}</span>
                        <span className="old-price">£{product.oldPrice}</span>
                      </div>
                      <div className="add-cart">
                        <Link className="add" to="/dashboards/cart">
                          <i className="fi-rs-shopping-cart mr-5" />
                          Add{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;

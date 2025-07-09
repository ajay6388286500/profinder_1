import React from "react";

const featuredCategories = [
  {
    title: "Cake & Milk",
    img: "assets/imgs/shop/cat-13.png",
    items: 26,
    delay: ".1s",
    bg: "bg-9",
  },
  {
    title: "Oganic Kiwi",
    img: "assets/imgs/shop/cat-12.png",
    items: 28,
    delay: ".2s",
    bg: "bg-10",
  },
  {
    title: "Peach",
    img: "assets/imgs/shop/cat-11.png",
    items: 14,
    delay: ".3s",
    bg: "bg-11",
  },
  {
    title: "Red Apple",
    img: "assets/imgs/shop/cat-9.png",
    items: 54,
    delay: ".4s",
    bg: "bg-12",
  },
  {
    title: "Snack",
    img: "assets/imgs/shop/cat-3.png",
    items: 56,
    delay: ".5s",
    bg: "bg-13",
  },
  {
    title: "Vegetables",
    img: "assets/imgs/shop/cat-1.png",
    items: 72,
    delay: ".6s",
    bg: "bg-14",
  },
  {
    title: "Strawberry",
    img: "assets/imgs/shop/cat-2.png",
    items: 36,
    delay: ".7s",
    bg: "bg-15",
  },
  {
    title: "Black plum",
    img: "assets/imgs/shop/cat-4.png",
    items: 123,
    delay: ".8s",
    bg: "bg-12",
  },
  {
    title: "Custard apple",
    img: "assets/imgs/shop/cat-5.png",
    items: 34,
    delay: ".9s",
    bg: "bg-10",
  },
  {
    title: "Coffe & Tea",
    img: "assets/imgs/shop/cat-14.png",
    items: 89,
    delay: "1s",
    bg: "bg-12",
  },
  {
    title: "Headphone",
    img: "assets/imgs/shop/cat-15.png",
    items: 87,
    delay: "0s",
    bg: "bg-11",
  },
];

const tabCategories = ["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"];

const FeaturedCategories = () => {
  return (
    <section className="popular-categories section-padding">
      <div className="container wow animate__animated animate__fadeIn">
        <div className="section-title">
          <div className="title">
            <h3>Featured Categories</h3>
            <ul className="list-inline nav nav-tabs links">
              {tabCategories.map((cat, idx) => (
                <li className="list-inline-item nav-item" key={idx}>
                  <a
                    className={`nav-link ${cat === "Pet Foods" ? "active" : ""}`}
                    href="shop-grid-right.html"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
            id="carausel-10-columns-arrows"
          />
        </div>

        <div className="carausel-10-columns-cover position-relative">
          <div className="carausel-10-columns" id="carausel-10-columns">
            {featuredCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`card-2 ${cat.bg} wow animate__animated animate__fadeInUp`}
                data-wow-delay={cat.delay}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <a href="shop-grid-right.html">
                    <img src={cat.img} alt={cat.title} />
                  </a>
                </figure>
                <h6>
                  <a href="shop-grid-right.html">{cat.title}</a>
                </h6>
                <span>{cat.items} items</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

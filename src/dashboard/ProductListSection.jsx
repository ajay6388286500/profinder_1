import React from "react";

const productData = [
  {
    title: "Top Selling",
    delay: "0s",
    items: [
      {
        image: "../../assets/imgs/shop/thumbnail-1.jpg",
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-2.jpg",
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-3.jpg",
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
    ],
  },
  {
    title: "Trending Products",
    delay: ".1s",
    items: [
      {
        image: "../../assets/imgs/shop/thumbnail-4.jpg",
        name: "Organic Cage-Free Grade A Large Brown Eggs",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-5.jpg",
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-6.jpg",
        name: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
    ],
  },
  {
    title: "Recently added",
    delay: ".2s",
    className: "d-none d-lg-block",
    items: [
      {
        image: "../../assets/imgs/shop/thumbnail-7.jpg",
        name: "Pepperidge Farm Farmhouse Hearty White Bread",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-8.jpg",
        name: "Organic Frozen Triple Berry Blend",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-9.jpg",
        name: "Oroweat Country Buttermilk Bread",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
    ],
  },
  {
    title: "Top Rated",
    delay: ".3s",
    className: "d-none d-xl-block",
    items: [
      {
        image: "../../assets/imgs/shop/thumbnail-10.jpg",
        name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-11.jpg",
        name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
      {
        image: "../../assets/imgs/shop/thumbnail-12.jpg",
        name: "All Natural Italian-Style Chicken Meatballs",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "90%",
      },
    ],
  },
];

const ProductListSection = () => {
  return (
    <section className="section-padding ">
      <div className="container">
        <div className="row">
          {productData.map((column, idx) => (
            <div
              className={`col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp ${column.className || ""}`}
              data-wow-delay={column.delay}
              key={idx}
            >
              <h4 className="section-title style-1 mb-30 animated">
                {column.title}
              </h4>
              <div className="product-list-small animated">
                {column.items.map((item, i) => (
                  <article
                    className="row align-items-center hover-up border rounded bg-white p-3 mb-3 mx-0"
                    style={{
                      minHeight: "140px",
                      height: "140px",
                      overflow: "hidden",
                    }}
                    key={i}
                  >
                    <figure className="col-md-4 mb-0 h-100 d-flex align-items-center">
                      <a href="shop-product-right.html" className="w-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid"
                          style={{ maxHeight: "100px", objectFit: "contain" }}
                        />
                      </a>
                    </figure>
                    <div className="col-md-8 d-flex flex-column justify-content-between h-100">
                      <div>
                        <h6 className="mb-1" style={{ fontSize: "13px" }}>
                          <a href="shop-product-right.html" className="text-dark">
                            {item.name}
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: item.rating }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                      </div>
                      <div className="product-price">
                        <span>{item.price}</span>
                        <span className="old-price ml-1">{item.oldPrice}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListSection;

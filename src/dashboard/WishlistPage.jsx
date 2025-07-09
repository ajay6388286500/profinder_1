import React from "react";
import { Link } from "react-router-dom";

// Static image imports
import product2 from "../../assets/imgs/shop/product-2-1.jpg";
import product1 from "../../assets/imgs/shop/product-1-1.jpg";
import product3 from "../../assets/imgs/shop/product-3-1.jpg";
import product4 from "../../assets/imgs/shop/product-4-1.jpg";
import product5 from "../../assets/imgs/shop/product-5-1.jpg";

const wishlistItems = [
  {
    id: 1,
    name: "Field Roast Chao Cheese Creamy Original",
    image: product1,
    price: 2.51,
    stock: "In Stock",
    action: "Add to cart",
    outOfStock: false,
  },
  {
    id: 2,
    name: "Blue Diamond Almonds Lightly Salted",
    image: product2,
    price: 3.2,
    stock: "In Stock",
    action: "Add to cart",
    outOfStock: false,
  },
  {
    id: 3,
    name: "Fresh Organic Mustard Leaves Bell Pepper",
    image: product3,
    price: 2.43,
    stock: "In Stock",
    action: "Add to cart",
    outOfStock: false,
  },
  {
    id: 4,
    name: "Angie’s Boomchickapop Sweet & Salty",
    image: product4,
    price: 3.21,
    stock: "Out Stock",
    action: "Contact Us",
    outOfStock: true,
  },
  {
    id: 5,
    name: "Foster Farms Takeout Crispy Classic",
    image: product5,
    price: 3.17,
    stock: "In Stock",
    action: "Add to cart",
    outOfStock: false,
  },
];

const WishlistPage = () => {
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              Home<i className="fi-rs-home mr-5 ml-1"></i>
            </Link>
            <span></span> Shop <span></span> Wishlist
          </div>
        </div>
      </div>

      <div className="container mb-30 mt-50">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="mb-50">
              <h1 className="heading-2 mb-10">Your Wishlist</h1>
              <h6 className="text-body">
                There are{" "}
                <span className="text-brand">{wishlistItems.length}</span>{" "}
                products in this list
              </h6>
            </div>

            <div className="table-responsive shopping-summery">
              <table className="table table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th className="custome-checkbox start pl-30">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="exampleCheckbox11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox11"
                      ></label>
                    </th>
                    <th colSpan="2">Product</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th>Action</th>
                    <th className="end">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item, index) => (
                    <tr key={item.id}>
                      <td className="custome-checkbox pl-30">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`checkbox-${index}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`checkbox-${index}`}
                        ></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img src={item.image} alt={item.name} width={80} />
                      </td>
                      <td className="product-des product-name">
                        <h6 className="mb-10">
                          <Link
                            className="product-name"
                            to="/shop-product-right"
                          >
                            {item.name}
                          </Link>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            (4.0)
                          </span>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h3 className="text-brand">${item.price}</h3>
                      </td>
                      <td className="text-center detail-info">
                        <span
                          className={`stock-status mb-0 ${
                            item.outOfStock ? "out-stock" : "in-stock"
                          }`}
                        >
                          {item.stock}
                        </span>
                      </td>
                      <td className="text-right">
                        <button
                          className={`btn btn-sm ${
                            item.outOfStock
                              ? "btn-secondary"
                              : "btn-outline-primary"
                          }`}
                        >
                          {item.action}
                        </button>
                      </td>
                      <td className="action text-center">
                        <button className="text-body btn border-0 bg-transparent">
                          <i className="fi-rs-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WishlistPage;

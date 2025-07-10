import React from 'react';
import { Link } from 'react-router-dom';

// Import images statically
import productImg1 from '../../assets/imgs/shop/product-1-1.jpg';
import productImg2 from '../../assets/imgs/shop/product-2-1.jpg';
import productImg3 from '../../assets/imgs/shop/product-3-1.jpg';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Field Roast Chao Cheese Creamy Original',
      image: productImg1,
      price: 2.51,
      rating: 4.0,
    },
    {
      id: 2,
      name: 'Blue Diamond Almonds Lightly Salted',
      image: productImg2,
      price: 3.2,
      rating: 4.0,
    },
    {
      id: 3,
      name: 'Fresh Organic Mustard Leaves Bell Pepper',
      image: productImg3,
      price: 2.43,
      rating: 4.0,
    },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <main className="main profinder-background">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              Home<i className="fi-rs-home mr-5 ml-1"></i>
            </Link>
            <span></span> Shop <span></span> Cart
          </div>
        </div>
      </div>

      <div className="container  mt-50">
        <div className="row">
          <div className="col-lg-8 mb-40">
            <h1 className="heading-2 mb-10">Your Cart</h1>
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-body">
                There are <span className="text-brand">{cartItems.length}</span> products in your cart
              </h6>
              <button className="btn btn-sm btn-outline-danger shadow-sm">
                <i className="fi-rs-trash mr-2"></i>Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="table-responsive shopping-summery">
              <table className="table table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th></th>
                    <th colSpan="2">Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" className="form-check-input" />
                      </td>
                      <td className="image product-thumbnail">
                        <img src={item.image} alt={item.name} width={80} />
                      </td>
                      <td className="product-des product-name">
                        <h6 className="mb-5">
                          <Link className="product-name text-heading" to="/product-detail">
                            {item.name}
                          </Link>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: '90%' }}></div>
                          </div>
                          <span className="font-small ml-5 text-muted">({item.rating})</span>
                        </div>
                      </td>
                      <td>
                        <h4 className="text-body">${item.price.toFixed(2)}</h4>
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <button className="btn btn-sm btn-outline-secondary rounded-circle px-2 me-2">
                            <i className="fi-rs-angle-small-down"></i>
                          </button>
                          <span className="px-2">1</span>
                          <button className="btn btn-sm btn-outline-secondary rounded-circle px-2 ms-2">
                            <i className="fi-rs-angle-small-up"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <h4 className="text-brand">${item.price.toFixed(2)}</h4>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-outline-danger rounded-circle shadow-sm">
                          <i className="fi-rs-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-action d-flex justify-content-between mt-4">
              <Link to="/shop" className="btn btn-outline-primary shadow-sm">
                <i className="fi-rs-arrow-left mr-2"></i>Continue Shopping
              </Link>
              <button className="btn btn-outline-success shadow-sm">
                <i className="fi-rs-refresh mr-2"></i>Update Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="col-lg-4">
            <div className="border p-4 cart-totals rounded shadow-sm mt-lg-0 mt-4">
              <h4 className="mb-3">Cart Summary</h4>
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td className="text-end">${totalPrice}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td className="text-end">Free</td>
                  </tr>
                  <tr>
                    <td>Estimate for</td>
                    <td className="text-end">United Kingdom</td>
                  </tr>
                  <tr className="border-top">
                    <td><strong>Total</strong></td>
                    <td className="text-end"><strong className="text-brand">${totalPrice}</strong></td>
                  </tr>
                </tbody>
              </table>

              <Link to="/checkout" className="btn btn-primary w-100 mt-3 shadow-sm">
                Proceed to Checkout <i className="fi-rs-sign-out ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;

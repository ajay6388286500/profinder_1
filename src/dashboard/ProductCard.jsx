import React, { useState } from 'react';

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn">
    <div className="product-img-action-wrap">
      <div className="product-img product-img-zoom">
        <a href="shop-product-right.html">
          <img className="default-img" src={product.image} alt="" />
          <img className="hover-img" src={product.hoverImage} alt="" />
        </a>
      </div>
      <div className="product-action-1">
        <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
          <i className="fi-rs-heart" />
        </a>
        <a aria-label="Compare" className="action-btn" href="shop-compare.html">
          <i className="fi-rs-shuffle" />
        </a>
        <a
          aria-label="Quick view"
          className="action-btn"
          data-bs-toggle="modal"
          data-bs-target="#quickViewModal"
        >
          <i className="fi-rs-eye" />
        </a>
      </div>
      {product.badge && (
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className={product.badgeClass}>{product.badge}</span>
        </div>
      )}
    </div>
    <div className="product-content-wrap">
      <div className="product-category">
        <a href="shop-grid-right.html">{product.category}</a>
      </div>
      <h2>
        <a href="shop-product-right.html">{product.title}</a>
      </h2>
      <div className="product-rate-cover">
        <div className="product-rate d-inline-block">
          <div className="product-rating" style={{ width: `${product.rating * 20}%` }} />
        </div>
        <span className="font-small ml-5 text-muted">({product.rating.toFixed(1)})</span>
      </div>
      <div>
        <span className="font-small text-muted">
          By <a href="vendor-details-1.html">{product.vendor}</a>
        </span>
      </div>
      <div className="product-card-bottom">
        <div className="product-price">
          <span>${product.price}</span>
          {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
        </div>
        <div className="add-cart">
          <a className="add" href="shop-cart.html">
            <i className="fi-rs-shopping-cart mr-5" />
            Add
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Product Grid Component
const ProductGrid = ({ products }) => (
  <div className="row product-grid-4">
    {products.map((product, index) => (
      <div
        key={index}
        className={`col-lg-1-5 col-md-3 col-12 col-sm-6 ${index === 0 ? 'd-none d-xl-block' : ''}`}
      >
        <ProductCard product={product} />
      </div>
    ))}
  </div>
);

// Tab Content Component
const TabContent = ({ id, products, active }) => (
  <div
    className={`tab-pane fade ${active ? 'show active' : ''}`}
    id={id}
    role="tabpanel"
    aria-labelledby={`nav-tab-${id.split('-')[1]}`}
  >
    <ProductGrid products={products} />
  </div>
);

// Product Tabs Component
const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('tab-one');

  // Sample product data
  const sampleProducts = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      hoverImage: 'https://via.placeholder.com/300x300?text=Hover',
      title: 'Product Two',
      category: 'Category B',
      price: 19.99,
      rating: 3.8,
      vendor: 'Vendor B',
      badge: 'New',
      badgeClass: 'new',
    },{
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      hoverImage: 'https://via.placeholder.com/300x300?text=Hover',
      title: 'Product One',
      category: 'Category A',
      price: 29.99,
      oldPrice: 39.99,
      rating: 4.2,
      vendor: 'Vendor A',
      badge: 'Hot',
      badgeClass: 'hot',
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      hoverImage: 'https://via.placeholder.com/300x300?text=Hover',
      title: 'Product Two',
      category: 'Category B',
      price: 19.99,
      rating: 3.8,
      vendor: 'Vendor B',
      badge: 'New',
      badgeClass: 'new',
    },
     {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      hoverImage: 'https://via.placeholder.com/300x300?text=Hover',
      title: 'Product Two',
      category: 'Category B',
      price: 19.99,
      rating: 3.8,
      vendor: 'Vendor B',
      badge: 'New',
      badgeClass: 'new',
    },
  ];

  const tabData = [
    {
      id: 'tab-one',
      title: 'All',
      products: sampleProducts,
    },
    {
      id: 'tab-two',
      title: 'Milks & Dairies',
      products: sampleProducts,
    },
    {
      id: 'tab-three',
      title: 'Snacks',
      products: sampleProducts,
    },
    {
      id: 'tab-four',
      title: 'Beverages',
      products: sampleProducts,
    },
  ];

  return (
    <section className="product-tabs section-padding position-relative">
      <div className="container">
        <div className="section-title style-2 wow animate__animated animate__fadeIn">
          <h3>Popular Products</h3>
          <ul className="nav nav-tabs links" id="myTab" role="tablist">
            {tabData.map((tab) => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  id={`nav-tab-${tab.id.split('-')[1]}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          {tabData.map((tab) => (
            <TabContent
              key={tab.id}
              id={tab.id}
              products={tab.products}
              active={tab.id === activeTab}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;

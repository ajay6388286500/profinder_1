import React from 'react';

// Product images
import product1 from '../../assets/imgs/shop/product-1-1.jpg';
import product1Hover from '../../assets/imgs/shop/product-1-2.jpg';

// Banner images
import banner5 from '../../assets/imgs/banner/banner-5.png';
import banner11 from '../../assets/imgs/banner/banner-11.png';

// Sidebar icons
import category1 from '../../assets/imgs/theme/icons/category-1.svg';
import category2 from '../../assets/imgs/theme/icons/category-2.svg';
import category3 from '../../assets/imgs/theme/icons/category-3.svg';
import category4 from '../../assets/imgs/theme/icons/category-4.svg';
import category5 from '../../assets/imgs/theme/icons/category-5.svg';

// New product thumbnails
import thumbnail3 from '../../assets/imgs/shop/thumbnail-3.jpg';

const ShopPage = () => {
  return (
    <main className="main">
      {/* Page Header */}
      <div className="page-header mt-30 mb-50">
        <div className="container">
          <div className="archive-header">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <h1 className="mb-15">Snack</h1>
                <div className="breadcrumb">
                  <a href="/" rel="nofollow">
                    Home<i className="fi-rs-home mr-5" />
                  </a>
                  <span /> Shop <span /> Snack
                </div>
              </div>
              <div className="col-xl-9 text-end d-none d-xl-block">
                <ul className="tags-list">
                  {["Cabbage", "Broccoli", "Artichoke", "Celery", "Spinach"].map((tag, i) => (
                    <li key={i} className={`hover-up ${tag === "Broccoli" ? "active" : ""}`}>
                      <a href="#">
                        <i className="fi-rs-cross mr-10" /> {tag}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mb-30">
        <div className="row">
          {/* Product List */}
          <div className="col-lg-4-5">
            {/* Filter Options */}
            <div className="shop-product-fillter">
              <div className="totall-product">
                <p>
                  We found <strong className="text-brand">29</strong> items for you!
                </p>
              </div>
              <div className="sort-by-product-area">
                {/* Show Per Page */}
                <div className="sort-by-cover mr-10">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>Show: <i className="fi-rs-apps" /></span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>50 <i className="fi-rs-angle-small-down" /></span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      {[50, 100, 150, 200, "All"].map((n, i) => (
                        <li key={i}>
                          <a className={n === 50 ? "active" : ""} href="#">
                            {n}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sort By */}
                <div className="sort-by-cover">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>Sort by: <i className="fi-rs-apps-sort" /></span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span><i className="fi-rs-angle-small-down" /> Featured</span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      {["Featured", "Price: Low to High", "Price: High to Low", "Release Date", "Avg. Rating"].map((opt, i) => (
                        <li key={i}>
                          <a className={opt === "Featured" ? "active" : ""} href="#">
                            {opt}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="row product-grid">
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="#">
                        <img className="default-img" src={product1} alt="product" />
                        <img className="hover-img" src={product1Hover} alt="product" />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a className="action-btn" href="#"><i className="fi-rs-heart" /></a>
                      <a className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                      <a className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fi-rs-eye" />
                      </a>
                    </div>
                    <div className="product-badges"><span className="hot">Hot</span></div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category"><a href="#">Snack</a></div>
                    <h2><a href="#">Seeds of Change Organic Quinoa</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: '90%' }} />
                      </div>
                      <span className="font-small ml-5 text-muted">(4.0)</span>
                    </div>
                    <span className="font-small text-muted">By <a href="#">NestFood</a></span>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$28.85</span>
                        <span className="old-price">$32.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5" /> Add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="#">
                        <img className="default-img" src={product1} alt="product" />
                        <img className="hover-img" src={product1Hover} alt="product" />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a className="action-btn" href="#"><i className="fi-rs-heart" /></a>
                      <a className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                      <a className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fi-rs-eye" />
                      </a>
                    </div>
                    <div className="product-badges"><span className="hot">Hot</span></div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category"><a href="#">Snack</a></div>
                    <h2><a href="#">Seeds of Change Organic Quinoa</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: '90%' }} />
                      </div>
                      <span className="font-small ml-5 text-muted">(4.0)</span>
                    </div>
                    <span className="font-small text-muted">By <a href="#">NestFood</a></span>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$28.85</span>
                        <span className="old-price">$32.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5" /> Add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="#">
                        <img className="default-img" src={product1} alt="product" />
                        <img className="hover-img" src={product1Hover} alt="product" />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a className="action-btn" href="#"><i className="fi-rs-heart" /></a>
                      <a className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                      <a className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fi-rs-eye" />
                      </a>
                    </div>
                    <div className="product-badges"><span className="hot">Hot</span></div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category"><a href="#">Snack</a></div>
                    <h2><a href="#">Seeds of Change Organic Quinoa</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: '90%' }} />
                      </div>
                      <span className="font-small ml-5 text-muted">(4.0)</span>
                    </div>
                    <span className="font-small text-muted">By <a href="#">NestFood</a></span>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$28.85</span>
                        <span className="old-price">$32.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5" /> Add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Duplicate above block for more products as needed */}
            </div>

            {/* Pagination */}
            <div className="pagination-area mt-20 mb-20">
              <nav>
                <ul className="pagination justify-content-start">
                  {[1, 2, 3, '...', 6].map((page, i) => (
                    <li key={i} className={`page-item ${page === 2 ? "active" : ""}`}>
                      <a className="page-link" href="#">{page}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Deals of the Day */}
            <section className="section-padding pb-5">
              <div className="section-title">
                <h3>Deals Of The Day</h3>
                <a className="show-all" href="#">
                  <i className="fi-rs-angle-left" /> All Deals
                </a>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="#"><img src={banner5} alt="deal" /></a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div className="deals-countdown" data-countdown="2025/03/25 00:00:00" />
                      </div>
                      <h2><a href="#">Seeds of Change Organic Quinoa, Brown</a></h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }} />
                        </div>
                        <span className="font-small ml-5 text-muted">(4.0)</span>
                      </div>
                      <span className="font-small text-muted">By <a href="#">NestFood</a></span>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5" /> Add</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                     <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="#"><img src={banner5} alt="deal" /></a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div className="deals-countdown" data-countdown="2025/03/25 00:00:00" />
                      </div>
                      <h2><a href="#">Seeds of Change Organic Quinoa, Brown</a></h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }} />
                        </div>
                        <span className="font-small ml-5 text-muted">(4.0)</span>
                      </div>
                      <span className="font-small text-muted">By <a href="#">NestFood</a></span>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5" /> Add</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                     <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="#"><img src={banner5} alt="deal" /></a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div className="deals-countdown" data-countdown="2025/03/25 00:00:00" />
                      </div>
                      <h2><a href="#">Seeds of Change Organic Quinoa, Brown</a></h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }} />
                        </div>
                        <span className="font-small ml-5 text-muted">(4.0)</span>
                      </div>
                      <span className="font-small text-muted">By <a href="#">NestFood</a></span>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5" /> Add</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                     <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="#"><img src={banner5} alt="deal" /></a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div className="deals-countdown" data-countdown="2025/03/25 00:00:00" />
                      </div>
                      <h2><a href="#">Seeds of Change Organic Quinoa, Brown</a></h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }} />
                        </div>
                        <span className="font-small ml-5 text-muted">(4.0)</span>
                      </div>
                      <span className="font-small text-muted">By <a href="#">NestFood</a></span>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5" /> Add</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
            {/* Categories */}
            <div className="sidebar-widget widget-category-2 mb-30">
              <h5 className="section-title style-1 mb-30">Category</h5>
              <ul>
                {[
                  { icon: category1, name: "Milks & Dairies", count: 30 },
                  { icon: category2, name: "Clothing", count: 35 },
                  { icon: category3, name: "Pet Foods", count: 42 },
                  { icon: category4, name: "Baking material", count: 68 },
                  { icon: category5, name: "Fresh Fruit", count: 87 },
                ].map((cat, i) => (
                  <li key={i}>
                    <a href="#"><img src={cat.icon} alt="" /> {cat.name}</a>
                    <span className="count">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="sidebar-widget price_range range mb-30">
              <h5 className="section-title style-1 mb-30">Filter by price</h5>
              {/* Slider implementation is expected here */}
              {/* Checkbox Filters */}
              <div className="custome-checkbox">
                {/* Color */}
                <label className="fw-900">Color</label>
                {["Red", "Green", "Blue"].map((color, i) => (
                  <div key={i}>
                    <input type="checkbox" className="form-check-input" id={`color${i}`} />
                    <label className="form-check-label" htmlFor={`color${i}`}>
                      <span>{color}</span>
                    </label>
                  </div>
                ))}

                {/* Item Condition */}
                <label className="fw-900 mt-15">Item Condition</label>
                {["New", "Refurbished", "Used"].map((cond, i) => (
                  <div key={i}>
                    <input type="checkbox" className="form-check-input" id={`cond${i}`} />
                    <label className="form-check-label" htmlFor={`cond${i}`}>
                      <span>{cond}</span>
                    </label>
                  </div>
                ))}
              </div>
              <a href="#" className="btn btn-sm btn-default">
                <i className="fi-rs-filter mr-5" /> Filter
              </a>
            </div>

            {/* New Products */}
            <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
              <h5 className="section-title style-1 mb-30">New products</h5>
              <div className="single-post clearfix">
                <div className="image">
                  <img src={thumbnail3} alt="#" />
                </div>
                <div className="content pt-10">
                  <h5><a href="#">Chen Cardigan</a></h5>
                  <p className="price mb-0 mt-5">$99.50</p>
                  <div className="product-rate">
                    <div className="product-rating" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Banner */}
            <div className="banner-img d-lg-block d-none">
              <img src={banner11} alt="banner" />
              <div className="banner-text">
                <span>Organic</span>
                <h4>Save 17% on <span className="text-brand">Organic</span> Juice</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;

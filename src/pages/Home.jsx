import React from 'react'
import HeroSlider from './HeroSlider'
import FeaturedCategories from '../dashboard/FeaturedCategories'
import BannerSection from '../dashboard/BannerSection'
import ProductTabs from '../dashboard/ProductCard'
import DailyBestSells from '../dashboard/DailyBestSells'
import DealsOfTheDay from '../dashboard/DealsOfTheDay'
import ProductListSection from '../dashboard/ProductListSection'

export default function Home() {
  return (
    <main className="main profinder-background">
  {/* <section className="home-slider position-relative mb-30">
    <div className="container">
      <div className="home-slide-cover mt-30">
        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
          <div
            className="single-hero-slider single-animation-wrap"
            style={{ backgroundImage: "url(assets/imgs/slider/slider-1.png)" }}
          >
            <div className="slider-content">
              <h1 className="display-2 mb-40">
                Don’t miss amazing
                <br />
                grocery deals
              </h1>
              <p className="mb-65">Sign up for the daily newsletter</p>
              <form className="form-subcriber d-flex">
                <input type="email" placeholder="Your emaill address" />
                <button className="btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div
            className="single-hero-slider single-animation-wrap"
            style={{ backgroundImage: "url(assets/imgs/slider/slider-2.png)" }}
          >
            <div className="slider-content">
              <h1 className="display-2 mb-40">
                Fresh Vegetables
                <br />
                Big discount
              </h1>
              <p className="mb-65">Save up to 50% off on your first order</p>
              <form className="form-subcriber d-flex">
                <input type="email" placeholder="Your emaill address" />
                <button className="btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="slider-arrow hero-slider-1-arrow" />
      </div>
    </div>
  </section> */}
  <HeroSlider />



  {/*End hero slider*/}
  {/* <section className="popular-categories section-padding">
    <div className="container wow animate__animated animate__fadeIn">
      <div className="section-title">
        <div className="title">
          <h3>Featured Categories</h3>
          <ul className="list-inline nav nav-tabs links">
            <li className="list-inline-item nav-item">
              <a className="nav-link" href="shop-grid-right.html">
                Cake &amp; Milk
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a className="nav-link" href="shop-grid-right.html">
                Coffes &amp; Teas
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a className="nav-link active" href="shop-grid-right.html">
                Pet Foods
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a className="nav-link" href="shop-grid-right.html">
                Vegetables
              </a>
            </li>
          </ul>
        </div>
        <div
          className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
          id="carausel-10-columns-arrows"
        />
      </div>
      <div className="carausel-10-columns-cover position-relative">
        <div className="carausel-10-columns" id="carausel-10-columns">
          <div
            className="card-2 bg-9 wow animate__animated animate__fadeInUp"
            data-wow-delay=".1s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-13.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Cake &amp; Milk</a>
            </h6>
            <span>26 items</span>
          </div>
          <div
            className="card-2 bg-10 wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-12.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Oganic Kiwi</a>
            </h6>
            <span>28 items</span>
          </div>
          <div
            className="card-2 bg-11 wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-11.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Peach</a>
            </h6>
            <span>14 items</span>
          </div>
          <div
            className="card-2 bg-12 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-9.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Red Apple</a>
            </h6>
            <span>54 items</span>
          </div>
          <div
            className="card-2 bg-13 wow animate__animated animate__fadeInUp"
            data-wow-delay=".5s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-3.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Snack</a>
            </h6>
            <span>56 items</span>
          </div>
          <div
            className="card-2 bg-14 wow animate__animated animate__fadeInUp"
            data-wow-delay=".6s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-1.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Vegetables</a>
            </h6>
            <span>72 items</span>
          </div>
          <div
            className="card-2 bg-15 wow animate__animated animate__fadeInUp"
            data-wow-delay=".7s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-2.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Strawberry</a>
            </h6>
            <span>36 items</span>
          </div>
          <div
            className="card-2 bg-12 wow animate__animated animate__fadeInUp"
            data-wow-delay=".8s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-4.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Black plum</a>
            </h6>
            <span>123 items</span>
          </div>
          <div
            className="card-2 bg-10 wow animate__animated animate__fadeInUp"
            data-wow-delay=".9s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-5.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Custard apple</a>
            </h6>
            <span>34 items</span>
          </div>
          <div
            className="card-2 bg-12 wow animate__animated animate__fadeInUp"
            data-wow-delay="1s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-14.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Coffe &amp; Tea</a>
            </h6>
            <span>89 items</span>
          </div>
          <div
            className="card-2 bg-11 wow animate__animated animate__fadeInUp"
            data-wow-delay="0s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img src="assets/imgs/shop/cat-15.png" alt="" />
              </a>
            </figure>
            <h6>
              <a href="shop-grid-right.html">Headphone</a>
            </h6>
            <span>87 items</span>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* <FeaturedCategories /> */}
  {/*End category slider*/}



  {/* <section className="banners mb-25">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div
            className="banner-img wow animate__animated animate__fadeInUp"
            data-wow-delay={0}
          >
            <img src="assets/imgs/banner/banner-1.png" alt="" />
            <div className="banner-text">
              <h4>
                Everyday Fresh &amp; <br />
                Clean with Our
                <br />
                Products
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs">
                Shop Now <i className="fi-rs-arrow-small-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div
            className="banner-img wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <img src="assets/imgs/banner/banner-2.png" alt="" />
            <div className="banner-text">
              <h4>
                Make your Breakfast
                <br />
                Healthy and Easy
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs">
                Shop Now <i className="fi-rs-arrow-small-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-md-none d-lg-flex">
          <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <img src="assets/imgs/banner/banner-3.png" alt="" />
            <div className="banner-text">
              <h4>
                The best Organic <br />
                Products Online
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs">
                Shop Now <i className="fi-rs-arrow-small-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}

  <BannerSection />
  {/*End banners*/}

 <ProductTabs />
  {/*Products Tabs*/}
 

 {/* <DailyBestSells /> */}
  {/*End Best Sales*/}
  <DealsOfTheDay />
  {/*End Deals*/}
  {/* <section className="section-padding mb-30">
    <div className="container">
      <div className="row">
        <div
          className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
          data-wow-delay={0}
        >
          <h4 className="section-title style-1 mb-30 animated animated">
            Top Selling
          </h4>
          <div className="product-list-small animated animated">
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-1.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-2.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-3.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <h4 className="section-title style-1 mb-30 animated animated">
            Trending Products
          </h4>
          <div className="product-list-small animated animated">
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-4.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Organic Cage-Free Grade A Large Brown Eggs
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-5.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-6.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Naturally Flavored Cinnamon Vanilla Light Roast Coffee
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp"
          data-wow-delay=".2s"
        >
          <h4 className="section-title style-1 mb-30 animated animated">
            Recently added
          </h4>
          <div className="product-list-small animated animated">
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-7.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Pepperidge Farm Farmhouse Hearty White Bread
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-8.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Organic Frozen Triple Berry Blend
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-9.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Oroweat Country Buttermilk Bread
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          <h4 className="section-title style-1 mb-30 animated animated">
            Top Rated
          </h4>
          <div className="product-list-small animated animated">
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-10.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Foster Farms Takeout Crispy Classic Buffalo Wings
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-11.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
            <article className="row align-items-center hover-up">
              <figure className="col-md-4 mb-0">
                <a href="shop-product-right.html">
                  <img src="assets/imgs/shop/thumbnail-12.jpg" alt="" />
                </a>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <a href="shop-product-right.html">
                    All Natural Italian-Style Chicken Meatballs
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>$32.85</span>
                  <span className="old-price">$33.8</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <ProductListSection />
  {/*End 4 columns*/}
</main>

  )
}

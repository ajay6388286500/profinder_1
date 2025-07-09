import React from 'react';

const DailyBestSells = () => {
  return (
    <section className="section-padding pb-5">
      <div className="container">
        <div className="section-title wow animate__animated animate__fadeIn">
          <h3 className="">Daily Best Sells</h3>
          <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="nav-tab-one-1" data-bs-toggle="tab" data-bs-target="#tab-one-1" type="button" role="tab" aria-controls="tab-one" aria-selected="true">Featured</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-two-1" data-bs-toggle="tab" data-bs-target="#tab-two-1" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Popular</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-three-1" data-bs-toggle="tab" data-bs-target="#tab-three-1" type="button" role="tab" aria-controls="tab-three" aria-selected="false">New added</button>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
            <div className="banner-img style-2">
              <div className="banner-text">
                <h2 className="mb-100">Bring nature into your home</h2>
                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
            <div className="tab-content" id="myTabContent-1">
              {/* Featured Tab */}
              <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel" aria-labelledby="tab-one-1">
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-arrows" />
                  <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns">
                    {/* Product cards would go here */}
                  </div>
                </div>
              </div>
              
              {/* Popular Tab */}
              <div className="tab-pane fade" id="tab-two-1" role="tabpanel" aria-labelledby="tab-two-1">
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-2-arrows" />
                  <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns-2">
                    {/* Product cards would go here */}
                  </div>
                </div>
              </div>
              
              {/* New Added Tab */}
              <div className="tab-pane fade" id="tab-three-1" role="tabpanel" aria-labelledby="tab-three-1">
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-3-arrows" />
                  <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns-3">
                    {/* Product cards would go here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBestSells;
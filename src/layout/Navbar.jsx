import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/imgs/theme/logo.png";
import iconCompare from '../../assets/imgs/theme/icons/icon-compare.svg';
import iconHeart from '../../assets/imgs/theme/icons/icon-heart.svg';
import iconCart from '../../assets/imgs/theme/icons/icon-cart.svg';
import iconUser from '../../assets/imgs/theme/icons/icon-user.svg';
import iconHeadphone from '../../assets/imgs/theme/icons/icon-headphone.svg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="header-area header-style-1 header-height-2 shadow-sm">
        {/* Mobile Promotion */}
        <div className="mobile-promotion">
          <span>
            Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left
          </span>
        </div>

        {/* Desktop Header */}
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block bg-white">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <form>
                    <select className="select-active">
                      <option>All Categories</option>
                    </select>
                    <input type="text" placeholder="Search for items..." />
                  </form>
                </div>

                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="search-location">
                      <form>
                        <select className="select-active">
                          <option>Your Location</option>
                        </select>
                      </form>
                    </div>

                    <div className="header-action-icon-2">
                      <Link to="/dashboards/compare">
                        <img src={iconCompare} alt="Compare" />
                        <span className="pro-count blue">3</span>
                        <span className="lable ml-0">Compare</span>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <Link to="/dashboards/wishlist">
                        <img src={iconHeart} alt="Wishlist" />
                        <span className="pro-count blue">6</span>
                        <span className="lable">Wishlist</span>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <Link to="/dashboards/cart">
                        <img src={iconCart} alt="Cart" />
                        <span className="pro-count blue">2</span>
                        <span className="lable">Cart</span>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <Link to="/login">
                        <img src={iconUser} alt="Account" />
                        <span className="lable ml-0">Account</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="header-bottom header-bottom-bg-color sticky-bar d-block d-lg-none">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>

              <div className="hotline d-none d-md-flex">
                <img src={iconHeadphone} alt="hotline" />
                <p>
                  1900 - 888 <span>24/7 Support</span>
                </p>
              </div>

              <div
                className="header-action-icon-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>

              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link to="/dashboards/wishlist">
                      <img src={iconHeart} alt="Wishlist" />
                      <span className="pro-count white">4</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="/dashboards/cart">
                      <img src={iconCart} alt="Cart" />
                      <span className="pro-count white">2</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - inline in this component */}
      {mobileMenuOpen && (
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="mobile-menu-content">
            <button className="close-mobile-menu" onClick={() => setMobileMenuOpen(false)}>×</button>
            <ul className="mobile-menu-list">
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/dashboards/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link></li>
              <li><Link to="/dashboards/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link></li>
              <li><Link to="/dashboards/wishlist" onClick={() => setMobileMenuOpen(false)}>Wishlist</Link></li>
              <li><Link to="/login" onClick={() => setMobileMenuOpen(false)}>Account</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

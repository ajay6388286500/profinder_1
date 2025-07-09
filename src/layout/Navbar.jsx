import React from 'react';
import logo from "../../assets/imgs/theme/logo.png"
import iconCompare from '../../assets/imgs/theme/icons/icon-compare.svg';
import iconHeart from '../../assets/imgs/theme/icons/icon-heart.svg';
import iconCart from '../../assets/imgs/theme/icons/icon-cart.svg';
import iconUser from '../../assets/imgs/theme/icons/icon-user.svg';
import iconHot from '../../assets/imgs/theme/icons/icon-hot.svg';
import iconHeadphone from '../../assets/imgs/theme/icons/icon-headphone.svg';
import bannerMenu from '../../assets/imgs/banner/banner-menu.png';
import MobileHeader from '../layout/MobileHeader';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <div>
      <header className="header-area header-style-1 header-height-2">
      <div className="mobile-promotion">
        <span>
          Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left
        </span>
      </div>

      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <select className="select-active">
                    <option>All Categories</option>
                    {/* Add other options here */}
                  </select>
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>

              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="search-location">
                    <form action="#">
                      <select className="select-active">
                        <option>Your Location</option>
                        {/* Add other options here */}
                      </select>
                    </form>
                  </div>

                  <div className="header-action-icon-2">
                    <a href="shop-compare.html">
                      <img className="svgInject" alt="Nest" src={iconCompare} />
                      <span className="pro-count blue">3</span>
                    </a>
                    <a href="shop-compare.html">
                      <span className="lable ml-0">Compare</span>
                    </a>
                  </div>

                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img className="svgInject" alt="Nest" src={iconHeart} />
                      <span className="pro-count blue">6</span>
                    </a>
                    <a href="shop-wishlist.html">
                      <span className="lable">Wishlist</span>
                    </a>
                  </div>

                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="shop-cart.html">
                      <img alt="Nest" src={iconCart} />
                      <span className="pro-count blue">2</span>
                    </a>
                    <a href="shop-cart.html">
                      <span className="lable">Cart</span>
                    </a>
                  </div>

                  <div className="header-action-icon-2">
                    <a href="page-account.html">
                      <img className="svgInject" alt="Nest" src={iconUser} />
                    </a>
                    {/* <a href="page-account.html"> */}


<Link to="/login">
                      <span className="lable ml-0">Account</span>
</Link>
                    {/* </a> */}
                    {/* Account dropdown can be added here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="hotline d-none d-lg-flex">
              <img src={iconHeadphone} alt="hotline" />
              <p>
                1900 - 888<span>24/7 Support Center</span>
              </p>
            </div>

            <div className="header-action-icon-2 d-block d-lg-none">
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>

            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <a href="shop-wishlist.html">
                    <img alt="Nest" src={iconHeart} />
                    <span className="pro-count white">4</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="shop-cart.html">
                    <img alt="Nest" src={iconCart} />
                    <span className="pro-count white">2</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}
    </header>
    {/* <MobileHeader /> */}
    {/* <MobileMenu /> */}
  </div>
  );
};

export default Navbar;
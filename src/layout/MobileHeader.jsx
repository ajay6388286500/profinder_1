import React from "react";
import logo from "../../assets/imgs/theme/logo.png";
import fb from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import tw from "../../assets/imgs/theme/icons/icon-twitter-white.svg";
import ig from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import pt from "../../assets/imgs/theme/icons/icon-pinterest-white.svg";
import yt from "../../assets/imgs/theme/icons/icon-youtube-white.svg";

const MobileHeader = () => {
  const menuItems = [
    {
      label: "Home",
      link: "index.html",
      children: Array.from({ length: 6 }, (_, i) => ({
        label: `Home ${i + 1}`,
        link: `index${i === 0 ? "" : "-" + (i + 1)}.html`,
      })),
    },
    {
      label: "Shop",
      link: "shop-grid-right.html",
      children: [
        { label: "Shop Grid – Right Sidebar", link: "shop-grid-right.html" },
        { label: "Shop Grid – Left Sidebar", link: "shop-grid-left.html" },
        {
          label: "Single Product",
          children: [
            { label: "Product – Right Sidebar", link: "shop-product-right.html" },
            { label: "Product – Left Sidebar", link: "shop-product-left.html" },
            { label: "No Sidebar", link: "shop-product-full.html" },
          ],
        },
        { label: "Shop – Wishlist", link: "shop-wishlist.html" },
        { label: "Shop – Cart", link: "shop-cart.html" },
        { label: "Shop – Checkout", link: "shop-checkout.html" },
      ],
    },
    {
      label: "Pages",
      children: [
        { label: "About Us", link: "page-about.html" },
        { label: "Contact", link: "page-contact.html" },
        { label: "My Account", link: "page-account.html" },
        { label: "Login", link: "page-login.html" },
        { label: "Register", link: "page-register.html" },
      ],
    },
  ];

  const socialIcons = [
    { icon: fb, alt: "Facebook" },
    { icon: tw, alt: "Twitter" },
    { icon: ig, alt: "Instagram" },
    { icon: pt, alt: "Pinterest" },
    { icon: yt, alt: "YouTube" },
  ];

  const MenuItem = ({ label, link = "#", children }) => (
    <li className={children ? "menu-item-has-children" : ""}>
      <a href={link}>{label}</a>
      {children && (
        <ul className="dropdown">
          {children.map((child, i) => (
            <MenuItem key={i} {...child} />
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="mobile-header-active mobile-header-wrapper-style">
      <div className="mobile-header-wrapper-inner">
        {/* Top */}
        <div className="mobile-header-top d-flex justify-content-between align-items-center">
          <a href="index.html"><img src={logo} alt="Logo" /></a>
          <button className="close-style search-close">
            <i className="icon-top" /><i className="icon-bottom" />
          </button>
        </div>

        {/* Search */}
        <div className="mobile-search search-style-3 mobile-header-border">
          <form>
            <input type="text" placeholder="Search for items…" />
            <button type="submit"><i className="fi-rs-search" /></button>
          </form>
        </div>

        {/* Menu */}
        <nav className="mobile-menu-wrap mobile-header-border">
          <ul className="mobile-menu font-heading">
            {menuItems.map((item, i) => (
              <MenuItem key={i} {...item} />
            ))}
          </ul>
        </nav>

        {/* Info */}
        <div className="mobile-header-info-wrap">
          <a href="page-contact.html"><i className="fi-rs-marker" /> Our location</a>
          <a href="page-login.html"><i className="fi-rs-user" /> Log In / Sign Up</a>
          <a href="#"><i className="fi-rs-headphones" /> (+01) - 2345 - 6789</a>
        </div>

        {/* Social */}
        <div className="mobile-social-icon mb-50">
          <h6 className="mb-15">Follow Us</h6>
          {socialIcons.map(({ icon, alt }, i) => (
            <a href="#" key={i}><img src={icon} alt={alt} /></a>
          ))}
        </div>

        <div className="site-copyright">
          © 2025 Nest. All rights reserved. Powered by AliThemes.
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;

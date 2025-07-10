import React from 'react';

// Category Icons
import categoryIcon1 from '../../assets/imgs/theme/icons/category-1.svg';
import categoryIcon2 from '../../assets/imgs/theme/icons/category-2.svg';
import categoryIcon3 from '../../assets/imgs/theme/icons/category-3.svg';
import categoryIcon4 from '../../assets/imgs/theme/icons/category-4.svg';
import categoryIcon5 from '../../assets/imgs/theme/icons/category-5.svg';

// Blog Thumbnails
import blog1 from '../../assets/imgs/blog/blog-1.png';
import blog2 from '../../assets/imgs/blog/blog-2.png';
import blog3 from '../../assets/imgs/blog/blog-3.png';

// Shop Thumbnails
import thumbnail1 from '../../assets/imgs/shop/thumbnail-1.jpg';
import thumbnail2 from '../../assets/imgs/shop/thumbnail-2.jpg';
import thumbnail3 from '../../assets/imgs/shop/thumbnail-3.jpg';
import thumbnail4 from '../../assets/imgs/shop/thumbnail-4.jpg';
import thumbnail5 from '../../assets/imgs/shop/thumbnail-5.jpg';
import thumbnail6 from '../../assets/imgs/shop/thumbnail-6.jpg';

// Banner
import bannerImg from '../../assets/imgs/banner/banner-11.png';

const BlogPage = () => {
  const blogArticles = [
    {
      image: blog1,
      category: 'Side Dish',
      title: 'The Intermediate Guide to Healthy Food',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-heart',
    },
    {
      image: blog2,
      category: 'Soups and Stews',
      title: 'Summer Quinoa Salad Jars with Lemon Dill',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-heart',
    },
    {
      image: blog3,
      category: 'Salad',
      title: 'Caprese Chicken with Smashed Potatoes',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-link',
    },
      {
      image: blog1,
      category: 'Side Dish',
      title: 'The Intermediate Guide to Healthy Food',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-heart',
    },
    {
      image: blog2,
      category: 'Soups and Stews',
      title: 'Summer Quinoa Salad Jars with Lemon Dill',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-heart',
    },
    {
      image: blog3,
      category: 'Salad',
      title: 'Caprese Chicken with Smashed Potatoes',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-link',
    },  {
      image: blog1,
      category: 'Side Dish',
      title: 'The Intermediate Guide to Healthy Food',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-heart',
    },
    {
      image: blog2,
      category: 'Soups and Stews',
      title: 'Summer Quinoa Salad Jars with Lemon Dill',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-heart',
    },
    {
      image: blog3,
      category: 'Salad',
      title: 'Caprese Chicken with Smashed Potatoes',
      date: '25 April 2025',
      views: '126k Views',
      readTime: '4 mins read',
      link: 'blog-post-right.html',
      iconClass: 'fi-rs-link',
    },
  ];

  return (
    <main className="main profinder-background">
      {/* Header */}
      <div className="page-header pt-30 mb-75">
        <div className="container">
          <div className="archive-header">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <h1 className="mb-15">Blog & News</h1>
                <div className="breadcrumb">
                  <a href="index.html" rel="nofollow">
                    Home<i className="fi-rs-home mr-5"></i>
                  </a>
                  <span></span> Blog & News
                </div>
              </div>
              <div className="col-xl-9 text-end d-none d-xl-block">
                <ul className="tags-list">
                  {['Shopping', 'Recips', 'Kitchen', 'News', 'Food'].map((tag, idx) => (
                    <li className={`hover-up ${tag === 'Recips' ? 'active' : ''}`} key={idx}>
                      <a href="blog-category-grid.html">
                        <i className="fi-rs-cross mr-10"></i>{tag}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="page-content mb-50">
        <div className="container">
          <div className="row">
            {/* Blog Articles */}
            <div className="col-lg-9">
              <div className="shop-product-fillter mb-50 pr-30">
                <div className="totall-product">
                  <h2><img className="w-36px mr-10" src={categoryIcon1} alt="" /> Recips Articles</h2>
                </div>
                <div className="sort-by-product-area">
                  <div className="sort-by-cover mr-10">
                    <div className="sort-by-product-wrap">
                      <div className="sort-by"><span>Show:<i className="fi-rs-apps"></i></span></div>
                      <div className="sort-by-dropdown-wrap"><span> 50 <i className="fi-rs-angle-small-down"></i></span></div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        {[50, 100, 150, 200, 'All'].map((val, i) => (
                          <li key={i}><a className={val === 50 ? 'active' : ''} href="#">{val}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="sort-by-cover">
                    <div className="sort-by-product-wrap">
                      <div className="sort-by"><span><i className="fi-rs-apps-sort"></i>Sort:</span></div>
                      <div className="sort-by-dropdown-wrap"><span><i className="fi-rs-angle-small-down"></i> Featured</span></div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        {['Featured', 'Newest', 'Most comments', 'Release Date'].map((opt, idx) => (
                          <li key={idx}><a className={opt === 'Featured' ? 'active' : ''} href="#">{opt}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="loop-grid pr-30">
                <div className="row">
                  {blogArticles.map((article, index) => (
                    <article key={index} className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div className="post-thumb">
                        <a href={article.link}><img className="border-radius-15" src={article.image} alt="" /></a>
                        <div className="entry-meta">
                          <a className="entry-meta meta-2" href="blog-category-grid.html">
                            <i className={article.iconClass}></i>
                          </a>
                        </div>
                      </div>
                      <div className="entry-content-2">
                        <h6 className="mb-10 font-sm">
                          <a className="entry-meta text-muted" href="blog-category-grid.html">{article.category}</a>
                        </h6>
                        <h4 className="post-title mb-15"><a href={article.link}>{article.title}</a></h4>
                        <div className="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span className="post-on mr-10">{article.date}</span>
                            <span className="hit-count has-dot mr-10">{article.views}</span>
                            <span className="hit-count has-dot">{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item"><a className="page-link" href="#"><i className="fi-rs-arrow-small-right"></i></a></li>
                    {[1, 2, 3].map(n => (
                      <li className={`page-item ${n === 2 ? 'active' : ''}`} key={n}><a className="page-link" href="#">{n}</a></li>
                    ))}
                    <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i className="fi-rs-arrow-small-left"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <div className="widget-area">

                {/* Search */}
                <div className="sidebar-widget-2 widget_search mb-50">
                  <div className="search-form">
                    <form>
                      <input type="text" placeholder="Search…" />
                      <button type="submit"><i className="fi-rs-search"></i></button>
                    </form>
                  </div>
                </div>

                {/* Category List */}
                <div className="sidebar-widget widget-category-2 mb-50">
                  <h5 className="section-title style-1 mb-30">Category</h5>
                  <ul>
                    {[{ icon: categoryIcon1, name: 'Milks & Dairies', count: 30 },
                      { icon: categoryIcon2, name: 'Clothing', count: 35 },
                      { icon: categoryIcon3, name: 'Pet Foods', count: 42 },
                      { icon: categoryIcon4, name: 'Baking material', count: 68 },
                      { icon: categoryIcon5, name: 'Fresh Fruit', count: 87 }]
                      .map((cat, idx) => (
                        <li key={idx}>
                          <a href="shop-grid-right.html"><img src={cat.icon} alt="" />{cat.name}</a>
                          <span className="count">{cat.count}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Trending Now */}
                <div className="sidebar-widget product-sidebar mb-50 p-30 bg-grey border-radius-10">
                  <h5 className="section-title style-1 mb-30">Trending Now</h5>
                  {[
                    { img: thumbnail3, title: 'Chen Cardigan', price: '$99.50', rating: '90%' },
                    { img: thumbnail4, title: 'Chen Sweater', price: '$89.50', rating: '80%' },
                    { img: thumbnail5, title: 'Colorful Jacket', price: '$25', rating: '60%' },
                    { img: thumbnail6, title: 'Lorem, ipsum', price: '$25', rating: '60%' },
                  ].map((item, idx) => (
                    <div className="single-post clearfix" key={idx}>
                      <div className="image"><img src={item.img} alt="#" /></div>
                      <div className="content pt-10">
                        <h6><a href="shop-product-detail.html">{item.title}</a></h6>
                        <p className="price mb-0 mt-5">{item.price}</p>
                        <div className="product-rate">
                          <div className="product-rating" style={{ width: item.rating }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gallery */}
                <div className="sidebar-widget widget_instagram mb-50">
                  <h5 className="section-title style-1 mb-30">Gallery</h5>
                  <div className="instagram-gellay">
                    <ul className="insta-feed">
                      {[thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6].map((img, idx) => (
                        <li key={idx}><a href="#"><img className="border-radius-5" src={img} alt="" /></a></li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="sidebar-widget widget-tags mb-50 pb-10">
                  <h5 className="section-title style-1 mb-30">Popular Tags</h5>
                  <ul className="tags-list">
                    {['Cabbage', 'Broccoli', 'Smoothie', 'Fruit', 'Salad', 'Appetizer'].map((tag, idx) => (
                      <li className="hover-up" key={idx}>
                        <a href="blog-category-grid.html">
                          <i className="fi-rs-cross mr-10"></i>{tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Banner */}
                <div className="banner-img wow fadeIn mb-50 animated d-lg-block d-none">
                  <img src={bannerImg} alt="" />
                  <div className="banner-text">
                    <span>Oganic</span>
                    <h4>
                      Save 17% <br />
                      on <span className="text-brand">Oganic</span><br />
                      Juice
                    </h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

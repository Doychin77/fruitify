import React from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductDiscountCarousel from "@/src/components/ProductDiscountCarousel.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Shop = () => {
    const carouselOptions = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,  // Interval between slides
        autoplayHoverPause: true,
        smartSpeed: 1000,        // Speed of the animation (in milliseconds)
        autoplaySpeed: 1000,     // Speed of the autoplay transition (in milliseconds)
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 1,  // Show 1 item at a time on larger screens
            }
        }
    };

    return (
        <>
            {/* Page Preloder */}
            {/*<div id="preloder">*/}
            {/*    <div className="loader" />*/}
            {/*</div>*/}

            <Hamburger/>

            <Header/>

            {/* Hero Section Begin */}
            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars" />
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">Fresh Meat</a>
                                    </li>
                                    <li>
                                        <a href="#">Vegetables</a>
                                    </li>
                                    <li>
                                        <a href="#">Fruit &amp; Nut Gifts</a>
                                    </li>
                                    <li>
                                        <a href="#">Fresh Berries</a>
                                    </li>
                                    <li>
                                        <a href="#">Ocean Foods</a>
                                    </li>
                                    <li>
                                        <a href="#">Butter &amp; Eggs</a>
                                    </li>
                                    <li>
                                        <a href="#">Fastfood</a>
                                    </li>
                                    <li>
                                        <a href="#">Fresh Onion</a>
                                    </li>
                                    <li>
                                        <a href="#">Papayaya &amp; Crisps</a>
                                    </li>
                                    <li>
                                        <a href="#">Oatmeal</a>
                                    </li>
                                    <li>
                                        <a href="#">Fresh Bananas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down" />
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">
                                            SEARCH
                                        </button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}
            {/* Breadcrumb Section Begin */}
            <section
                className="breadcrumb-section set-bg"
                data-setbg="img/breadcrumb.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Organi Shop</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Department</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Fresh Meat</a>
                                        </li>
                                        <li>
                                            <a href="#">Vegetables</a>
                                        </li>
                                        <li>
                                            <a href="#">Fruit &amp; Nut Gifts</a>
                                        </li>
                                        <li>
                                            <a href="#">Fresh Berries</a>
                                        </li>
                                        <li>
                                            <a href="#">Ocean Foods</a>
                                        </li>
                                        <li>
                                            <a href="#">Butter &amp; Eggs</a>
                                        </li>
                                        <li>
                                            <a href="#">Fastfood</a>
                                        </li>
                                        <li>
                                            <a href="#">Fresh Onion</a>
                                        </li>
                                        <li>
                                            <a href="#">Papayaya &amp; Crisps</a>
                                        </li>
                                        <li>
                                            <a href="#">Oatmeal</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Price</h4>
                                    <div className="price-range-wrap">
                                        <div
                                            className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min={10}
                                            data-max={540}
                                        >
                                            <div className="ui-slider-range ui-corner-all ui-widget-header" />
                                            <span
                                                tabIndex={0}
                                                className="ui-slider-handle ui-corner-all ui-state-default"
                                            />
                                            <span
                                                tabIndex={0}
                                                className="ui-slider-handle ui-corner-all ui-state-default"
                                            />
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    <div className="sidebar__item__color sidebar__item__color--white">
                                        <label htmlFor="white">
                                            White
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--gray">
                                        <label htmlFor="gray">
                                            Gray
                                            <input type="radio" id="gray" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--red">
                                        <label htmlFor="red">
                                            Red
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--black">
                                        <label htmlFor="black">
                                            Black
                                            <input type="radio" id="black" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--blue">
                                        <label htmlFor="blue">
                                            Blue
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--green">
                                        <label htmlFor="green">
                                            Green
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Popular Size</h4>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="large">
                                            Large
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="medium">
                                            Medium
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="small">
                                            Small
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="tiny">
                                            Tiny
                                            <input type="radio" id="tiny" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                        <OwlCarousel
                                            className='latest-product__slider owl-carousel' {...carouselOptions}>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <ProductDiscountCarousel />
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value={0}>Default</option>
                                                <option value={0}>Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6>
                                                <span>16</span> Products found
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className="icon_grid-2x2" />
                                            <span className="icon_ul" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-1.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-2.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic">
                                        <img src="img/product/product-3.jpg" alt="Product"/>
                                        <ul className="product__item__pic__hover">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-heart"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-retweet"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>
                                        <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-4.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-5.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-6.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-7.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-8.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-9.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-10.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-11.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src="img/product/product-12.jpg" alt="Product"/>
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                            <a href="#">Crab Pool Security</a>
                                            </h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">
                                    <i className="fa fa-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            <Footer/>

            {/* Js Plugins */}
        </>
    );
};

export default Shop;

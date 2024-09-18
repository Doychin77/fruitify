import React from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";

const BlogDetails = () => {
    return (
        <>
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
                {/* Blog Details Hero Begin */}
                <section
                    className="blog-details-hero set-bg"
                    style={{backgroundImage: "url('img/blog/details/details-hero.jpg')"}}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog__details__hero__text">
                                    <h2>The Moment You Need To Remove Garlic From The Menu</h2>
                                    <ul>
                                        <li>By Michael Scofield</li>
                                        <li>January 14, 2019</li>
                                        <li>8 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog Details Hero End */}
                {/* Blog Details Section Begin */}
                <section className="blog-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 order-md-1 order-2">
                                <div className="blog__sidebar">
                                    <div className="blog__sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <button type="submit">
                                                <span className="icon_search" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <h4>Categories</h4>
                                        <ul>
                                            <li>
                                                <a href="#">All</a>
                                            </li>
                                            <li>
                                                <a href="#">Beauty (20)</a>
                                            </li>
                                            <li>
                                                <a href="#">Food (5)</a>
                                            </li>
                                            <li>
                                                <a href="#">Life Style (9)</a>
                                            </li>
                                            <li>
                                                <a href="#">Travel (10)</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <h4>Recent News</h4>
                                        <div className="blog__sidebar__recent">
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-1.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>
                                                        09 Kinds Of Vegetables
                                                        <br /> Protect The Liver
                                                    </h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-2.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>
                                                        Tips You To Balance
                                                        <br /> Nutrition Meal Day
                                                    </h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-3.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>
                                                        4 Principles Help You Lose <br />
                                                        Weight With Vegetables
                                                    </h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <h4>Search By</h4>
                                        <div className="blog__sidebar__item__tags">
                                            <a href="#">Apple</a>
                                            <a href="#">Beauty</a>
                                            <a href="#">Vegetables</a>
                                            <a href="#">Fruit</a>
                                            <a href="#">Healthy Food</a>
                                            <a href="#">Lifestyle</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 order-md-1 order-1">
                                <div className="blog__details__text">
                                    <img src="img/blog/details/details-pic.jpg" alt="" />
                                    <p>
                                        Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                                        vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                        nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit,
                                        eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
                                        consectetur sed, convallis at tellus. Sed porttitor lectus nibh.
                                        Donec sollicitudin molestie malesuada. Curabitur non nulla sit
                                        amet nisl tempus convallis quis ac lectus. Proin eget tortor
                                        risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla
                                        sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin
                                        molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                    </p>
                                    <h3>
                                        The corner window forms a place within a place that is a resting
                                        point within the large space.
                                    </h3>
                                    <p>
                                        The study area is located at the back with a view of the vast
                                        nature. Together with the other buildings, a congruent story has
                                        been managed in which the whole has a reinforcing effect on the
                                        components. The use of materials seeks connection to the main
                                        house, the adjacent stables
                                    </p>
                                </div>
                                <div className="blog__details__content">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="blog__details__author">
                                                <div className="blog__details__author__pic">
                                                    <img src="img/blog/details/details-author.jpg" alt="" />
                                                </div>
                                                <div className="blog__details__author__text">
                                                    <h6>Michael Scofield</h6>
                                                    <span>Admin</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="blog__details__widget">
                                                <ul>
                                                    <li>
                                                        <span>Categories:</span> Food
                                                    </li>
                                                    <li>
                                                        <span>Tags:</span> All, Trending, Cooking, Healthy Food,
                                                        Life Style
                                                    </li>
                                                </ul>
                                                <div className="blog__details__social">
                                                    <a href="#">
                                                        <i className="fa fa-facebook" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-twitter" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-google-plus" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-linkedin" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-envelope" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog Details Section End */}
                {/* Related Blog Section Begin */}
                <section className="related-blog spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title related-blog-title">
                                    <h2>Post You May Like</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="img/blog/blog-1.jpg" alt="" />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li>
                                                <i className="fa fa-calendar-o" /> May 4,2019
                                            </li>
                                            <li>
                                                <i className="fa fa-comment-o" /> 5
                                            </li>
                                        </ul>
                                        <h5>
                                            <a href="#">Cooking tips make cooking simple</a>
                                        </h5>
                                        <p>
                                            Sed quia non numquam modi tempora indunt ut labore et dolore
                                            magnam aliquam quaerat{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="img/blog/blog-2.jpg" alt="" />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li>
                                                <i className="fa fa-calendar-o" /> May 4,2019
                                            </li>
                                            <li>
                                                <i className="fa fa-comment-o" /> 5
                                            </li>
                                        </ul>
                                        <h5>
                                            <a href="#">6 ways to prepare breakfast for 30</a>
                                        </h5>
                                        <p>
                                            Sed quia non numquam modi tempora indunt ut labore et dolore
                                            magnam aliquam quaerat{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="img/blog/blog-3.jpg" alt="" />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li>
                                                <i className="fa fa-calendar-o" /> May 4,2019
                                            </li>
                                            <li>
                                                <i className="fa fa-comment-o" /> 5
                                            </li>
                                        </ul>
                                        <h5>
                                            <a href="#">Visit the clean farm in the US</a>
                                        </h5>
                                        <p>
                                            Sed quia non numquam modi tempora indunt ut labore et dolore
                                            magnam aliquam quaerat{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Related Blog Section End */}

                <Footer/>

            </>

        </>



    );
};

export default BlogDetails;

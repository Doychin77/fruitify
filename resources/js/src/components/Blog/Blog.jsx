import React from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";
import {useBlogCategories} from "@/src/hooks/useCategories.js";
import useArticles from "@/src/hooks/useArticles.js";

const Blog = () => {
    const { blogCategories, error } = useBlogCategories();
    const { articles } = useArticles();

    console.log(articles);

    return (
        <>

        <Hamburger/>

        <Header/>
        {/* Hero Section Begin */}
        <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars"/>
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
                                        <span className="arrow_carrot-down"/>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?"/>
                                    <button type="submit" className="site-btn">
                                        SEARCH
                                    </button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"/>
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
                style={{backgroundImage: "url('img/breadcrumb.jpg')"}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Blog</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section End */
            }
            {/* Blog Section Begin */
            }
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <div className="blog__sidebar">
                                <div className="blog__sidebar__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search..."/>
                                        <button type="submit">
                                            <span className="icon_search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="blog__sidebar__item">
                                    <h4>Categories</h4>
                                    <ul>
                                        {blogCategories.map((category) => (
                                            <li key={category.id}>
                                                <a href="#">{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="blog__sidebar__item">
                                    <h4>Recent News</h4>
                                    <div className="blog__sidebar__recent">
                                        {articles.length > 0 ? (
                                            articles.map((article) => (
                                                <a
                                                    href="#"
                                                    className="blog__sidebar__recent__item"
                                                    key={article.id} // Use a unique key, such as article ID
                                                >
                                                    <div className="blog__sidebar__recent__item__pic">
                                                        <img
                                                            src={`http://fruitify.test/storage/${article.image}`}
                                                            alt={article.title || 'Article Image'}
                                                        />
                                                    </div>
                                                    <div className="blog__sidebar__recent__item__text">
                                                        <h6>
                                                            {article.title}
                                                        </h6>
                                                        <span>{new Date(article.created_at).toLocaleDateString()}</span> {/* Format the article date */}
                                                    </div>
                                                </a>
                                            ))
                                        ) : (
                                            <p>No recent news available.</p>
                                        )}
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
                        <div className="col-lg-8 col-md-7">
                            <div className="row">
                                {articles.map((article) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6" key={article.id}>
                                        <div className="blog__item">
                                            <div className="blog__item__pic">
                                                <img
                                                    src={`http://fruitify.test/storage/${article.image}`}
                                                    alt={article.title || 'Article Image'}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto'
                                                    }} // Ensures the image displays fully
                                                />
                                            </div>
                                            <div className="blog__item__text">
                                                <ul>
                                                    <li>
                                                        <i className="fa fa-calendar-o"/> {new Date(article.created_at).toLocaleDateString()}
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-comment-o"/> {'9' || 0}
                                                    </li>
                                                </ul>
                                                <h5>
                                                    <a href="#">{article.title}</a>
                                                </h5>
                                                <p>
                                                    {article.content.substring(0, 100)}... {/* Displaying a truncated version of the content */}
                                                </p>
                                                <a href="#" className="blog__btn">
                                                    READ MORE <span className="arrow_right"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Placeholder for empty spaces to maintain grid layout */}
                                {articles.length % 2 !== 0 && (
                                    <div className="col-lg-6 col-md-6 col-sm-6" style={{visibility: 'hidden'}}></div>
                                )}
                                <div className="col-lg-12">
                                    <div className="product__pagination blog__pagination">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">
                                            <i className="fa fa-long-arrow-right"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Section End */}

            <Footer/>
        </>
    );
};

export default Blog;

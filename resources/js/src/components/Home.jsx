import React, {useContext, useEffect, useRef, useState} from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";
import bannerImage from '../../../../public/img/hero/banner.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import useProducts from "@/src/hooks/useProducts.js";
import {CartContext} from "@/src/context/cartContext.jsx";
import ProductCarousel from "@/src/components/Products/LatestProducts.jsx";
import Spinner from "@/src/components/Spinner/Spinner.jsx";
import {Link} from "react-router-dom";
import {useCategories} from "@/src/hooks/useCategories.js";
import {getAllArticles} from "@/src/services/baseService.js";



const Home = () => {

    const BaseURL = 'http://fruitify.test/storage/'
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const randomArticles = shuffleArray([...articles]).slice(0, 3);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getAllArticles();
                setArticles(data);
            } catch (err) {
                setError('Failed to fetch articles');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('*');
    const { products, isLoading } = useProducts();
    const { categories } = useCategories();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        if (selectedCategory === '*') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product =>
                product.category_id && categories.find(cat => cat.id === product.category_id)?.name.toLowerCase() === selectedCategory
            );
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, products, categories]);


    const carouselOptions = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 1,
            }
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (

        <>
            <Hamburger/>

            <Header/>

            {/* Hero Section Begin */}
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"/>
                                    <span>All categories</span>
                                </div>
                                <ul>
                                    {categories.length > 0 && categories.map((category) => (
                                        <li key={category.id}>
                                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                                        </li>
                                    ))}
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
                                        <h5>0895454654</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item" style={{backgroundImage: `url(${bannerImage})`}}>
                                <div className="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>
                                        Vegetable <br/>
                                        100% Organic
                                    </h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="/shop" className="primary-btn">
                                        SHOP NOW
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}
            {/* Categories Section Begin */}
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            key={categories.length}
                            className='categories__slider owl-carousel'
                            loop
                            margin={10}
                            nav
                            smartSpeed={1000}
                            autoplaySpeed={1000}
                            autoplay
                            autoplayTimeout={3000}
                            autoplayHoverPause
                            responsive={{
                                0: {
                                    items: 1,
                                },
                                600: {
                                    items: 2,
                                },
                                1000: {
                                    items: 4,
                                }
                            }}
                        >
                            {categories.map((category) => (
                                <div key={category.id} className="item col-lg-3">
                                    <div
                                        className="categories__item set-bg"
                                        style={{backgroundImage: `url(${BaseURL}${category.img})`}}
                                    >
                                        <h5>
                                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}
            {/* Featured Section Begin */}
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Products</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li
                                        className={selectedCategory === '*' ? 'active' : ''}
                                        data-filter="*"
                                        onClick={() => setSelectedCategory('*')}
                                    >
                                        All
                                    </li>
                                    {categories.slice(0, 6).map(category => (
                                        <li
                                            key={category.id}
                                            className={selectedCategory === category.name.toLowerCase() ? 'active' : ''}
                                            data-filter={`.${category.name.toLowerCase()}`}
                                            onClick={() => setSelectedCategory(category.name.toLowerCase())}
                                        >
                                            {category.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {filteredProducts.map(product => (
                            <div key={product.id}
                                 className={`col-lg-3 col-md-4 col-sm-6 mix ${categories.find(cat => cat.id === product.category_id)?.name.toLowerCase() || ''}`}>
                                <div className="featured__item">
                                    <div className="featured__item__pic">
                                        {product.images && product.images.length > 0 && (
                                            <img src={`http://fruitify.test/storage/${product.images[0].image_url}`}
                                                 alt={product.name}/>
                                        )}
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li>
                                                <a href="#" onClick={(e) => {
                                                    e.preventDefault();
                                                    addToCart(product);
                                                }}>
                                                    <i className="fa fa-shopping-cart"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6>
                                            <Link to={`/product-details/${product.id}`}
                                                  className="plain-link">{product.name} </Link>
                                        </h6>
                                        <h5 style={{color: product.on_sale ? 'red' : 'inherit'}}>
                                            ${product.on_sale ? product.on_sale_price : product.price}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Featured Section End */}
            {/* Banner Begin */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/banner-1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/banner-2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}
            {/* Latest Product Section Begin */}
            <section className="latest-product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Latest Products</h4>
                                <ProductCarousel products={products} carouselOptions={carouselOptions}/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Top Rated Products</h4>
                                <ProductCarousel products={products} carouselOptions={carouselOptions}/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Review Products</h4>
                                <ProductCarousel products={products} carouselOptions={carouselOptions}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Product Section End */}
            <section className="from-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title from-blog__title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {randomArticles.map((article) => (
                            <div key={article.id} className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img
                                            src={`http://fruitify.test/storage/${article.image}`}
                                            alt={article.title}
                                        />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li>
                                                <i className="fa fa-calendar-o"/> {new Date(article.published_at).toLocaleDateString()}
                                            </li>
                                        </ul>
                                        <h5>
                                            <a href={`/blog/${article.id}`}>{article.title}</a>
                                        </h5>
                                        <p>
                                            {article.content.substring(0, 100)}...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>

    );
};

export default Home;

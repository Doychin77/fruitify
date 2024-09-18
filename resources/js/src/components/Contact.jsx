import React from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";


const Contact = () => {
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
                style={{backgroundImage: "url('img/breadcrumb.jpg')"}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Contact</h2>
                                <div className="breadcrumb__option">
                                    <a href="/">Home</a>
                                    <span>Contact</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Contact Section Begin */}
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_phone"/>
                                <h4>Phone</h4>
                                <p>0895654786</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_pin_alt" />
                                <h4>Address</h4>
                                <p>STARA ZAGORA</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_clock_alt" />
                                <h4>Open time</h4>
                                <p>10:00 am to 23:00 pm</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_mail_alt" />
                                <h4>Email</h4>
                                <p>hello@fruitify.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section End */}
            {/* Map Begin */}
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11779.67980751282!2d25.61738432195666!3d42.429438727147854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a869988f3f15e9%3A0x588e4f5b1e6af8d7!2z0KHRgtCw0YDQsCDQl9Cw0LPQvtGA0LAg0KbQtdC90YLRitGALCDQodGC0LDRgNCwINCX0LDQs9C-0YDQsA!5e0!3m2!1sbg!2sbg!4v1726576295416!5m2!1sbg!2sbg"
                    width="600" height="450"  allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="map-inside">
                    <i className="icon_pin"/>
                    <div className="inside-widget">
                        <h4>Stara Zagora</h4>
                        <ul>
                            <li>Phone: 0895654786</li>
                            <li>Stara Zagora, Center</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Map End */}
            {/* Contact Form Begin */}
            <div className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Leave Message</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your Email" />
                            </div>
                            <div className="col-lg-12 text-center">
                                <textarea placeholder="Your message" defaultValue={""} />
                                <button type="submit" className="site-btn">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Contact Form End */}

            <Footer/>

            {/* Js Plugins */}
        </>


    );
};

export default Contact;

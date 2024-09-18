import React from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";

const Checkout = () => {
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
                                <h2>Checkout</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Checkout Section Begin */}
            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6>
                                <span className="icon_tag_alt" /> Have a coupon?{" "}
                                <a href="#">Click here</a> to enter your code
                            </h6>
                        </div>
                    </div>
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Fist Name<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Last Name<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Country<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Address<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            className="checkout__input__add"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Apartment, suite, unite ect (optinal)"
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Town/City<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Country/State<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Postcode / ZIP<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Phone<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Email<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="acc">
                                            Create an account?
                                            <input type="checkbox" id="acc" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <p>
                                        Create an account by entering the information below. If you are
                                        a returning customer please login at the top of the page
                                    </p>
                                    <div className="checkout__input">
                                        <p>
                                            Account Password<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="diff-acc">
                                            Ship to a different address?
                                            <input type="checkbox" id="diff-acc" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Order notes<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">
                                            Products <span>Total</span>
                                        </div>
                                        <ul>
                                            <li>
                                                Vegetable’s Package <span>$75.99</span>
                                            </li>
                                            <li>
                                                Fresh Vegetable <span>$151.99</span>
                                            </li>
                                            <li>
                                                Organic Bananas <span>$53.99</span>
                                            </li>
                                        </ul>
                                        <div className="checkout__order__subtotal">
                                            Subtotal <span>$750.99</span>
                                        </div>
                                        <div className="checkout__order__total">
                                            Total <span>$750.99</span>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <button type="submit" className="site-btn">
                                            PLACE ORDER
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Checkout Section End */}

            <Footer/>

            {/* Js Plugins */}
        </>


    );
};

export default Checkout;

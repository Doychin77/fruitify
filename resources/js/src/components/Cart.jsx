import React, {useContext, useEffect, useState} from 'react';
import Footer from "@/src/components/Footer.jsx";
import Header from "@/src/components/Header.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";
import {CartContext} from "@/src/context/cartContext.jsx";

const Cart = () => {

    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
    const [items, setItems] = useState([]);

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };


    useEffect(() => {
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        } else {
            setItems(cartItems);
        }
    }, [cartItems]);

    console.log('Cart Items:', cartItems);

    const subtotal = cartItems.reduce((total, item) => {
        const price = item.on_sale ? parseFloat(item.on_sale_price) : parseFloat(item.price);

        const itemTotal = price * item.quantity;

        return total + itemTotal;
    }, 0);


    const formattedSubtotal = subtotal.toFixed(2);

    const total = subtotal;


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
                                <h2>Shopping Cart</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Shoping Cart Section Begin */}
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th />
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {items.map((item, index) => (

                                        <tr key={index}>
                                            <td className="shoping__cart__item">
                                                <img
                                                src={`http://fruitify.test/storage/${item.images ? item.images[0].image_url : 'default.jpg'}`}
                                                     alt={item.name}
                                                style={{ width: '100px', height: 'auto' }}/>
                                                <h5>{item.name}</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                ${item.on_sale ? item.on_sale_price : item.price}
                                            </td>
                                            <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" value={item.quantity || 1} readOnly/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                ${item.on_sale ? (item.on_sale_price * item.quantity).toFixed(2) : (item.price * item.quantity).toFixed(2)}
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close" onClick={() => handleRemove(item.id)}/>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="/shop" className="primary-btn cart-btn">
                                    CONTINUE SHOPPING
                                </a>
                                <a
                                    href="#"
                                    className="primary-btn cart-btn cart-btn-right"
                                    onClick={(e) => {
                                        clearCart();
                                    }}
                                >
                                    <i className="fa fa-trash"/>
                                    Clear Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                    <input type="text" placeholder="Enter your coupon code"/>
                                        <button type="submit" className="site-btn">
                                            APPLY COUPON
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>
                                        Subtotal <span>${formattedSubtotal}</span>
                                    </li>
                                    <li>
                                        Total <span>${formattedSubtotal}</span>
                                    </li>
                                </ul>
                                <a href="/checkout" className="primary-btn">
                                    PROCEED TO CHECKOUT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shoping Cart Section End */}
            {/* Footer Section Begin */}
            <Footer/>
            {/* Footer Section End */}
            {/* Js Plugins */}
        </>


    );
};

export default Cart;

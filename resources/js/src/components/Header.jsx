import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from "@/src/context/cartContext.jsx";
import CartDropdown from './CartDropdown'; // Ensure this path is correct

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const subtotal = cartItems.reduce((total, item) => {
        const price = item.on_sale ? parseFloat(item.on_sale_price) : parseFloat(item.price);
        const itemTotal = price * item.quantity;
        return total + itemTotal;
    }, 0);

    const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    const formattedTotalPrice = subtotal.toFixed(2);

    useEffect(() => {
        let timer;
        if (!isHovered && isDropdownOpen) {
            timer = setTimeout(() => {
                setDropdownOpen(false);
            }, 2000); // Close after 2 seconds
        }
        return () => clearTimeout(timer);
    }, [isHovered, isDropdownOpen]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li>
                                        <i className="fa fa-envelope" /> hello@fruitify.com
                                    </li>
                                    <li>Free Shipping for all Orders of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src="img/language.png" alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down" />
                                    <ul>
                                        <li>
                                            <a href="#">Spanish</a>
                                        </li>
                                        <li>
                                            <a href="#">English</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <a href="#">
                                        <i className="fa fa-user" /> Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="/">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className="active">
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/shop">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li>
                                            <a href="/shop-details">Shop Details</a>
                                        </li>
                                        <li>
                                            <a href="/cart">Shopping Cart</a>
                                        </li>
                                        <li>
                                            <a href="/checkout">Check Out</a>
                                        </li>
                                        <li>
                                            <a href="/blog-details">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li>
                                    <a href="">
                                        <i className="fa fa-heart" /> <span>1</span>
                                    </a>
                                </li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a href="#">
                                        <i className="fa fa-shopping-bag" /> <span>{totalQuantity}</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="header__cart__price">
                                <span>${formattedTotalPrice}</span>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <div
                                onMouseEnter={() => setIsHovered(true)} // Keep dropdown open on hover
                                onMouseLeave={handleMouseLeave}
                            >
                                <CartDropdown cartItems={cartItems} onClose={handleMouseLeave} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
        </header>
    );
};

export default Header;

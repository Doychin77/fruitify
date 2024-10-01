import React, {useContext, useState} from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";
import {CartContext} from "@/src/context/cartContext.jsx";
import {useNavigate} from "react-router-dom";

const Checkout = () => {

    const {cartItems, clearCart} = useContext(CartContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        country: '',
        address: '',
        city: '',
        state: '',
        postcode: '',
        phone: '',
        email: '',
        order_notes: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Calculate subtotal and total
    const subtotal = cartItems.reduce((total, item) => {
        const price = item.on_sale ? parseFloat(item.on_sale_price) : parseFloat(item.price);
        const itemTotal = price * item.quantity;
        return total + itemTotal;
    }, 0);
    const discountAmount = parseFloat(localStorage.getItem('discountAmount')) || 0;
    const totalAfterDiscount = parseFloat(localStorage.getItem('totalAfterDiscount')) || 0;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        // Use the cartItems directly from context
        const items = Array.isArray(cartItems) ? cartItems : []; // Ensure items is an array

        console.log(items);

        try {
            const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await fetch('http://fruitify.test/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': token,
                },
                body: JSON.stringify({
                    ...formData,
                    items, // Include items in the body
                    subtotal,
                    discount: discountAmount,
                    total: totalAfterDiscount,
                }),
                credentials: 'same-origin'
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess(data.message);
                // Clear form and cart on successful order
                setFormData({
                    first_name: '',
                    last_name: '',
                    country: '',
                    address: '',
                    city: '',
                    state: '',
                    postcode: '',
                    phone: '',
                    email: '',
                    order_notes: '',
                });

                clearCart();
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to place the order.');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

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
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter & Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya & Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                    <li><a href="#">Fresh Bananas</a></li>
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
                                        <button type="submit" className="site-btn">SEARCH</button>
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
            <section className="breadcrumb-section set-bg" style={{backgroundImage: "url('img/breadcrumb.jpg')"}}>
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
                            <h6><span className="icon_tag_alt"/> Have a coupon? <a href="/cart">Click here</a> to enter your code</h6>
                        </div>
                    </div>
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>First Name<span>*</span></p>
                                                <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text" name="country" value={formData.country} onChange={handleInputChange} required/>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Street Address" className="checkout__input__add" required/>
                                        <input type="text" placeholder="Apartment, suite, etc. (optional)"/>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text" name="city" value={formData.city} onChange={handleInputChange} required/>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text" name="state" value={formData.state} onChange={handleInputChange} required/>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} required/>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Order notes</p>
                                        <input type="text" name="order_notes" value={formData.order_notes} onChange={handleInputChange} placeholder="Notes about your order, e.g. special notes for delivery."/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">Products</div>
                                        <ul>
                                            {cartItems.map((item, index) => (
                                                <li key={index}>{item.name}
                                                    <span>${item.on_sale ? item.on_sale_price : item.price}</span></li>
                                            ))}
                                        </ul>
                                        <div
                                            className="checkout__order__subtotal">Subtotal <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        {discountAmount > 0 && (
                                            <div className="checkout__order__total">
                                                Discount <span>${discountAmount.toFixed(2)}</span>
                                            </div>
                                        )}

                                        <div
                                            className="checkout__order__total">Total <span>${totalAfterDiscount.toFixed(2)}</span>
                                        </div>
                                        <button type="submit" className="site-btn"
                                                disabled={loading}>{loading ? 'Placing Order...' : 'PLACE ORDER'}</button>
                                        {error && <p style={{color: 'red'}}>{error}</p>}
                                        {success && <p style={{color: 'green'}}>{success}</p>}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Checkout Section End */}

            <Footer/>
        </>
    );
};

export default Checkout;

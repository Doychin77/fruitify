import React, {useContext, useState, useEffect} from 'react';
import Header from "@/src/components/Header.jsx";
import Footer from "@/src/components/Footer.jsx";
import Hamburger from "@/src/components/Hamburger.jsx";
import {CartContext} from "@/src/context/cartContext.jsx";
import {useNavigate} from "react-router-dom";


import deliveryIcon from "../assets/bus-icon.png";
import econtIcon from "../assets/econt-icon.png";
import useDebounce from "@/src/hooks/useDebounce.jsx";

import econtService from "@/src/services/econtService.js";


const Checkout = () => {
    const [deliveryType, setDeliveryType] = useState("econt_office");
    const [cities, setCities] = useState([]);
    const [streets, setStreets] = useState([]);
    const [offices, setOffices] = useState([]);

    const {cartItems, clearCart} = useContext(CartContext);
    const navigate = useNavigate();
    const [isOfficeDropdownOpen, setOfficeDropdownOpen] = useState(false);
    const [isStreetDropdownOpen, setStreetDropdownOpen] = useState(false);

    const [formData, setFormData] = useState({
        buyer_name: '',
        buyer_email: '',
        buyer_phone: '',
        order_info: '',
        econt_city: "",
        econt_street: "",
        econt_street_number: "",
        econt_street_id: "",
        econt_city_id: "",
        econt_office_id: "",
        econt_office: "",
        delivery_type: deliveryType,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Debounced values for inputs
    const econtCity = useDebounce(formData.econt_city, 500);
    const econtStreet = useDebounce(formData.econt_street, 500);
    const econtOffice = useDebounce(formData.econt_office, 500);

    // Calculate subtotal and total
    const subtotal = cartItems.reduce((total, item) => {
        const price = item.on_sale ? parseFloat(item.on_sale_price) : parseFloat(item.price);
        const itemTotal = price * item.quantity;
        return total + itemTotal;
    }, 0);
    const discountAmount = parseFloat(localStorage.getItem('discountAmount')) || 0;
    const totalAfterDiscount = parseFloat(localStorage.getItem('totalAfterDiscount')) || 0;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
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

        console.log(formData);

        const items = Array.isArray(cartItems) ? cartItems : [];

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
                    items,
                    subtotal,
                    discount: discountAmount,
                    total: totalAfterDiscount,
                }),
                credentials: 'same-origin'
            });

            console.log('Response:', response);

            if (response.ok) {
                const data = await response.json();
                setSuccess(data.message);
                setFormData({
                    buyer_name: '',
                    buyer_email: '',
                    buyer_phone: '',
                    order_info: '',
                    econt_city: "",
                    econt_street: "",
                    econt_street_number: "",
                    econt_street_id: "",
                    econt_city_id: "",
                    econt_office_id: "",
                    econt_office: "",
                    delivery_type: deliveryType,
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

    const handleDeliveryType = (type) => {
        setDeliveryType(type);
        setFormData((prevFormData) => ({
            ...prevFormData,
            delivery_type: type,
        }));
    };

    // Get cities
    useEffect(() => {
        if (econtCity) {
            getCities();
            if (deliveryType === "econt_office" && formData.econt_city_id) {
                getOffices();
            }
        }
    }, [econtCity]);

    // Get streets based on city selection
    useEffect(() => {
        if (formData.econt_city_id) {
            getStreets();
        }
    }, [formData.econt_city_id]);

    // Get offices based on street selection
    useEffect(() => {
        if (deliveryType === "econt_office" && formData.econt_city_id) {
            getOffices();
        }
    }, [econtOffice]);

    const getCities = () => {
        econtService
            .getCities(econtCity)
            .then((res) => {
                setCities(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const getStreets = () => {
        econtService
            .getStreets(formData.econt_city_id, econtStreet)
            .then((res) => {
                setStreets(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleEcontStates = (updates) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...updates,
        }));
        if (updates.econt_office_id) {
            setOfficeDropdownOpen(false);
        }

        if (updates.econt_street_id) {
            setStreetDropdownOpen(false);
        }
    };

    const getOffices = () => {
        econtService
            .getOffices(formData.econt_city_id, econtOffice)
            .then((res) => {
                setOffices(res);
            })
            .catch((error) => {
                console.log(error);
            });
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
                                        <input type="text" placeholder="What do you need?"/>
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
                            <h6><span className="icon_tag_alt"/> Have a coupon? <a href="#">Click here to enter your
                                code</a></h6>
                        </div>
                    </div>
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="checkout__input">
                                                <p>Name<span>*</span></p>
                                                <input type="text" name="buyer_name" value={formData.buyer_name}
                                                       onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="email" name="buyer_email" value={formData.buyer_email}
                                                       onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input type="text" name="buyer_phone" value={formData.buyer_phone}
                                               onChange={handleInputChange}/>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Order Info<span>*</span></p>
                                        <input type="text" name="order_info" value={formData.order_info}
                                               onChange={handleInputChange}/>
                                    </div>

                                    {/* Econt Delivery Options */}
                                    <div className="checkout__input">
                                        <p>Delivery Type<span>*</span></p>
                                        <div
                                            className={`type_item ${deliveryType === "econt_office" ? "checked" : ""}`}
                                            style={{display: 'inline-block', width: '48%', cursor: 'pointer'}}
                                            onClick={() => handleDeliveryType("econt_office")}
                                        >
                                            <img src={econtIcon} alt="" style={{maxWidth: '50%', height: 'auto'}}/>
                                            <p>Econt Office</p>
                                        </div>
                                        <div
                                            className={`type_item ${deliveryType === "courier" ? "checked" : ""}`}
                                            style={{display: 'inline-block', width: '48%', cursor: 'pointer'}}
                                            onClick={() => handleDeliveryType("courier")}
                                        >
                                            <img src={deliveryIcon} alt="" style={{maxWidth: '50%', height: 'auto'}}/>
                                            <p>Courier</p>
                                        </div>
                                    </div>

                                    {/* City Selection */}
                                    <div className="checkout__input">
                                        <p>City<span>*</span></p>
                                        <input
                                            type="text"
                                            name="econt_city"
                                            value={formData.econt_city}
                                            onChange={handleInputChange}
                                        />
                                        {cities.length > 0 && (
                                            <ul className="scrollable-list">
                                                {cities.map(city => (
                                                    <li
                                                        key={city.econt_city_id}
                                                        onClick={() =>
                                                            handleEcontStates({
                                                                econt_city: city.name,
                                                                econt_city_id: city.econt_city_id,
                                                            })
                                                        }
                                                    >
                                                        {city.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* Conditional Rendering */}
                                    {deliveryType === "econt_office" && (
                                        <>
                                            {/* Econt Office Selection */}
                                            <div className="checkout__input">
                                                <p>Econt Office<span>*</span></p>
                                                <input
                                                    type="text"
                                                    name="econt_office"
                                                    value={formData.econt_office}
                                                    onChange={handleInputChange}
                                                    onFocus={() => setOfficeDropdownOpen(true)} // Open dropdown on focus
                                                />
                                                {isOfficeDropdownOpen && offices.length > 0 && (
                                                    <ul className="scrollable-list">
                                                        {offices.map(office => (
                                                            <li
                                                                key={office.econt_office_id}
                                                                onClick={() =>
                                                                    handleEcontStates({
                                                                        econt_office_id: office.econt_office_id,
                                                                        econt_office: office.name,
                                                                    })
                                                                }
                                                            >
                                                                {office.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </>
                                    )}

                                    {deliveryType === "courier" && (
                                        <>
                                            {/* Street Selection */}
                                            <div className="checkout__input">
                                                <p>Street<span>*</span></p>
                                                <input
                                                    type="text"
                                                    name="econt_street"
                                                    value={formData.econt_street}
                                                    onChange={handleInputChange}
                                                    onFocus={() => setStreetDropdownOpen(true)} // Open dropdown on focus
                                                />
                                                {isStreetDropdownOpen && streets.length > 0 && ( // Ensure to check isStreetDropdownOpen
                                                    <ul className="scrollable-list">
                                                        {streets.map(street => (
                                                            <li
                                                                key={street.econt_street_id}
                                                                onClick={() => {
                                                                    handleEcontStates({
                                                                        econt_street_id: street.econt_street_id,
                                                                        econt_street: street.name,
                                                                    });
                                                                    setStreetDropdownOpen(false); // Close the dropdown here
                                                                }}
                                                            >
                                                                {street.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>

                                            {/* Street Number */}
                                            <div className="checkout__input">
                                                <p>Street Number<span>*</span></p>
                                                <input
                                                    type="text"
                                                    name="econt_street_number"
                                                    value={formData.econt_street_number}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter street number"
                                                />
                                            </div>
                                        </>
                                    )}

                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">
                                            <ul>
                                                {cartItems.map((item, index) => (
                                                    <li key={index}>{item.name} <span>${item.price}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="checkout__order__subtotal">
                                            <h5>Subtotal <span>${subtotal.toFixed(2)}</span></h5>
                                        </div>
                                        <div className="checkout__order__total">
                                            <h5>Discount <span>${discountAmount.toFixed(2)}</span></h5>
                                        </div>
                                        <div className="checkout__order__total">
                                            <h5>Total <span>${totalAfterDiscount.toFixed(2)}</span></h5>
                                        </div>
                                        <button type="submit" className="site-btn" disabled={loading}
                                                onClick={handleSubmit}>
                                            {loading ? 'Processing...' : 'Place Order'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                </div>
            </section>
            {/* Checkout Section End */}

            <Footer/>
        </>
    );
};

export default Checkout;

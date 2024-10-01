import React, {useContext} from 'react';
import {CartContext} from "@/src/context/cartContext.jsx";

const CartDropdown = ({ cartItems, onClose }) => {
    const { removeFromCart } = useContext(CartContext);
    const subtotal = cartItems.reduce((total, item) => {
        const price = item.on_sale ? parseFloat(item.on_sale_price) : parseFloat(item.price);
        const itemTotal = price * item.quantity;
        return total + itemTotal;
    }, 0);

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const formattedTotalPrice = subtotal.toFixed(2);

    return (
        <div className="cart-dropdown">
            {cartItems.length > 0 ? (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <img className="cart-item-image"
                                    src={`http://fruitify.test/storage/${item.images ? item.images[0].image_url : 'default.jpg'}`}
                                    alt={item.name}
                                />
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>${item.on_sale ? item.on_sale_price : item.price} x {item.quantity}</p>
                                </div>
                                <span className="icon_close" style={{fontSize: '24px', padding: '10px'}}
                                      onClick={() => handleRemove(item.id)}/>
                            </li>
                        ))}
                    </ul>
                    <div className="subtotal">
                        <h5>Subtotal: ${formattedTotalPrice}</h5>
                    </div>
                    <div className="button-container">
                        <a href="/cart" className="primary-btn-cart-view">View Cart</a>
                    </div>
                </>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>

    );
};

export default CartDropdown;

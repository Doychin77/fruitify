import React from 'react';
import { Link } from 'react-router-dom';
// import './ThankYouPage.css';

const ThankYouPage = () => {
    return (
        <div className="thank-you-container">
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been successfully placed. We appreciate your business!</p>
            <p>If you have any questions, feel free to contact our support team.</p>
            <Link to="/" className="btn-home">Return to Home</Link>
        </div>
    );
};

export default ThankYouPage;

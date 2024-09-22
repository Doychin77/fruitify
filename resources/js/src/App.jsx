import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Shop from './components/Shop/Shop.jsx';
import Cart from './components/Cart.jsx';
import Blog from './components/Blog/Blog.jsx';
import Checkout from './components/Checkout.jsx';
import BlogDetails from './components/Blog/BlogDetails.jsx';
import ProductDetails from './components/Products/ProductDetails.jsx';
import { CartProvider } from '@/src/context/cartContext.jsx';
import Register from "@/src/components/Register.jsx";

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product-details/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-details" element={<BlogDetails />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;

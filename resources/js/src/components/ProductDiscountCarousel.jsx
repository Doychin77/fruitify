import React from 'react';
import Slider from 'react-slick';

// Sample product data
const products = [
    { img: 'img/product/discount/pd-1.jpg', percent: '-20%', category: 'Dried Fruit', name: 'Raisin’n’nuts', price: '$30.00', originalPrice: '$36.00' },
    { img: 'img/product/discount/pd-2.jpg', percent: '-20%', category: 'Vegetables', name: 'Vegetables’package', price: '$30.00', originalPrice: '$36.00' },
    { img: 'img/product/discount/pd-3.jpg', percent: '-20%', category: 'Dried Fruit', name: 'Mixed Fruitss', price: '$30.00', originalPrice: '$36.00' },
    { img: 'img/product/discount/pd-4.jpg', percent: '-20%', category: 'Dried Fruit', name: 'Raisin’n’nuts', price: '$30.00', originalPrice: '$36.00' },
    { img: 'img/product/discount/pd-5.jpg', percent: '-20%', category: 'Dried Fruit', name: 'Raisin’n’nuts', price: '$30.00', originalPrice: '$36.00' },
    { img: 'img/product/discount/pd-6.jpg', percent: '-20%', category: 'Dried Fruit', name: 'Raisin’n’nuts', price: '$30.00', originalPrice: '$36.00' }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

const ProductDiscountCarousel = () => {
    return (
        <div className="product__discount">
            <div className="section-title product__discount__title">
                <h2>Sale Off</h2>
            </div>
            <div className="product__discount__slider">
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <div key={index} className="product__discount__item">
                            <div className="product__discount__item__pic set-bg" style={{ backgroundImage: `url(${product.img})` }}>
                                <div className="product__discount__percent">{product.percent}</div>
                                <ul className="product__item__pic__hover">
                                    <li>
                                        <a href="#"><i className="fa fa-heart" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-retweet" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-shopping-cart" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product__discount__item__text">
                                <span>{product.category}</span>
                                <h5><a href="#">{product.name}</a></h5>
                                <div className="product__item__price">
                                    {product.price} <span>{product.originalPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductDiscountCarousel;

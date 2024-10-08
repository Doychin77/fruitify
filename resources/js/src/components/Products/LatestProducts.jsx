import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";

const LatestProducts = ({ products, carouselOptions }) => {
    const groupProducts = (products, itemsPerGroup) => {
        const groups = [];
        for (let i = 0; i < products.length; i += itemsPerGroup) {
            groups.push(products.slice(i, i + itemsPerGroup));
        }
        return groups;
    };

    // Slice the last 6 products
    const lastSixProducts = products.slice(-6);
    const groupedProducts = groupProducts(lastSixProducts, 3);

    return (
        <OwlCarousel
            key={lastSixProducts.map(product => product.id).join('-')}
            className='latest-product__slider owl-carousel'
            loop={true} // Enable looping
            items={1} // Adjust according to your needs
            {...carouselOptions}
        >
            {groupedProducts.map((group, groupIndex) => (
                <div key={groupIndex} className="latest-product__slider__item">
                    {group.map((product, index) => (
                        <a href="#" key={index} className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img
                                    src={`http://fruitify.test/storage/${product.images && product.images.length > 0 ? product.images[0].image_url : 'default.jpg'}`}
                                    alt={product.name}
                                />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>
                                    <Link to={`/product-details/${product.id}`} className="plain-link">{product.name}</Link>
                                </h6>
                                <h5 style={{ color: product.on_sale ? 'red' : 'black', fontWeight: "bold" }}>
                                    ${product.on_sale ? product.on_sale_price : product.price}
                                </h5>
                            </div>
                        </a>
                    ))}
                </div>
            ))}
        </OwlCarousel>
    );
};

export default LatestProducts;

import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const ProductCarousel = ({ products, carouselOptions }) => {
    // Group products into sets of three
    const groupProducts = (products, itemsPerGroup) => {
        const groups = [];
        for (let i = 0; i < products.length; i += itemsPerGroup) {
            groups.push(products.slice(i, i + itemsPerGroup));
        }
        return groups;
    };

    const groupedProducts = groupProducts(products, 3);

    return (
        <OwlCarousel
            key={products.map(product => product.id).join('-')}
            className='latest-product__slider owl-carousel'
            {...carouselOptions}
        >
            {groupedProducts.map((group, groupIndex) => (
                <div key={groupIndex} className="latest-prdouct__slider__item">
                    {group.map((product, index) => (
                        <a href="#" key={index} className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img
                                    src={`http://fruitify.test/storage/${product.images && product.images.length > 0 ? product.images[0].image_url : 'default.jpg'}`}
                                    alt={product.name}
                                />
                            </div>
                            <div className="latest-product__item__text">
                                <h6>{product.name}</h6>
                                <span>${product.price}</span>
                            </div>
                        </a>
                    ))}
                </div>
            ))}
        </OwlCarousel>
    );
};

export default ProductCarousel;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import 'swiper/css';

const LatestProducts = ({ products, swiperOptions }) => {
    const groupProducts = (products, itemsPerGroup) => {
        const groups = [];
        for (let i = 0; i < products.length; i += itemsPerGroup) {
            groups.push(products.slice(i, i + itemsPerGroup));
        }
        return groups;
    };

    
    const lastSixProducts = products.slice(-6);
    const groupedProducts = groupProducts(lastSixProducts, 3);

    return (
        <Swiper
            key={lastSixProducts.map(product => product.id).join('-')}
            className='latest-product__slider'
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed={1200}
            {...swiperOptions}
        >
            {groupedProducts.map((group, groupIndex) => (
                <SwiperSlide key={groupIndex} className="latest-product__slider__item">
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
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default LatestProducts;

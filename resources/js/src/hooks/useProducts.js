import { useState, useEffect } from 'react';
import { getProducts, getSingleProduct } from '../services/baseService';

const useProducts = (id, categoryId) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                setError('Error fetching products');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const productData = await getSingleProduct(id);
                    setProduct(productData);
                } catch (error) {
                    setError('Product not found');
                }
            };

            fetchProduct();
        }
    }, [id]);

    const onSaleProducts = products.filter(product => product.on_sale);

    const categoryProducts = products.filter(product => product.category_id === parseInt(categoryId));

    const getRelatedProducts = (currentProductId) => {
        return products
            .filter(product => product.id !== currentProductId)
            .slice(0, 4);
    };

    return { products, product, onSaleProducts, categoryProducts, error, isLoading, getRelatedProducts };
};

export default useProducts;

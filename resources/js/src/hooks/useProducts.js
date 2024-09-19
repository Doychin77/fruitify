import { useState, useEffect } from 'react';
import { getProducts } from '../services/baseService';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log('Fetched products:', data);
                setProducts(data);
            } catch (error) {
                console.error('There was an error fetching products:', error);
                setError('Error fetching products');
            } finally {
                setIsLoading(false); // Ensure loading is turned off in both success and error cases
            }
        };

        fetchProducts();
    }, []);

    const onSaleProducts = products.filter(product => product.on_sale);

    return { products, onSaleProducts, error, isLoading };
};

export default useProducts;

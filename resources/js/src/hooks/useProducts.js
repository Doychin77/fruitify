
import { useState, useEffect } from 'react';
import { getProducts } from '../services/baseService';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log('Fetched products:', data);
                setProducts(data);
            } catch (error) {
                console.error('There was an error fetching products:', error);
                setError('Error fetching products');
            }
        };

        fetchProducts();
    }, []);

    return { products, error };
};

export default useProducts;

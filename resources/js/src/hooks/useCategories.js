
import { useState, useEffect } from 'react';
import { getCategories } from '../services/baseService';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                console.log('Fetched categories:', data);
                setCategories(data);
            } catch (error) {
                console.error('There was an error fetching categories:', error);
                setError('Error fetching categories');
            }
        };

        fetchCategories();
    }, []);

    return { categories, error };
};

export default useCategories;

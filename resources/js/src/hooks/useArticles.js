import { useState, useEffect } from 'react';
import { getAllArticles } from '../services/baseService'; // Ensure this path is correct

const useArticles = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getAllArticles(); // Call the function to fetch all articles
                setArticles(data);
            } catch (error) {
                console.error('There was an error fetching articles:', error);
                setError('Error fetching articles');
            }
        };

        fetchArticles();
    }, []);

    return { articles, error };
};

export default useArticles;

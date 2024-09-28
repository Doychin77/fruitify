const baseUrl = 'http://fruitify.test';

export const getCategories = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/categories`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('GET request failed', error);
        throw error;
    }
};

export const getBlogCategories = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/blog-categories`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('GET request failed', error);
        throw error;
    }
};


export const getProducts = async () => {
    try {
        const response = await fetch(`${baseUrl}/products`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('GET request failed', error);
        throw error;
    }
};

export const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/product/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const productData = await response.json();

        return productData;
    } catch (error) {
        throw error;
    }
};




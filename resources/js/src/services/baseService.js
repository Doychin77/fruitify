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

export const getAllArticles = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/articles`);
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

export const getCsrfToken = () => {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
};

export const calculateDelivery = async (data) => {
    const csrfToken = getCsrfToken();
    try {
        const response = await fetch(`${baseUrl}/order/delivery_type`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
};




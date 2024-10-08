// src/context/UserContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            // Optionally, you can fetch user data here if needed
            // setUser(userData); // Set user data after fetching it
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        // Optionally, you can fetch user data here if needed
        // setUser(userData); // Set user data after fetching it
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null); // Clear user data
    };

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);

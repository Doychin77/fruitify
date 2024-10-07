import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.name) formErrors.name = "Name is required.";
        if (!formData.email) formErrors.email = "Email is required.";
        if (!formData.password) formErrors.password = "Password is required.";
        if (formData.password !== formData.password_confirmation) {
            formErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Password:', formData.password);
            console.log('Confirm Password:', formData.password_confirmation);
            try {
                const response = await axios.post('http://fruitify.test/register', formData);
                console.log('Registration response:', response.data);
                setSuccess(true);
                setErrorMessage('');
                navigate('/login');
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                });
            } catch (error) {
                if (error.response && error.response.data.errors) {
                    console.error('Registration errors:', error.response.data.errors);
                    setErrorMessage(Object.values(error.response.data.errors).flat().join(', '));
                } else {
                    console.error('Registration error:', error.response.data);
                    setErrorMessage(error.response.data.message || 'Registration failed. Please try again.');
                }
                setSuccess(false);
            }
        } else {
            setSuccess(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {success && <p className="success-message">Registration successful!</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                    />
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;

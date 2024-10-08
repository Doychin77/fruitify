import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://fruitify.test/login', {
                email,
                password,
            });

            const { token } = response.data;

            localStorage.setItem('token', token);

            console.log('Login successful');
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Invalid email or password');
        }
    };

    return (
        <div className={styles['login-wrapper']}>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className={styles['input-box']}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className={styles['input-box']}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    {error && <p className={styles['error-message']}>{error}</p>}
                    <div className={styles['remember-forgot']}>
                        <label><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" className={styles.btn}>Login</button>
                    <div className={styles['register-link']}>
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;

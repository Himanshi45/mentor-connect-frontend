import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignIn.css';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const role = (location.state as { role?: string })?.role || 'User';

    // Corrected to use 'email' instead of 'username'
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your authentication logic here
        // Example: Check if credentials are correct, if yes, redirect to dashboard
        if (email === 'user@example.com' && password === 'password') { // Replace with your real authentication logic
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="signin-wrapper">
            <div className="signin-left">
                <img
                    src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
                    alt="Sign In Illustration"
                    className="signin-image"
                />
            </div>

            <div className="signin-container">
                <form onSubmit={handleSubmit} className="signin-form">
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="password-options">
                                <label className="show-password">
                                    <input
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                    />
                                    Show password
                                </label>
                                <p className="forgot-password-link">
                                    <a href="/forgot-password">Forgot password?</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="signin-button"
                    >
                        Sign in →
                    </button>
                </form>

                <p className="signup-link">
                    Don’t have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;

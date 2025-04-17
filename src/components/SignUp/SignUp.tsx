import React, { useState } from 'react';
import './SignUp.css';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Sign-up submitted:', { email, password });
    };

    return (
        <div className="signin-wrapper">
            <div className="signin-left">
                <img
                    src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7961.jpg"
                    alt="Sign Up"
                    className="signin-image"
                />
            </div>
            <div className="signin-container">
                <form onSubmit={handleSubmit} className="signin-form">
                    <h2 className="signin-title">Create Account</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="signin-button">Sign Up</button>
                    <p className="signup-link">
                        Already have an account? <a href="/signin">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

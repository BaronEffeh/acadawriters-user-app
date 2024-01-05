import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const history = useHistory();

    const users = [
        // Mock user data for demonstration
        { email: 'user@example.com', password: 'Password123', firstName: 'John' },
        // Add more user data as needed
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        // Implement the logic to check the user's credentials
        const user = users.find((u) => u.email === formData.email && u.password === formData.password);

        if (user) {
            // Successfully signed in
            setSuccessMessage(`Sign in successful, ${user.firstName}!`);

            // Redirect to the Dashboard page
            history.push('/dashboard');
        } else {
            // Display an error if credentials are incorrect
            setErrors({ email: 'Invalid email or password', password: 'Invalid email or password' });
        }
    };

    const handleForgotPassword = () => {
        // Direct the user to the ResetPassword page
        history.push('/reset-password');
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            <form onSubmit={handleSignIn}>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} /> <br />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </label>
                <br />

                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} /> <br />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </label>
                <br />

                <button type="submit">Sign In</button>
            </form>

            {/* Add a link to the ResetPassword component */}
            <p>
                <Link to="/reset-password" onClick={handleForgotPassword}>
                    Reset Password
                </Link>
            </p>
        </div>
    );
};

export default SignIn;

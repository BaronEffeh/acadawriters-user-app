import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear the specific error when the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#?])[A-Za-z\d!@#?]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone Number is required';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
            newErrors.password =
                'Password must have a minimum of 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.';
        }

        // If there are errors, setErrors and prevent form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Form data is valid, proceed with submission
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div>
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                </label>
                <br />

                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
                </label>
                <br />

                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </label>
                <br />

                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
                </label>
                <br />

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </label>
                <br />

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/sign-in">Sign in</Link> </p>
        </div>
    );
};

export default SignUp;


import React, { useState } from 'react';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();

        // Check if the passwords match
        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords don't match. Please enter matching passwords.");
            return;
        }

        // Add logic for resetting the password (e.g., send request to server)
        // For demonstration, let's assume the password is reset successfully
        setSuccessMessage('Password reset successful. You can now sign in with your new password.');
    };

    return (
        <div>
            <h1>Reset Password</h1>
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <form onSubmit={handleResetPassword}>
                <label>
                    New Password:
                    <input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;

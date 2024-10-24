import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const ResetPasswordForm = ({ signInLink, buttonLink }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null);

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const email = emailRef.current.value.trim();

            if (email) {
                // Simulate sending reset password request
                await new Promise(resolve => setTimeout(resolve, 1000));

                navigate(buttonLink);
         
            } else {
                notify("Please enter your email address.", 'error', 2000);
            }
        } catch (error) {
            console.error('Error:', error);
         
        } finally {
            setLoading(false);
        }
    }, [navigate, buttonLink]);

    return (
        <form onSubmit={onSubmit}>
            <input
                type="email"
                placeholder="Enter your email"
                ref={emailRef}
                disabled={loading}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
        </form>
    );
};

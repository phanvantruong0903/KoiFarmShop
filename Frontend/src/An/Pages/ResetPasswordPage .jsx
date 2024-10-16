import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axiosInstance from '../Utils/axiosJS';

export const ResetPasswordModal = ({ show, handleClose, signInLink }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1); // Step 1 = Email input, Step 2 = Password reset
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [isWaiting, setIsWaiting] = useState(false); // cais nay dung de cho cai spinner tam thoi de v
    const [forgotPasswordToken, setForgotPasswordToken] = useState(null);
    // Handle first step: Sending forgot password email
    const handleEmailSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const email = emailRef.current.value.trim();
            if (email) {
                setIsWaiting(true);
                const response = await axiosInstance.post('/users/forgot-password', { 'email' : email });
                alert('Reset link has been sent to your email.');
                
            
            } else {
                alert("Please enter your email address.");
            }
        } catch (error) {
            console.error('Error sending reset email:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('forgot_password_secrect_token');
        console.log('secrect token is'+token);

        if (token) {
            console.log('secrect token is'+token);
            setForgotPasswordToken(token);
            setLoading(true);
            axiosInstance.get('/users/verify-forgot-password', { params: { forgot_password_token: token } })
                .then((rep) => {
                    console.log(rep);
                    setStep(2); 
                    localStorage.removeItem('forgot_password_secrect_token');
                })
                .catch(error => {
                    alert('Invalid or expired reset token.');
                    console.error('Token verification error:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    
    const handlePasswordSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const password = passwordRef.current.value.trim();
            const confirmPassword = confirmPasswordRef.current.value.trim();
            console.log(forgotPasswordToken);
            if (password && confirmPassword) {
                if (password === confirmPassword) {
                    await axiosInstance.post(`/users/reset-password?forgot_password_token=${forgotPasswordToken}`, {
                        'password':password,
                        'confirm_password': confirmPassword,
                        
                    });
                    alert("Password reset successfully!");
                    handleClose(); 
                    localStorage.removeItem('forgot_password_secrect_token');
                    setStep(1);
                    navigate(signInLink);
                } else {
                    alert("Passwords do not match.");
                }
            } else {
                alert("Please enter both password fields.");
            }
        } catch (error) {
            console.error('Error resetting password:', error.data);
        } finally {
            setLoading(false);
        }
    }, [forgotPasswordToken, navigate, signInLink, handleClose]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{step === 1 ? 'Reset Password' : 'Set New Password'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {step === 1 ? (
                    <div>
                        <p>Please enter the email address that you used to register, and we will send you a link to reset your password via email.</p>
                        <Form onSubmit={handleEmailSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    ref={emailRef}
                                    disabled={loading}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="mt-3"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Reset Link'}
                            </Button>
                        </Form>
                    </div>
                ) : (
                    <div>
                        <p>Enter your new password and confirm it below:</p>
                        <Form onSubmit={handlePasswordSubmit}>
                            <Form.Group controlId="formNewPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter new password"
                                    ref={passwordRef}
                                    disabled={loading}
                                />
                            </Form.Group>
                            <Form.Group controlId="formConfirmPassword" className="mt-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm new password"
                                    ref={confirmPasswordRef}
                                    disabled={loading}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="mt-3"
                                disabled={loading}
                            >
                                {loading ? 'Resetting...' : 'Reset Password'}
                            </Button>
                        </Form>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

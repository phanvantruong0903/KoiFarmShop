import React, { useCallback, useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const ResetPasswordModal = ({ show, handleClose, signInLink, buttonLink }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleEmailSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const email = emailRef.current.value.trim();

            if (email) {
                
                await new Promise(resolve => setTimeout(resolve, 1000));

              
                setStep(2);
            } else {
                alert("Please enter your email address.");
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const handlePasswordSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const password = passwordRef.current.value.trim();
            const confirmPassword = confirmPasswordRef.current.value.trim();

            if (password && confirmPassword) {
                if (password === confirmPassword) {
                  
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    alert("Password reset successfully!");
                    // navigate(signInLink); nếu thành thì đi đến gì đó later
                    handleClose(); 
                } else {
                    alert("Passwords do not match.");
                }
            } else {
                alert("Please enter both password fields.");
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }, [navigate, signInLink, handleClose]);

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

// src/components/Auth/Signup.jsx
import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-heading">Sign Up</h2>
                {error && <p className="error-message">{error}</p>}
                <form on Submit={handleSubmit} className="signup-form">
                    <label>Email</label>
                    <input type="email" ref={emailRef} required />

                    <label>Password</label>
                    <input type="password" ref={passwordRef} required />

                    <label>Password Confirmation</label>
                    <input type="password" ref={passwordConfirmRef} required />

                    <button className="signup-button" disabled={loading} type="submit">
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
                <p className="login-link">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
}
// src/component/Auth/Login.jsx
import React, {useRef, useState} from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, googleLogin } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    }
    
    async function handleGoogleLogin() {
        try {
            setError("");
            setLoading(true);
            await googleLogin();
            navigate("/");
        } catch (error) {
            console.error("Google Login error:", error);
            setError("Failed to log in with Google");
        }
        setLoading(false);
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-heading">Log In</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Email</label>
                    <input type="email" ref={emailRef} required />

                    <label>Password</label>
                    <input type="password" ref={passwordRef} required />

                    <button className="login-button" disabled={loading} type="submit">
                        {loading ? "Logging In..." : "Log In"}
                    </button>

                    <button className="google-login-button" onClick={handleGoogleLogin} disabled={loading}>
                        Log In with Google
                    </button>
                </form>
                <p className="signup-link">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
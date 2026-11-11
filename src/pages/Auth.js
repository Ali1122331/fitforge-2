
import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email.includes("@") || password.length < 6) {
      setError("Please enter a valid email and password (minimum 6 characters).");
      return;
    }

    if (!isLogin && name.trim() === "") {
      setError("Please enter your full name.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setMessage(
      "Form validated successfully! Account features will be available in Phase 2."
    );
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setMessage("");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>

        <p>Start your fitness journey with FitForge.</p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          )}

          {error && <p className="auth-error">{error}</p>}

          {message && (
            <p className="auth-success">{message}</p>
          )}

          <button type="submit" className="primary-btn">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button type="button" onClick={switchForm}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

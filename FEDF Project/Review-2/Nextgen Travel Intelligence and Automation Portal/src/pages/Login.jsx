import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const [error, setError] = useState("");

  // 🔐 Generate CAPTCHA
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newCaptcha = "";
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // ✅ LOGIN
  const handleLogin = () => {
    setError("");

    if (!email || !password || !userCaptcha) {
      setError("All fields are required");
      return;
    }

    if (userCaptcha !== captcha) {
      setError("Invalid CAPTCHA ❌");
      generateCaptcha();
      setUserCaptcha("");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please sign up.");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  // ✅ SIGNUP
  const handleSignup = () => {
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));

    setIsLogin(true);
    generateCaptcha();
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1>✈️ SkyBook</h1>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={input}
          />
        )}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        {/* 🔐 CAPTCHA UI */}
        {isLogin && (
          <>
            <div style={captchaBox}>
              <span style={captchaText}>{captcha}</span>
              <button onClick={generateCaptcha} style={refreshBtn}>
                🔄
              </button>
            </div>

            <input
              placeholder="Enter CAPTCHA"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              style={input}
            />
          </>
        )}

        {/* ERROR */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          onClick={isLogin ? handleLogin : handleSignup}
          style={button}
        >
          {isLogin ? "Login ✈️" : "Sign Up 🚀"}
        </button>

        <p style={{ marginTop: 10 }}>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

// 🎨 STYLES
const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  // ✨ BACKGROUND IMAGE WITH DARK OVERLAY
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1600&q=80')",

  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  padding: "20px",
};

const card = {
  background: "white",
  padding: 30,
  borderRadius: 12,
  width: 320,
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
};

const button = {
  width: "100%",
  padding: 12,
  background: "#2563eb",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const captchaBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f3f4f6",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "10px",
};

const captchaText = {
  fontWeight: "bold",
  letterSpacing: "3px",
};

const refreshBtn = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "16px",
};
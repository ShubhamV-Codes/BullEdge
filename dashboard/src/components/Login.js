import { useState } from "react";
import axios from "../utils/axiosSetup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      loginUser();
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: "420px",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(16px)",
      borderRadius: "20px",
      padding: "45px 35px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      animation: "fadeIn 0.5s ease",
      color: "white",
    },
    header: {
      textAlign: "center",
      marginBottom: "35px",
    },
    title: {
      fontSize: "2.2rem",
      fontWeight: "700",
      marginBottom: "8px",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    subtitle: {
      fontSize: "0.95rem",
      opacity: "0.9",
      fontWeight: "400",
    },
    inputGroup: {
      marginBottom: "20px",
      position: "relative",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "0.9rem",
      fontWeight: "600",
      opacity: "0.95",
      marginLeft: "4px",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "12px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      outline: "none",
      background: "rgba(255, 255, 255, 0.2)",
      color: "white",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    passwordContainer: {
      position: "relative",
    },
    eyeIcon: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      opacity: "0.8",
      transition: "opacity 0.2s",
      fontSize: "1.2rem",
    },
    button: {
      width: "100%",
      padding: "15px",
      background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
      border: "none",
      borderRadius: "12px",
      color: "white",
      fontSize: "1.05rem",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(255, 75, 43, 0.3)",
      opacity: loading ? 0.7 : 1,
    },
    footer: {
      textAlign: "center",
      marginTop: "25px",
      fontSize: "0.9rem",
      opacity: "0.9",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: "600",
      borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
      transition: "all 0.2s",
    },
    forgotPassword: {
      textAlign: "right",
      marginTop: "-8px",
      marginBottom: "20px",
    },
    forgotLink: {
      color: "white",
      fontSize: "0.85rem",
      textDecoration: "none",
      opacity: "0.85",
      transition: "opacity 0.2s",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          ::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          input:focus {
            background: rgba(255, 255, 255, 0.28) !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
          }
          button:hover:not(:disabled) {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(255, 75, 43, 0.5) !important;
          }
          button:disabled {
            cursor: not-allowed;
          }
          a:hover {
            opacity: 1 !important;
            border-color: white !important;
          }
        `}
      </style>

      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>Sign in to continue to your account</p>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <div style={styles.passwordContainer}>
            <input
              style={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <span
              style={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
        </div>

        <div style={styles.forgotPassword}>
          <a href="/forgot-password" style={styles.forgotLink}>
            Forgot password?
          </a>
        </div>

        <button
          style={styles.button}
          onClick={loginUser}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p style={styles.footer}>
          Don't have an account?{" "}
          <a href="/signup" style={styles.link}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
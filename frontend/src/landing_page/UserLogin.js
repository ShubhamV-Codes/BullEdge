import { useState } from "react";
import axios from "../utils/axiosSetup";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); // save JWT
      alert("Login successful!");
      window.location.href = "/"; // ✅ redirect after login
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Animated background */}
      <div style={styles.bgGradient}></div>
      <div style={styles.bgShape1}></div>
      <div style={styles.bgShape2}></div>
      
      <div style={styles.card}>
        {/* Decorative top accent */}
        <div style={styles.cardAccent}></div>
        
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome Back 👋</h2>
          <p style={styles.subtitle}>Login to your BullEdge account</p>
        </div>

        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                style={{
                  ...styles.input,
                  ...(focusedInput === 'email' ? styles.inputFocus : {})
                }}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                required
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type="password"
                style={{
                  ...styles.input,
                  ...(focusedInput === 'password' ? styles.inputFocus : {})
                }}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                required
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonLoading : {})
            }}
            disabled={loading}
          >
            {loading ? (
              <span style={styles.buttonContent}>
                <span style={styles.spinner}></span>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </div>

        <div style={styles.footer}>
          <small style={styles.footerText}>
            Don't have an account?{" "}
            <a href="/register" style={styles.link}>
              Sign Up
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  bgGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%)",
  },
  bgShape1: {
    position: "absolute",
    width: "800px",
    height: "800px",
    background: "radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 70%)",
    borderRadius: "50%",
    top: "-20%",
    right: "-10%",
  },
  bgShape2: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(118, 75, 162, 0.03) 0%, transparent 70%)",
    borderRadius: "50%",
    bottom: "-15%",
    left: "-10%",
  },
  card: {
    position: "relative",
    width: "100%",
    maxWidth: "420px",
    background: "white",
    borderRadius: "16px",
    padding: "48px 40px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1)",
    animation: "slideUp 0.6s ease-out",
    margin: "20px",
    border: "1px solid rgba(226, 232, 240, 0.8)",
  },
  cardAccent: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "5px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    borderRadius: "0 0 10px 10px",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#64748b",
    fontSize: "15px",
    margin: 0,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    left: "16px",
    width: "20px",
    height: "20px",
    color: "#94a3b8",
    pointerEvents: "none",
    zIndex: 1,
  },
  input: {
    width: "100%",
    padding: "14px 16px 14px 48px",
    fontSize: "15px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.3s ease",
    backgroundColor: "white",
    color: "#1e293b",
  },
  inputFocus: {
    borderColor: "#667eea",
    boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.1)",
    transform: "translateY(-2px)",
  },
  button: {
    width: "100%",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "8px",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
  },
  buttonLoading: {
    opacity: 0.8,
    cursor: "not-allowed",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  spinner: {
    width: "16px",
    height: "16px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderTop: "2px solid white",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    display: "inline-block",
  },
  footer: {
    textAlign: "center",
    marginTop: "24px",
  },
  footerText: {
    color: "#64748b",
    fontSize: "14px",
  },
  link: {
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
};

// Add keyframe animations and remove body margins via a style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;
  }
  
  a:hover {
    color: #764ba2 !important;
  }
`;
document.head.appendChild(styleSheet);
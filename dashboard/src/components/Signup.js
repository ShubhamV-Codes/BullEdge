import { useState } from "react";
import axios from "../utils/axiosSetup";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signupUser = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    try {
      await axios.post("/auth/signup", { name, email, password });
      alert("Signup successful");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Create Account</h2>
          <p style={styles.subtitle}>Join us today and get started</p>
        </div>

        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => e.target.style.borderColor = "#6366f1"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              style={styles.input}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => e.target.style.borderColor = "#6366f1"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => e.target.style.borderColor = "#6366f1"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          <button
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer"
            }}
            onClick={signupUser}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <p style={styles.footer}>
            Already have an account?{" "}
            <a href="/login" style={styles.link}>
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  card: {
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    width: "100%",
    maxWidth: "440px",
    padding: "40px",
    animation: "slideUp 0.4s ease-out"
  },
  header: {
    textAlign: "center",
    marginBottom: "32px"
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1f2937",
    margin: "0 0 8px 0"
  },
  subtitle: {
    fontSize: "15px",
    color: "#6b7280",
    margin: 0
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    marginLeft: "4px"
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "15px",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    boxSizing: "border-box"
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
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    marginTop: "8px",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)"
  },
  footer: {
    textAlign: "center",
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "8px"
  },
  link: {
    color: "#6366f1",
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.2s ease"
  }
};

// Add hover effect using inline style
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5) !important;
    }
    a:hover {
      color: #4f46e5 !important;
    }
  `;
  document.head.appendChild(style);
}
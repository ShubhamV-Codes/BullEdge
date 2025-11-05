import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const styles = {
    container: {
      padding: "24px",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      borderRadius: "20px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      minHeight: "100vh",
      fontFamily: "Inter, sans-serif",
    },
    fundsHeader: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
      background: "white",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    },
    text: {
      fontSize: "1rem",
      fontWeight: "500",
      color: "#2d3748",
      margin: 0,
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "10px",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      color: "#fff",
      margin: "5px",
    },
    btnGreen: {
      background: "linear-gradient(135deg, #48c238 0%, #31a24a 100%)",
      boxShadow: "0 4px 15px rgba(72, 194, 55, 0.3)",
    },
    btnBlue: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      marginTop: "30px",
    },
    col: {
      flex: "1 1 45%",
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      padding: "24px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    colHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    },
    title: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "20px",
    },
    dataRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #e2e8f0",
      fontSize: "0.95rem",
      color: "#4a5568",
    },
    imp: {
      fontWeight: "600",
      color: "#2d3748",
    },
    colored: {
      color: "#48c238",
      fontWeight: "700",
    },
    hr: {
      border: "none",
      height: "1px",
      background: "#e2e8f0",
      margin: "16px 0",
    },
    commodity: {
      textAlign: "center",
      padding: "50px 20px",
    },
    commodityText: {
      fontSize: "1rem",
      color: "#718096",
      marginBottom: "16px",
    },
    btnCenter: {
      display: "inline-block",
      padding: "10px 20px",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      fontWeight: "600",
      textDecoration: "none",
      boxShadow: "0 4px 15px rgba(102,126,234,0.3)",
    },
  };

  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.fundsHeader}>
        <p style={styles.text}>Instant, zero-cost fund transfers with UPI</p>
        <div>
          <Link to="#" style={{ ...styles.button, ...styles.btnGreen }}>
            Add funds
          </Link>
          <Link to="#" style={{ ...styles.button, ...styles.btnBlue }}>
            Withdraw
          </Link>
        </div>
      </div>

      {/* Equity + Commodity */}
      <div style={styles.row}>
        {/* Equity Section */}
        <div
          style={{
            ...styles.col,
            ...(hovered === "equity" ? styles.colHover : {}),
          }}
          onMouseEnter={() => setHovered("equity")}
          onMouseLeave={() => setHovered(null)}
        >
          <p style={styles.title}>Equity</p>

          {[
            { label: "Available margin", value: "4,043.10", highlight: true },
            { label: "Used margin", value: "3,757.30" },
            { label: "Available cash", value: "4,043.10" },
          ].map((item, idx) => (
            <div key={idx} style={styles.dataRow}>
              <p>{item.label}</p>
              <p
                style={{
                  ...styles.imp,
                  ...(item.highlight ? styles.colored : {}),
                }}
              >
                {item.value}
              </p>
            </div>
          ))}

          <hr style={styles.hr} />

          {[
            "Opening Balance",
            "Payout",
            "Payin",
            "SPAN",
            "Delivery margin",
            "Exposure",
            "Options premium",
          ].map((label, idx) => (
            <div key={idx} style={styles.dataRow}>
              <p>{label}</p>
              <p style={styles.imp}>0.00</p>
            </div>
          ))}

          <hr style={styles.hr} />

          {[
            "Collateral (Liquid funds)",
            "Collateral (Equity)",
            "Total Collateral",
          ].map((label, idx) => (
            <div key={idx} style={styles.dataRow}>
              <p>{label}</p>
              <p style={styles.imp}>0.00</p>
            </div>
          ))}
        </div>

        {/* Commodity Section */}
        <div
          style={{
            ...styles.col,
            ...(hovered === "commodity" ? styles.colHover : {}),
          }}
          onMouseEnter={() => setHovered("commodity")}
          onMouseLeave={() => setHovered(null)}
        >
          <div style={styles.commodity}>
            <p style={styles.commodityText}>
              You don't have a commodity account
            </p>
            <Link to="#" style={styles.btnCenter}>
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;

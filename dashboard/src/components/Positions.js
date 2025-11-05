import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrendingUp, TrendingDown, Refresh } from "@mui/icons-material";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/allPositions")
      .then((res) => {
        setAllPositions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
        setLoading(false);
      });
  };

  const styles = {
    container: {
      padding: "24px",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      borderRadius: "20px",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
      fontFamily: "Inter, sans-serif",
      overflowX: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
      flexWrap: "wrap",
      gap: "10px",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#2d3748",
      margin: 0,
    },
    refreshButton: {
      background: "linear-gradient(135deg, #be4b4b 0%, #ff0f0f 100%)",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "0.9rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(191, 60, 60, 0.3)",
    },
    tableWrapper: {
      background: "white",
      borderRadius: "16px",
      overflowX: "auto", // ✅ allows scroll on smaller screens
      WebkitOverflowScrolling: "touch",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      marginBottom: "24px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "600px", // ✅ ensures table scrolls horizontally
    },
    th: {
      textAlign: "left",
      padding: "14px",
      background: "linear-gradient(135deg, #be4b4b 0%, #ff0f0f 100%)",
      color: "white",
      fontWeight: "600",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "14px",
      fontSize: "0.9rem",
      color: "#4a5568",
      borderBottom: "1px solid #e2e8f0",
      whiteSpace: "nowrap",
    },
    tr: {
      transition: "all 0.2s ease",
      cursor: "pointer",
    },
    trHover: {
      background: "#f7fafc",
      transform: "scale(1.01)",
    },
    profit: {
      color: "#48c238",
      fontWeight: "600",
    },
    loss: {
      color: "#f56565",
      fontWeight: "600",
    },
  };

  if (loading)
    return (
      <div style={styles.container}>
        <div style={{ textAlign: "center", padding: "40px", color: "#718096" }}>
          Loading positions...
        </div>
      </div>
    );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Positions ({allPositions.length})</h3>
        <button
          style={styles.refreshButton}
          onClick={fetchPositions}
          onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
        >
          <Refresh style={{ fontSize: "18px" }} />
          Refresh
        </button>
      </div>

      {/* Table */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Product</th>
              <th style={styles.th}>Instrument</th>
              <th style={styles.th}>Qty.</th>
              <th style={styles.th}>Avg.</th>
              <th style={styles.th}>LTP</th>
              <th style={styles.th}>P&L</th>
              <th style={styles.th}>Day Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, idx) => {
              const pnl = (stock.price - stock.avg) * stock.qty;
              const isProfit = pnl >= 0;

              return (
                <tr
                  key={idx}
                  style={{
                    ...styles.tr,
                    ...(hoveredRow === idx ? styles.trHover : {}),
                  }}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td style={styles.td}>{stock.product}</td>
                  <td
                    style={{
                      ...styles.td,
                      fontWeight: "600",
                      color: "#2d3748",
                    }}
                  >
                    {stock.name}
                  </td>
                  <td style={styles.td}>{stock.qty}</td>
                  <td style={styles.td}>₹{stock.avg.toFixed(2)}</td>
                  <td style={styles.td}>₹{stock.price.toFixed(2)}</td>
                  <td
                    style={{
                      ...styles.td,
                      ...(isProfit ? styles.profit : styles.loss),
                    }}
                  >
                    {isProfit ? "+" : ""}₹{pnl.toFixed(2)}
                  </td>
                  <td
                    style={{
                      ...styles.td,
                      ...(stock.isLoss ? styles.loss : styles.profit),
                    }}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;

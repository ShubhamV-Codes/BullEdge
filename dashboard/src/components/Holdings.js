import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrendingUp, TrendingDown, Refresh } from "@mui/icons-material";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching holdings:", error);
        setLoading(false);
      });
  };

  // Totals
  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );
  const totalPnL = currentValue - totalInvestment;
  const totalPnLPercentage =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  // Styles
  const styles = {
    container: {
      padding: "24px",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      borderRadius: "20px",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
      overflowX: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
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
      background: "linear-gradient(135deg, #be4b4bff 0%, #ff0f0fff  100%)",
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
      boxShadow: "0 4px 15px rgba(251, 21, 21, 0.3)",
    },
    tableWrapper: {
      background: "white",
      borderRadius: "16px",
      overflowX: "auto", // <-- scrollable on small screens
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      marginBottom: "24px",
      WebkitOverflowScrolling: "touch",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "600px", // keeps table scrollable on narrow screens
    },
    th: {
      textAlign: "left",
      padding: "14px",
      background: "linear-gradient(135deg, #be4b4bff 0%, #ff0f0fff 100%)",
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
    summaryContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    summaryCard: {
      background: "white",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      border: "2px solid transparent",
      transition: "all 0.3s ease",
      textAlign: "center",
    },
    summaryCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
      borderColor: "#667eea",
    },
    summaryValue: {
      fontSize: "1.7rem",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "8px",
      overflowWrap: "break-word",
    },
    summaryLabel: {
      fontSize: "0.9rem",
      color: "#718096",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "0.8rem",
      fontWeight: "600",
      marginLeft: "8px",
    },
    profitBadge: {
      background: "rgba(72, 194, 55, 0.1)",
      color: "#48c238",
    },
    lossBadge: {
      background: "rgba(245, 101, 101, 0.1)",
      color: "#f56565",
    },
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: "center", padding: "40px", color: "#718096" }}>
          Loading holdings...
        </div>
      </div>
    );
  }

  if (allHoldings.length === 0) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#718096" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "600", color: "#4a5568" }}>
            No Holdings Yet
          </div>
          <p>Start buying stocks to see them here!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h3 style={styles.title}>Holdings ({allHoldings.length})</h3>
        <button
          style={styles.refreshButton}
          onClick={fetchHoldings}
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
              <th style={styles.th}>Instrument</th>
              <th style={styles.th}>Qty.</th>
              <th style={styles.th}>Avg. cost</th>
              <th style={styles.th}>LTP</th>
              <th style={styles.th}>Cur. val</th>
              <th style={styles.th}>P&L</th>
              <th style={styles.th}>Net chg.</th>
              <th style={styles.th}>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const isProfit = pnl >= 0;
              const profitClass = isProfit ? styles.profit : styles.loss;
              const dayClass = stock.isLoss ? styles.loss : styles.profit;

              return (
                <tr
                  key={index}
                  style={{
                    ...styles.tr,
                    ...(hoveredRow === index ? styles.trHover : {}),
                  }}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td style={{ ...styles.td, fontWeight: "600", color: "#2d3748" }}>
                    {stock.name}
                  </td>
                  <td style={styles.td}>{stock.qty}</td>
                  <td style={styles.td}>₹{stock.avg.toFixed(2)}</td>
                  <td style={styles.td}>₹{stock.price.toFixed(2)}</td>
                  <td style={styles.td}>₹{curValue.toFixed(2)}</td>
                  <td style={{ ...styles.td, ...profitClass }}>
                    {isProfit ? "+" : ""}₹{pnl.toFixed(2)}
                  </td>
                  <td style={{ ...styles.td, ...profitClass }}>{stock.net}</td>
                  <td style={{ ...styles.td, ...dayClass }}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div style={styles.summaryContainer}>
        <div
          style={{
            ...styles.summaryCard,
            ...(hoveredCard === "investment" ? styles.summaryCardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("investment")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.summaryValue}>₹{totalInvestment.toFixed(2)}</div>
          <div style={styles.summaryLabel}>Total Investment</div>
        </div>

        <div
          style={{
            ...styles.summaryCard,
            ...(hoveredCard === "current" ? styles.summaryCardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("current")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.summaryValue}>₹{currentValue.toFixed(2)}</div>
          <div style={styles.summaryLabel}>Current Value</div>
        </div>

        <div
          style={{
            ...styles.summaryCard,
            ...(hoveredCard === "pnl" ? styles.summaryCardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("pnl")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            style={{
              ...styles.summaryValue,
              color: totalPnL >= 0 ? "#48c238" : "#f56565",
            }}
          >
            {totalPnL >= 0 ? "+" : ""}₹{totalPnL.toFixed(2)}
            <span
              style={{
                ...styles.badge,
                ...(totalPnL >= 0 ? styles.profitBadge : styles.lossBadge),
              }}
            >
              {totalPnL >= 0 ? (
                <TrendingUp style={{ fontSize: "16px" }} />
              ) : (
                <TrendingDown style={{ fontSize: "16px" }} />
              )}
              {totalPnL >= 0 ? "+" : ""}
              {totalPnLPercentage.toFixed(2)}%
            </span>
          </div>
          <div style={styles.summaryLabel}>Profit & Loss</div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;

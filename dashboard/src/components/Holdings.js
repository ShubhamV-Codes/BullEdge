import React, { useState, useEffect } from "react";
import axios from "../utils/axiosSetup";
import { TrendingUp, TrendingDown, Refresh } from "@mui/icons-material";

// ✅ Import Dummy Holdings
import { holdings as defaultHoldings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState(defaultHoldings);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = () => {
    setLoading(true);

    axios
      .get("https://bull-edge-backend.onrender.com/allHoldings")
      .then((res) => {
        const fetched = res.data;

        if (Array.isArray(fetched) && fetched.length > 0) {
          setAllHoldings(fetched);
        } else {
          setAllHoldings(defaultHoldings);
        }

        setLoading(false);
      })
      .catch(() => {
        setAllHoldings(defaultHoldings);
        setLoading(false);
      });
  };

  // ✅ Totals
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

  // ✅ Styles
  const styles = {
    container: {
      padding: "24px",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      borderRadius: "20px",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
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
      transition: "0.3s ease",
    },
    tableWrapper: {
      background: "white",
      borderRadius: "16px",
      overflowX: "auto",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      marginBottom: "24px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "700px",
    },
    th: {
      padding: "14px",
      background: "linear-gradient(135deg, #be4b4b 0%, #ff0f0f 100%)",
      color: "white",
      fontSize: "0.8rem",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    td: {
      padding: "14px",
      borderBottom: "1px solid #e2e8f0",
      color: "#4a5568",
      fontSize: "0.9rem",
      whiteSpace: "nowrap",
    },
    tr: {
      transition: "0.2s ease",
      cursor: "pointer",
    },
    trHover: {
      background: "#f7fafc",
      transform: "scale(1.01)",
    },
    profit: { color: "#48c238", fontWeight: 600 },
    loss: { color: "#f56565", fontWeight: 600 },
    summaryContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    summaryCard: {
      background: "white",
      borderRadius: "16px",
      padding: "24px",
      textAlign: "center",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      transition: "0.3s ease",
    },
    summaryCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    },
    summaryValue: {
      fontSize: "1.7rem",
      fontWeight: "700",
      marginBottom: "8px",
    },
    summaryLabel: {
      fontSize: "0.9rem",
      color: "#718096",
      textTransform: "uppercase",
    },
  };

  // ✅ Loading state
  if (loading) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          Loading holdings...
        </div>
      </div>
    );
  }

  // ✅ Empty State
  if (allHoldings.length === 0) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            No Holdings Yet 📭
          </div>
          <p>Start buying stocks to see them here.</p>
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
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <Refresh style={{ fontSize: "18px" }} />
          Refresh
        </button>
      </div>

      {/* ✅ Holdings Table */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Instrument</th>
              <th style={styles.th}>Qty</th>
              <th style={styles.th}>Avg Cost</th>
              <th style={styles.th}>LTP</th>
              <th style={styles.th}>Current Value</th>
              <th style={styles.th}>P&L</th>
              <th style={styles.th}>Net Chg</th>
              <th style={styles.th}>Day Chg</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const isProfit = pnl >= 0;

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
                  <td style={{ ...styles.td, fontWeight: 600 }}>
                    {stock.name}
                  </td>
                  <td style={styles.td}>{stock.qty}</td>
                  <td style={styles.td}>₹{stock.avg.toFixed(2)}</td>
                  <td style={styles.td}>₹{stock.price.toFixed(2)}</td>
                  <td style={styles.td}>₹{curValue.toFixed(2)}</td>

                  <td
                    style={{
                      ...styles.td,
                      ...(isProfit ? styles.profit : styles.loss),
                    }}
                  >
                    {isProfit ? "+" : ""}
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td
                    style={{
                      ...styles.td,
                      ...(isProfit ? styles.profit : styles.loss),
                    }}
                  >
                    {stock.net}
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

      {/* ✅ Summary Section */}
      <div style={styles.summaryContainer}>
        {/* Investment */}
        <div
          style={{
            ...styles.summaryCard,
            ...(hoveredCard === "investment" ? styles.summaryCardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("investment")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.summaryValue}>
            ₹{totalInvestment.toFixed(2)}
          </div>
          <div style={styles.summaryLabel}>Total Investment</div>
        </div>

        {/* Current Value */}
        <div
          style={{
            ...styles.summaryCard,
            ...(hoveredCard === "current" ? styles.summaryCardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("current")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.summaryValue}>
            ₹{currentValue.toFixed(2)}
          </div>
          <div style={styles.summaryLabel}>Current Value</div>
        </div>

        {/* P&L */}
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
                marginLeft: "10px",
                fontSize: "14px",
                padding: "3px 10px",
                borderRadius: "14px",
                background:
                  totalPnL >= 0
                    ? "rgba(72, 194, 56, 0.2)"
                    : "rgba(245, 101, 101, 0.2)",
              }}
            >
              {totalPnLPercentage.toFixed(2)}%
            </span>
          </div>

          <div style={styles.summaryLabel}>Total P&L</div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;

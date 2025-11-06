import React from "react";

const Apps = () => {
  const projects = [
    {
      name: "Vistara – Homestay Website",
      url: "https://vistara-lime.vercel.app",
      desc: "A modern homestay platform with a clean UI and booking flow.",
      icon: "🏡",
      gradient: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
    },
    {
      name: "BullEdge Trading",
      url: "https://bull-edge.vercel.app",
      desc: "A trading dashboard with charts, holdings, orders, and insights.",
      icon: "📈",
      gradient: "linear-gradient(135deg, #F472B6, #F87171)",
    },
  ];

  const styles = {
    container: {
      padding: "50px",
      fontFamily: "Inter, sans-serif",
      color: "#fff",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
    },
    heading: {
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: "35px",
      textShadow: "0 3px 12px rgba(0,0,0,0.4)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "35px",
    },
    card: {
      padding: "30px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.15)",
      cursor: "pointer",
      transition: "0.3s ease",
      boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
    },
    cardHover: {
      transform: "translateY(-6px) scale(1.02)",
      boxShadow: "0 8px 35px rgba(0,0,0,0.4)",
    },
    iconWrap: {
      fontSize: "45px",
      marginBottom: "18px",
    },
    name: {
      fontSize: "22px",
      fontWeight: 600,
      marginBottom: "10px",
    },
    desc: {
      fontSize: "15px",
      opacity: 0.85,
      marginBottom: "16px",
      lineHeight: "1.5",
    },
    btn: (gradient) => ({
      padding: "10px 18px",
      background: gradient,
      borderRadius: "8px",
      color: "#fff",
      display: "inline-block",
      fontWeight: 600,
      textDecoration: "none",
      transition: "0.3s ease",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    }),
    btnHover: {
      filter: "brightness(1.15)",
      transform: "scale(1.03)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Applications</h1>

      <div style={styles.grid}>
        {projects.map((p, idx) => (
          <div
            key={idx}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
            }}
          >
            <div style={styles.iconWrap}>{p.icon}</div>

            <div style={styles.name}>{p.name}</div>

            <div style={styles.desc}>{p.desc}</div>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.btn(p.gradient)}
              onMouseEnter={(e) => {
                e.target.style.filter = styles.btnHover.filter;
                e.target.style.transform = styles.btnHover.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = "none";
                e.target.style.transform = "none";
              }}
            >
              Visit Website →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;

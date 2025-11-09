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

  return (
    <div className="apps-container">
      <style>{`
        .apps-container {
         padding: 1.5rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          border-radius:20px;
        }

        .apps-heading {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #1a1a1a;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
        }

        .app-card {
          padding: 2rem;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }

        .app-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          border-color: #d1d5db;
        }

        .app-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .app-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #1a1a1a;
        }

        .app-desc {
          font-size: 0.95rem;
          color: #5d729eff;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .app-btn {
          padding: 0.65rem 1.25rem;
          background: #1a73e8;
          border-radius: 6px;
          color: #fff;
          display: inline-block;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }

        .app-btn:hover {
          background: #1557b0;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
        }

        @media (max-width: 768px) {
          .apps-container {
            padding: 2rem 1rem;
          }

          .apps-heading {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }

          .apps-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .app-card {
            padding: 1.5rem;
          }

          .app-name {
            font-size: 1.125rem;
          }

          .app-desc {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .apps-container {
            padding: 1.5rem 1rem;
          }

          .apps-heading {
            font-size: 1.5rem;
          }

          .app-icon {
            font-size: 2rem;
          }

          .app-card {
            padding: 1.25rem;
          }
        }
      `}</style>

      <h1 className="apps-heading">Our Other Apps</h1>

      <div className="apps-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="app-card">
            <span className="app-icon">{p.icon}</span>
            <div className="app-name">{p.name}</div>
            <div className="app-desc">{p.desc}</div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="app-btn"
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
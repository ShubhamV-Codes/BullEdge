import React from "react";

const Apps = () => {
  const apps = [
    {
      name: "Vistara",
      url: "https://vistara-lime.vercel.app",
      description: "A sleek flight booking app for seamless travel experiences.",
      icon: "✈️"
    }
  ];

  return (
    <>
      <style>{`
        .apps-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .apps-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          text-align: center;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          padding: 20px 0;
        }

        .app-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .app-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          border-color: #4a90e2;
        }

        .app-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .app-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 12px 0;
        }

        .app-description {
          font-size: 1rem;
          color: #7f8c8d;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .apps-title {
            font-size: 2rem;
          }

          .apps-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .app-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="apps-container">
        <h1 className="apps-title">My Applications</h1>
        <div className="apps-grid">
          {apps.map((app, index) => (
            <a 
              key={index} 
              href={app.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="app-card"
            >
              <div className="app-icon">{app.icon}</div>
              <h3 className="app-name">{app.name}</h3>
              <p className="app-description">{app.description}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Apps;
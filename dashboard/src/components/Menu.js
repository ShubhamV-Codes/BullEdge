import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" }
  ];

  return (
    <div className="menu-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .menu-container {
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
          padding: 0.75rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .menu-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }

        .logo-container {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          min-width: 50px;
        }

        .logo-link {
          text-decoration: none;
          display: block;
        }

        .logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          cursor: pointer;
          display: block;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
          flex-shrink: 0;
        }

        .hamburger {
          width: 24px;
          height: 2px;
          background: #333;
          position: relative;
          transition: all 0.3s;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: #333;
          transition: all 0.3s;
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          bottom: -8px;
        }

        .menu-toggle.active .hamburger {
          background: transparent;
        }

        .menu-toggle.active .hamburger::before {
          transform: rotate(45deg);
          top: 0;
        }

        .menu-toggle.active .hamburger::after {
          transform: rotate(-45deg);
          bottom: 0;
        }

        .menus {
          display: flex;
          align-items: center;
          flex: 1;
          justify-content: flex-end;
        }

        .menus ul {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }

        .menus li {
          display: flex;
          align-items: center;
        }

        .menu-link {
          text-decoration: none;
          color: inherit;
        }

        .menu {
          padding: 0.75rem 1rem;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
          color: #666;
          font-weight: 500;
          font-size: 0.95rem;
          white-space: nowrap;
        }

        .menu.selected {
          background: #e8f0fe;
          color: #1a73e8;
          font-weight: 600;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          margin-left: 1rem;
          flex-shrink: 0;
        }

        /* Large Desktop */
        @media (max-width: 1200px) {
          .menu-wrapper {
            gap: 3rem;
          }

          .menu {
            padding: 0.7rem 0.95rem;
            font-size: 0.92rem;
          }
        }

        /* Tablet/Small Desktop */
        @media (max-width: 1024px) {
          .menu-container {
            padding: 0.75rem 1.5rem;
          }

          .menu-wrapper {
            gap: 2rem;
          }

          .menu {
            padding: 0.65rem 0.85rem;
            font-size: 0.9rem;
          }

          .menus ul {
            gap: 0.1rem;
          }

          .avatar {
            margin-left: 0.75rem;
            width: 38px;
            height: 38px;
            font-size: 0.85rem;
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .menu-wrapper {
            gap: 1.5rem;
          }

          .menu {
            padding: 0.6rem 0.75rem;
            font-size: 0.85rem;
          }

          .menus ul {
            gap: 0;
          }

          .avatar {
            margin-left: 0.5rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .menu-container {
            padding: 0.75rem 1rem;
          }

          .menu-wrapper {
            gap: 1rem;
          }

          .menu-toggle {
            display: block;
          }

          .menus {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: white;
            flex-direction: column;
            align-items: flex-start;
            padding: 5rem 1.5rem 2rem;
            box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
            justify-content: flex-start;
          }

          .menus.open {
            right: 0;
          }

          .menus ul {
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
            align-items: stretch;
          }

          .menus li {
            width: 100%;
          }

          .menu {
            width: 100%;
            padding: 1rem;
            text-align: left;
            font-size: 0.95rem;
          }

          .avatar {
            margin-left: 0;
            margin-top: 1.5rem;
            align-self: flex-start;
            width: 40px;
            height: 40px;
          }

          .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }

          .overlay.active {
            display: block;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .menu-container {
            padding: 0.65rem 0.75rem;
          }

          .logo {
            width: 40px;
            height: 40px;
          }

          .logo-container {
            min-width: 40px;
          }

          .menus {
            width: 100%;
            right: -100%;
          }

          .menu {
            font-size: 1rem;
            padding: 1.1rem;
          }
        }

        /* Very Small Mobile */
        @media (max-width: 360px) {
          .menu-container {
            padding: 0.5rem;
          }

          .logo {
            width: 35px;
            height: 35px;
          }

          .logo-container {
            min-width: 35px;
          }
        }
      `}</style>

      <div className="menu-wrapper">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="logo.png" className="logo" alt="KiteX" />
          </Link>
        </div>

        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger"></div>
        </button>

        <div className={`menus ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className="menu-link"
                  onClick={() => handleMenuClick(index)}
                >
                  <p className={selectedMenu === index ? "menu selected" : "menu"}>
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
            <li>
              <div className="avatar">SV</div>
            </li>
          </ul>
        </div>

        <div 
          className={`overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </div>
    </div>
  );
};

export default Menu;
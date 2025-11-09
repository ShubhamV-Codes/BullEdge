import { useState, useEffect } from "react";
import { TrendingUp, AccountBalanceWallet, PieChart } from "@mui/icons-material";

const Summary = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const styles = {
    container: {
      padding: '24px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      color: 'white',
      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '20px',
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
      pointerEvents: 'none',
    },
    username: {
      position: 'relative',
      zIndex: 1,
      marginBottom: '30px',
      animation: animate ? 'fadeInDown 0.6s ease-out' : 'none',
    },
    usernameH6: {
      fontSize: '2rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '8px',
      textShadow: '0 2px 10px rgba(0,0,0,0.2)',
    },
    greeting: {
      fontSize: '0.9rem',
      opacity: '0.9',
      fontWeight: '400',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      position: 'relative',
      zIndex: 1,
    },
    card: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      animation: animate ? 'fadeInUp 0.6s ease-out' : 'none',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '0.9rem',
      fontWeight: '600',
      opacity: '0.9',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    iconContainer: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainValue: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '8px',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    subValue: {
      fontSize: '0.85rem',
      opacity: '0.8',
      marginBottom: '16px',
    },
    statsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '16px',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    },
    statItem: {
      flex: '1',
    },
    statLabel: {
      fontSize: '0.75rem',
      opacity: '0.7',
      marginBottom: '4px',
    },
    statValue: {
      fontSize: '1rem',
      fontWeight: '600',
    },
    profitBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      background: 'rgba(72, 194, 55, 0.2)',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#4ade80',
      marginTop: '8px',
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.backgroundPattern}></div>

        <div style={styles.username}>
          <h6 style={styles.usernameH6}>Hi, Shubham! 👋</h6>
          <p style={styles.greeting}>Welcome back to your portfolio</p>
        </div>

        <div style={styles.cardsContainer}>
          {/* Equity Card */}
          <div
            style={{
              ...styles.card,
              ...(hoveredCard === 'equity' ? styles.cardHover : {}),
              animationDelay: '0.1s',
            }}
            onMouseEnter={() => setHoveredCard('equity')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>Equity</span>
              <div style={styles.iconContainer}>
                <AccountBalanceWallet style={{ fontSize: '20px' }} />
              </div>
            </div>
            <div style={styles.mainValue}>₹3.74k</div>
            <div style={styles.subValue}>Margin available</div>
            <div style={styles.statsRow}>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>Margins used</div>
                <div style={styles.statValue}>₹0</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>Opening balance</div>
                <div style={styles.statValue}>₹3.74k</div>
              </div>
            </div>
          </div>

          {/* Holdings Card */}
          <div
            style={{
              ...styles.card,
              ...(hoveredCard === 'holdings' ? styles.cardHover : {}),
              animationDelay: '0.2s',
            }}
            onMouseEnter={() => setHoveredCard('holdings')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>Holdings (13)</span>
              <div style={styles.iconContainer}>
                <PieChart style={{ fontSize: '20px' }} />
              </div>
            </div>
            <div style={styles.mainValue}>
              ₹1.55k
              <div style={styles.profitBadge}>
                <TrendingUp style={{ fontSize: '14px' }} />
                +5.20%
              </div>
            </div>
            <div style={styles.subValue}>Profit & Loss</div>
            <div style={styles.statsRow}>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>Current Value</div>
                <div style={styles.statValue}>₹31.43k</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>Investment</div>
                <div style={styles.statValue}>₹29.88k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
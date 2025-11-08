import React from 'react';

function NotAvailable() {
    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <div style={styles.container}>
            {/* Background Elements */}
            <div style={styles.bgCircle1}></div>
            <div style={styles.bgCircle2}></div>
            
            <div style={styles.content}>
                {/* 404 Text with Animation */}
                <div style={styles.errorCode}>
                    <span style={styles.number}>4</span>
                    <span style={{...styles.number, ...styles.middleNumber}}>0</span>
                    <span style={styles.number}>4</span>
                </div>
                
                {/* Icon */}
                <div style={styles.iconWrapper}>
                    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                {/* Main Message */}
                <h1 style={styles.heading}>Page Not Found</h1>
                <p style={styles.subtitle}>
                    Oops! The page you're looking for doesn't exist yet.
                </p>
                
                {/* Work in Progress Badge */}
                <div style={styles.badge}>
                    <svg style={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span style={styles.badgeText}>Work in Progress</span>
                </div>
                
                <p style={styles.message}>
                    We're working hard to bring you this feature. Stay tuned!
                </p>
                
                {/* Back Button */}
                <button onClick={handleGoHome} style={styles.button}>
                    <svg style={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    bgCircle1: {
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '-10%',
        right: '-5%',
    },
    bgCircle2: {
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '-10%',
        left: '-5%',
    },
    content: {
        textAlign: 'center',
        zIndex: 1,
        padding: '40px',
        maxWidth: '600px',
    },
    errorCode: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '30px',
    },
    number: {
        fontSize: '120px',
        fontWeight: '800',
        color: '#1e293b',
        lineHeight: 1,
        textShadow: '4px 4px 0px rgba(59, 130, 246, 0.2)',
    },
    middleNumber: {
        color: '#3b82f6',
        animation: 'bounce 2s ease-in-out infinite',
    },
    iconWrapper: {
        marginBottom: '20px',
    },
    icon: {
        width: '80px',
        height: '80px',
        color: '#3b82f6',
        margin: '0 auto',
    },
    heading: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: '12px',
    },
    subtitle: {
        fontSize: '18px',
        color: '#64748b',
        marginBottom: '30px',
        lineHeight: 1.6,
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#fef3c7',
        color: '#92400e',
        padding: '10px 20px',
        borderRadius: '50px',
        fontSize: '14px',
        fontWeight: '600',
        marginBottom: '20px',
        border: '2px solid #fbbf24',
    },
    badgeIcon: {
        width: '18px',
        height: '18px',
    },
    badgeText: {
        margin: 0,
    },
    message: {
        fontSize: '16px',
        color: '#64748b',
        marginBottom: '40px',
        lineHeight: 1.6,
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '16px 32px',
        fontSize: '16px',
        fontWeight: '600',
        color: 'white',
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
    },
    buttonIcon: {
        width: '20px',
        height: '20px',
    },
};

// Add keyframe animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5) !important;
  }
`;
document.head.appendChild(styleSheet);

export default NotAvailable;
import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>The page you are looking for does not exist.</p>
            <Link to="/" style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#007bff', textDecoration: 'underline' }}>Go back to Home</Link>
        </div>
     );
}

export default NotFound;
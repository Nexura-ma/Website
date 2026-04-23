import React from 'react';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at top right, #064e3b, #000000)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{
        textAlign: 'center',
        animation: 'fadeIn 1s ease-out',
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 5rem)',
          fontWeight: 800,
          marginBottom: '1rem',
          background: 'linear-gradient(to right, #10b981, #34d399)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}>
          Nexura Admin
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#a7f3d0',
          maxWidth: '600px',
          lineHeight: '1.6',
          margin: '0 auto 2rem',
          opacity: 0.8,
        }}>
          Comprehensive management interface for the Nexura ecosystem.
          Secure, fast, and edge-ready.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
        }}>
          <div style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '99px',
            background: '#10b981',
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}>
            Dashboard
          </div>
          <div style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '99px',
            border: '1px solid #065f46',
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer',
            background: 'rgba(255,255,255,0.05)',
          }}>
            Settings
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </main>
  );
}


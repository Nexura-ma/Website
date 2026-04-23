import React from 'react';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at top left, #0f172a, #000000)',
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
          background: 'linear-gradient(to right, #38bdf8, #818cf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}>
          Nexura Web
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#94a3b8',
          maxWidth: '600px',
          lineHeight: '1.6',
          margin: '0 auto 2rem',
        }}>
          A premium Next.js application running on Cloudflare Pages.
          Built with Turborepo and optimized for performance.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
        }}>
          <div style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '99px',
            background: 'white',
            color: 'black',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}>
            Explore Docs
          </div>
          <div style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '99px',
            border: '1px solid #334155',
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer',
            background: 'rgba(255,255,255,0.05)',
          }}>
            Get Started
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


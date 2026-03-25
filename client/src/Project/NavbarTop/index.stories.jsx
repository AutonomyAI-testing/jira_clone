import React from 'react';

export default {
  title: 'Project/NavbarTop',
};

export const Default = () => (
  <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      background: '#0052cc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 110,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
        {/* Logo Container - Jira Icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          opacity: 1,
          transition: 'opacity 0.2s',
        }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="white" style={{ color: '#fff' }}>
            <path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm0 2c6.63 0 12 5.37 12 12s-5.37 12-12 12S4 22.63 4 16 9.37 4 16 4zm0 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>
          </svg>
          <span style={{
            color: '#fff',
            fontFamily: '"Courier New", monospace',
            fontSize: '18px',
            fontWeight: 'bold',
            marginLeft: '8px',
            letterSpacing: '0.5px',
          }}>Jira</span>
        </div>

        {/* Navigation Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, marginLeft: '32px' }}>
          <button style={{
            color: '#fff',
            background: 'transparent',
            border: 'none',
            padding: '8px 16px',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            borderRadius: '3px',
          }} onMouseEnter={(e) => e.target.style.background = 'rgba(0, 82, 204, 0.8)'} onMouseLeave={(e) => e.target.style.background = 'transparent'} onClick={() => console.log('Filters clicked')} title="Search issues">
            Filters
          </button>
          <button style={{
            color: '#fff',
            background: 'transparent',
            border: 'none',
            padding: '8px 16px',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            borderRadius: '3px',
          }} onMouseEnter={(e) => e.target.style.background = 'rgba(0, 82, 204, 0.8)'} onMouseLeave={(e) => e.target.style.background = 'transparent'} onClick={() => console.log('Create clicked')} title="Create new issue">
            Create
          </button>
        </div>
      </div>

      {/* Right side - User Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: 'auto' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          border: 'none',
          padding: '4px 8px',
          cursor: 'pointer',
          borderRadius: '3px',
          transition: 'background 0.2s',
          color: '#fff',
        }} onMouseEnter={(e) => e.target.style.background = 'rgba(0, 82, 204, 0.8)'} onMouseLeave={(e) => e.target.style.background = 'transparent'} title="Lord Gaben">
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundImage: 'url(https://i.ibb.co/6n0hLML/lord-gaben.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '2px solid rgba(255,255,255,0.3)',
          }}/>
          <span style={{
            color: '#fff',
            fontFamily: 'Arial, sans-serif',
            fontSize: '13px',
            maxWidth: '120px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>Lord Gaben</span>
        </button>
        <div style={{
          width: '1px',
          height: '24px',
          background: 'rgba(255,255,255,0.2)',
        }}/>
      </div>
    </nav>

    {/* Main content area */}
    <div style={{ marginTop: '80px', padding: '20px' }}>
      <p>Main content area goes here</p>
    </div>
  </div>
);

import React from 'react';
import logoSrc from '../assets/Real_logo_bg.jpeg';

export const Logo = ({ size = 80 }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: '0px',
        left: '15px',
        marginTop: '-10px',
        zIndex: 109999,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img 
        src={logoSrc} 
        alt="PayNPrint Logo" 
        style={{
          width: '120%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

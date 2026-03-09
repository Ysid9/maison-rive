'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      padding: '24px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)',
    }}>
      {/* Logo */}
      <Link href="/" style={{
        fontFamily: 'Georgia, serif',
        fontSize: '11px',
        letterSpacing: '6px',
        color: '#F5F0E8',
        textDecoration: 'none',
        textTransform: 'uppercase',
      }}>
        Maison <span style={{ fontSize: '18px', letterSpacing: '4px', fontWeight: 'bold' }}>RIVE</span>
      </Link>

      {/* Links desktop */}
      <div style={{ display: 'flex', gap: '40px' }}>
        {['Catalogue', 'À propos', 'Contact'].map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} style={{
            fontFamily: 'Georgia, serif',
            fontSize: '11px',
            letterSpacing: '3px',
            color: '#F5F0E8',
            textDecoration: 'none',
            textTransform: 'uppercase',
            opacity: 0.8,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Panier */}
      <Link href="/panier" style={{
        fontFamily: 'Georgia, serif',
        fontSize: '11px',
        letterSpacing: '3px',
        color: '#F5F0E8',
        textDecoration: 'none',
        textTransform: 'uppercase',
        border: '1px solid rgba(245,240,232,0.3)',
        padding: '8px 20px',
      }}>
        Panier (0)
      </Link>
    </nav>
  );
}
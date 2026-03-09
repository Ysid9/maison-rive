'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 24px',
    }}>

      {/* Fond rouge subtil */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(196,30,30,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Tag line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '11px',
          letterSpacing: '6px',
          color: '#C41E1E',
          textTransform: 'uppercase',
          marginBottom: '32px',
        }}
      >
        The House Always Wins
      </motion.p>

      {/* Titre flottant */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ y: [0, -6, 0], opacity: 1 }}
  transition={{
    opacity: { duration: 1, delay: 0.4 },
    y: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1.4,
    },
  }}
  style={{
    willChange: 'transform',
    transform: 'translateZ(0)',
  }}
>
  <h1 style={{
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(60px, 12vw, 140px)',
    fontWeight: 'normal',
    color: '#F5F0E8',
    lineHeight: '0.9',
    marginBottom: '16px',
    letterSpacing: '-2px',
    transform: 'translateZ(0)',
  }}>
    MAISON
  </h1>
  <h1 style={{
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(80px, 16vw, 180px)',
    fontWeight: 'bold',
    color: '#F5F0E8',
    lineHeight: '0.9',
    marginBottom: '48px',
    letterSpacing: '-4px',
    transform: 'translateZ(0)',
  }}>
    RIVE
  </h1>
</motion.div>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '13px',
          letterSpacing: '4px',
          color: 'rgba(245,240,232,0.5)',
          textTransform: 'uppercase',
          marginBottom: '64px',
        }}
      >
        Nouvelle Collection — 2025
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <Link href="/catalogue" style={{
          fontFamily: 'Georgia, serif',
          fontSize: '11px',
          letterSpacing: '4px',
          color: '#F5F0E8',
          textDecoration: 'none',
          textTransform: 'uppercase',
          border: '1px solid #C41E1E',
          padding: '16px 48px',
          transition: 'all 0.3s',
          backgroundColor: 'transparent',
          display: 'inline-block',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#C41E1E';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        >
          Découvrir la collection
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>Scroll</p>
        <motion.div
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', backgroundColor: '#F5F0E8', transformOrigin: 'top' }}
        />
      </motion.div>

    </section>
  );
}
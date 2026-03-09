'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const hoodies = [
  { id: 1, nom: 'RIVE & LUCK', variante: 'Gris', prix: 400, couleur: '#6B7280' },
  { id: 2, nom: 'RIVE & LUCK', variante: 'Noir', prix: 400, couleur: '#1a1a1a' },
  { id: 3, nom: 'RIVE & LUCK', variante: 'Vert', prix: 400, couleur: '#1B4332' },
  { id: 4, nom: 'NO RISK NO RIVE', variante: 'Vert', prix: 400, couleur: '#1B4332' },
  { id: 5, nom: 'CARTE', variante: 'Vert', prix: 400, couleur: '#1B4332' },
  { id: 6, nom: 'NO RISK NO RIVE', variante: 'Noir', prix: 400, couleur: '#111' },
  { id: 7, nom: 'MOM I AM A RICH MAN', variante: 'Noir', prix: 400, couleur: '#111' },
  { id: 8, nom: 'TEDDY', variante: 'Noir', prix: 400, couleur: '#111' },
];

function HoodieCard({ hoodie, tall = false, delay = 0 }: {
  hoodie: typeof hoodies[0],
  tall?: boolean,
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/produit/${hoodie.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
          onMouseEnter={e => {
            (e.currentTarget.querySelector('.card-overlay') as HTMLElement).style.opacity = '1';
            (e.currentTarget.querySelector('.card-img') as HTMLElement).style.transform = 'scale(1.04)';
          }}
          onMouseLeave={e => {
            (e.currentTarget.querySelector('.card-overlay') as HTMLElement).style.opacity = '0';
            (e.currentTarget.querySelector('.card-img') as HTMLElement).style.transform = 'scale(1)';
          }}
        >
          <div
            className="card-img"
            style={{
              backgroundColor: '#111',
              aspectRatio: tall ? '2/3' : '3/4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.6s ease',
            }}
          >
            <div style={{
              width: '55%',
              height: '65%',
              backgroundColor: hoodie.couleur,
              borderRadius: '6px 6px 3px 3px',
              opacity: 0.85,
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }} />
          </div>

          <div
            className="card-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(196,30,30,0.4), transparent)',
              opacity: 0,
              transition: 'opacity 0.4s ease',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '24px',
            }}
          >
            <span style={{
              fontSize: '9px',
              letterSpacing: '4px',
              color: '#F5F0E8',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(245,240,232,0.6)',
              paddingBottom: '4px',
            }}>
              Voir le produit →
            </span>
          </div>

          <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
            <span style={{
              fontSize: '8px',
              letterSpacing: '3px',
              color: 'rgba(245,240,232,0.4)',
              textTransform: 'uppercase',
            }}>
              Maison Rive
            </span>
          </div>
        </div>

        <div style={{ padding: '14px 4px 24px' }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '2.5px',
            color: '#F5F0E8',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}>
            {hoodie.nom}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{
              fontSize: '11px',
              color: 'rgba(245,240,232,0.4)',
              fontFamily: 'Georgia, serif',
            }}>
              {hoodie.variante}
            </p>
            <p style={{
              fontSize: '11px',
              color: 'rgba(245,240,232,0.6)',
              fontFamily: 'Georgia, serif',
            }}>
              400 DH
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Catalogue() {
  return (
    <section style={{ backgroundColor: '#0A0A0A', padding: '120px 48px' }}>

      {/* Header animé */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '80px',
        }}
      >
        <div>
          <p style={{
            fontSize: '9px',
            letterSpacing: '6px',
            color: '#C41E1E',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Collection 2025
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 'normal',
            color: '#F5F0E8',
            lineHeight: 1,
            letterSpacing: '-1px',
          }}>
            Les Hoodies
          </h2>
        </div>
        <Link href="/catalogue" style={{
          fontSize: '9px',
          letterSpacing: '4px',
          color: 'rgba(245,240,232,0.4)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#F5F0E8'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.4)'}
        >
          Voir tout →
        </Link>
      </motion.div>

      {/* Rangée 1 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr 1fr',
        gap: '3px',
        marginBottom: '3px',
      }}>
        <HoodieCard hoodie={hoodies[0]} tall delay={0} />
        <HoodieCard hoodie={hoodies[1]} delay={0.1} />
        <HoodieCard hoodie={hoodies[2]} delay={0.2} />
      </div>

      {/* Rangée 2 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1.6fr',
        gap: '3px',
        marginBottom: '3px',
      }}>
        <HoodieCard hoodie={hoodies[3]} delay={0} />
        <HoodieCard hoodie={hoodies[4]} delay={0.1} />
        <HoodieCard hoodie={hoodies[5]} tall delay={0.2} />
      </div>

      {/* Rangée 3 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3px',
      }}>
        <HoodieCard hoodie={hoodies[6]} delay={0} />
        <HoodieCard hoodie={hoodies[7]} delay={0.15} />
      </div>

    </section>
  );
}
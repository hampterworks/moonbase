'use client'
import Image from 'next/image';
import { useMemo, memo } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Memoized plankton component to prevent unnecessary re-renders
const PlanktonParticle = memo<{
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  glowDelay: number;
}>(({ x, y, size, opacity, delay, glowDelay }) => (
  <div
    className={styles.plankton}
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      animationDelay: `${delay}s, ${glowDelay}s`,
    }}
  />
));

PlanktonParticle.displayName = 'PlanktonParticle';

// Component that generates plankton - will only render on client
const PlanktonContainer = () => {
  const plankton = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.3 + 0.2,
      delay: Math.random() * 10,
      glowDelay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className={styles.planktonContainer}>
      {plankton.map(p => (
        <PlanktonParticle
          key={p.id}
          x={p.x}
          y={p.y}
          size={p.size}
          opacity={p.opacity}
          delay={p.delay}
          glowDelay={p.glowDelay}
        />
      ))}
    </div>
  );
};

// Dynamically import the plankton container with no SSR
const DynamicPlanktonContainer = dynamic(() => Promise.resolve(PlanktonContainer), {
  ssr: false,
});

const Index = () => {
  return (
    <div className={styles.page}>
      {/* This will only render on the client */}
      <DynamicPlanktonContainer />

      <h1>ATLAMOON</h1>
      <div className={styles.imageContainer}>
        <Image
          src="/moonmain.png"
          alt="Moon"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <button className={styles.button}>
        <a href="">WATCH NOW</a>
      </button>
    </div>
  )
}

export default Index;

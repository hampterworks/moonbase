'use client'
import { memo, useMemo } from 'react';
import styles from './PlanktonParticle.module.css';

export type PlanktonParticleProps = {
  x: number
  y: number
  size: number
  opacity: number
  delay: number
  glowDelay: number
}

const PlanktonParticle = memo<PlanktonParticleProps>(({ x, y, size, opacity, delay, glowDelay }) => (
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
))

PlanktonParticle.displayName = 'PlanktonParticle'

export type PlanktonContainerProps = {
  count?: number
}

const PlanktonContainer = ({ count = 45 }: PlanktonContainerProps) => {
  const plankton = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.3 + 0.2,
      delay: Math.random() * 15, // Increased from 10 to 15
      glowDelay: Math.random() * 8, // Increased from 5 to 8
    }))
  }, [count])

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
  )
}

export default PlanktonContainer

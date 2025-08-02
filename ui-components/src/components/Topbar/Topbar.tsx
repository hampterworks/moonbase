"use client"
import Link from 'next/link';
import React, { useRef, useEffect, useCallback } from 'react';
import Shark from '../Shark';
import styles from './Topbar.module.css';

const links = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'MUSIC',
    href: '/music',
  },
  {
    label: 'ABOUT',
    href: '/about',
  },
  {
    label: 'LINKS',
    href: '/links',
  },
];

const Topbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const sharkRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const hoverHandlersRef = useRef<Map<number, () => void>>(new Map());
  const idleAnimationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const isMouseInteractingRef = useRef<boolean>(false);
  const lastMouseMoveRef = useRef<number>(0);
  const sharkSvgRef = useRef<SVGSVGElement | null>(null);
  const currentScaleXRef = useRef<number>(1);

  // Cache the shark SVG element for better performance
  const getSharkSvg = useCallback(() => {
    if (!sharkSvgRef.current) {
      const shark = sharkRef.current;
      if (shark) {
        sharkSvgRef.current = shark.querySelector('svg') as SVGSVGElement;
      }
    }
    return sharkSvgRef.current;
  }, []);

  const startIdleAnimation = useCallback(() => {
    const shark = sharkRef.current;
    if (!shark || shark.style.opacity === '0' || !shark.style.opacity) return;

    // Stop any existing animation first
    if (idleAnimationRef.current) {
      cancelAnimationFrame(idleAnimationRef.current);
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const sharkSvg = getSharkSvg();
      if (sharkSvg && shark.style.opacity !== '0') {
        // Only animate if not actively interacting with mouse
        if (!isMouseInteractingRef.current || timestamp - lastMouseMoveRef.current > 500) {
          // Gentle swimming motion - optimized calculations
          const bobIntensity = 2;
          const rotateIntensity = 3;
          const speed = 0.002;

          const yOffset = Math.sin(elapsed * speed) * bobIntensity;
          const rotation = Math.sin(elapsed * speed * 1.5) * rotateIntensity;

          // Use transform instead of modifying style.transform string
          const currentTransform = shark.style.transform || '';
          const baseTransform = currentTransform.replace(/translateY\([^)]*\)/, '');

          shark.style.transform = `${baseTransform} translateY(${yOffset}px)`;
          sharkSvg.style.transform = `rotate(${rotation}deg)`;
        }

        idleAnimationRef.current = requestAnimationFrame(animate);
      }
    };

    startTimeRef.current = 0;
    idleAnimationRef.current = requestAnimationFrame(animate);
  }, [getSharkSvg]);

  const stopIdleAnimation = useCallback(() => {
    if (idleAnimationRef.current) {
      cancelAnimationFrame(idleAnimationRef.current);
      idleAnimationRef.current = null;
      startTimeRef.current = 0;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const shark = sharkRef.current;
    if (!shark || shark.style.opacity === '0' || !shark.style.opacity) return;

    isMouseInteractingRef.current = true;
    lastMouseMoveRef.current = performance.now();

    const sharkRect = shark.getBoundingClientRect();
    const sharkCenterX = sharkRect.left + sharkRect.width / 2;
    const sharkCenterY = sharkRect.top + sharkRect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate deltas
    const deltaX = mouseX - sharkCenterX;
    const deltaY = mouseY - sharkCenterY;

    // Reduce sensitivity to vertical movement and account for flipped sharks
    const horizontalWeight = 3; // Prioritize horizontal movement
    const verticalWeight = 1;   // Reduce vertical sensitivity

    // Adjust angle calculation based on shark orientation
    let adjustedDeltaX = deltaX * horizontalWeight;
    let adjustedDeltaY = deltaY * verticalWeight;

    // If shark is flipped (scaleX: -1), invert the horizontal calculation
    if (currentScaleXRef.current === -1) {
      adjustedDeltaX = -adjustedDeltaX;
    }

    const angle = Math.atan2(adjustedDeltaY, adjustedDeltaX) * (180 / Math.PI);

    // More conservative rotation limits
    const maxRotation = 20; // Reduced from 30
    const sensitivity = 0.3; // Reduced sensitivity
    const clampedAngle = Math.max(-maxRotation, Math.min(maxRotation, angle * sensitivity));

    const sharkSvg = getSharkSvg();
    if (sharkSvg) {
      sharkSvg.style.transform = `rotate(${clampedAngle}deg)`;
    }

    // Reset interaction flag after a delay
    setTimeout(() => {
      isMouseInteractingRef.current = false;
    }, 300);
  }, [getSharkSvg]);

  const handleLinkHover = useCallback((index: number) => {
    const nav = navRef.current;
    const shark = sharkRef.current;
    const link = linkRefs.current[index];
    if (!link || !shark || !nav) return;

    isMouseInteractingRef.current = false;

    const linkRect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    // Calculate position relative to nav container
    const linkCenterX = linkRect.left + linkRect.width / 2 - navRect.left;
    const linkCenterY = linkRect.top + linkRect.height / 2 - navRect.top;

    // Offset shark to appear beside the link
    const sharkWidth = 60;
    const offset = linkRect.width / 2 + sharkWidth / 2 + 30;

    let sharkX;
    let scaleX = 1;

    if (index < 2) {
      sharkX = linkCenterX - offset;
      scaleX = 1;
    } else {
      sharkX = linkCenterX + offset;
      scaleX = -1;
    }

    // Store the current scale for mouse interaction calculations
    currentScaleXRef.current = scaleX;

    shark.style.opacity = '1';
    shark.style.left = `${sharkX}px`;
    shark.style.top = `${linkCenterY}px`;
    shark.style.transform = `translate(-50%, -50%) scaleX(${scaleX})`;

    // Clear any existing SVG cache since position changed
    sharkSvgRef.current = null;

    // Start idle animation immediately after positioning
    requestAnimationFrame(() => {
      startIdleAnimation();
    });
  }, [startIdleAnimation]);

  const handleLinkLeave = useCallback(() => {
    const shark = sharkRef.current;
    if (!shark) return;

    stopIdleAnimation();
    isMouseInteractingRef.current = false;
    shark.style.opacity = '0';

    // Reset transforms when hiding
    const sharkSvg = getSharkSvg();
    if (sharkSvg) {
      sharkSvg.style.transform = 'rotate(0deg)';
    }
    shark.style.transform = shark.style.transform.replace(/translateY\([^)]*\)/, '');

    // Clear SVG cache and scale reference
    sharkSvgRef.current = null;
    currentScaleXRef.current = 1;
  }, [stopIdleAnimation, getSharkSvg]);

  const handleNavMouseLeave = useCallback(() => {
    isMouseInteractingRef.current = false;
    // Don't restart animation here - let it continue if shark is visible
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Add event listeners to each link
    linkRefs.current.forEach((link, index) => {
      if (link) {
        const hoverHandler = () => handleLinkHover(index);
        hoverHandlersRef.current.set(index, hoverHandler);

        link.addEventListener('mouseenter', hoverHandler);
        link.addEventListener('mouseleave', handleLinkLeave);
      }
    });

    nav.addEventListener('mousemove', handleMouseMove);
    nav.addEventListener('mouseleave', handleNavMouseLeave);

    return () => {
      stopIdleAnimation();
      nav.removeEventListener('mousemove', handleMouseMove);
      nav.removeEventListener('mouseleave', handleNavMouseLeave);
      linkRefs.current.forEach((link, index) => {
        if (link) {
          const hoverHandler = hoverHandlersRef.current.get(index);
          if (hoverHandler) {
            link.removeEventListener('mouseenter', hoverHandler);
          }
          link.removeEventListener('mouseleave', handleLinkLeave);
        }
      });
      hoverHandlersRef.current.clear();
    };
  }, [handleMouseMove, handleLinkHover, handleLinkLeave, handleNavMouseLeave, stopIdleAnimation]);

  return (
    <nav className={styles.nav} ref={navRef}>
      <div ref={sharkRef} className={styles.shark}>
        <Shark />
      </div>

      <ul>
        {links.map((link, index) => (
          <li
            key={link.label}
            className={styles.navItem}
            ref={(el) => {
              linkRefs.current[index] = el;
            }}
          >
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Topbar;

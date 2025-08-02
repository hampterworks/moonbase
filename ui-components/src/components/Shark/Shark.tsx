"use client"
import React, { useRef, useCallback, useImperativeHandle, forwardRef } from 'react';
import styles from './Shark.module.css';
import SharkSVG from './SharkSVG';

export interface SharkRef {
  show: (x: number, y: number, scaleX: number) => void;
  showNextTo: (element: HTMLElement, container: HTMLElement, position: 'left' | 'right', options?: { verticalOffset?: number, horizontalOffset?: number }) => void;
  hide: () => void;
  startIdleAnimation: () => void;
  stopIdleAnimation: () => void;
  handleMouseMove: (e: MouseEvent) => void;
}

const Shark = forwardRef<SharkRef, { children?: React.ReactNode }>((props, ref) => {
  const sharkRef = useRef<HTMLDivElement>(null);
  const sharkSvgRef = useRef<SVGSVGElement | null>(null);
  const idleAnimationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const isMouseInteractingRef = useRef<boolean>(false);
  const lastMouseMoveRef = useRef<number>(0);
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
    const adjustedDeltaY = deltaY * verticalWeight;

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

  const show = useCallback((x: number, y: number, scaleX: number) => {
    const shark = sharkRef.current;
    if (!shark) {
      console.log('Shark ref not found');
      return;
    }

    // Store the current scale for mouse interaction calculations
    currentScaleXRef.current = scaleX;

    shark.style.opacity = '1';
    shark.style.left = `${x}px`;
    shark.style.top = `${y}px`;
    shark.style.transform = `translate(-50%, -50%) scaleX(${scaleX})`;

    // Clear any existing SVG cache since position changed
    sharkSvgRef.current = null;

    // Start idle animation immediately after positioning
    requestAnimationFrame(() => {
      startIdleAnimation();
    });
  }, [startIdleAnimation]);

  const showNextTo = useCallback((element: HTMLElement, container: HTMLElement, position: 'left' | 'right', options?: { verticalOffset?: number, horizontalOffset?: number }) => {
    if (!element || !container) return;

    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate position relative to container
    const elementCenterX = elementRect.left + elementRect.width / 2 - containerRect.left;
    const elementCenterY = elementRect.top + elementRect.height / 2 - containerRect.top;

    // Default offset values
    const verticalOffset = options?.verticalOffset ?? -20; // Default 20px up
    const horizontalOffset = options?.horizontalOffset ?? 30; // Default 30px

    // Shark dimensions
    const sharkWidth = 60;

    // Calculate shark position
    const baseOffset = elementRect.width / 2 + sharkWidth / 2 + horizontalOffset;
    let sharkX, scaleX;

    if (position === 'left') {
      sharkX = elementCenterX - baseOffset;
      scaleX = 1;
    } else { // right
      sharkX = elementCenterX + baseOffset;
      scaleX = -1;
    }

    // Apply vertical offset
    const adjustedSharkY = elementCenterY + verticalOffset;

    // Show the shark at calculated position
    show(sharkX, adjustedSharkY, scaleX);
  }, [show]);

  const hide = useCallback(() => {
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

  useImperativeHandle(ref, () => ({
    show,
    showNextTo,
    hide,
    startIdleAnimation,
    stopIdleAnimation,
    handleMouseMove
  }));

  return (
    <div ref={sharkRef} className={styles.shark}>
      <SharkSVG />
    </div>
  );
});

Shark.displayName = 'Shark';

export default Shark;

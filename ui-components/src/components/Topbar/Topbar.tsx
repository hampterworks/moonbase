"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useEffect, useCallback } from 'react';
import styles from './Topbar.module.css';
import Shark, { SharkRef } from '../Shark/Shark';

const links = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'ABOUT',
    href: '/about',
  },
  {
    label: 'MUSIC',
    href: '/music',
  },
  {
    label: 'LINKS',
    href: '/links',
  },
];

const Topbar: React.FC = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const sharkRef = useRef<SharkRef>(null);
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const hoverHandlersRef = useRef<Map<number, () => void>>(new Map());

  // Helper function to check if link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '';
    }
    // Remove trailing slash for comparison
    const cleanPathname = pathname.replace(/\/$/, '');
    const cleanHref = href.replace(/\/$/, '');
    return cleanPathname === cleanHref;
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (sharkRef.current) {
      sharkRef.current.handleMouseMove(e);
    }
  }, []);

  const handleLinkHover = useCallback((index: number) => {
    const ul = ulRef.current;
    const link = linkRefs.current[index];
    if (!link || !ul || !sharkRef.current) return;

    const position = index < 2 ? 'left' : 'right';
    sharkRef.current.showNextTo(link, ul, position, { verticalOffset: -20 });
  }, []);

  const handleLinkLeave = useCallback(() => {
    if (sharkRef.current) {
      sharkRef.current.hide();
    }
  }, []);

  const handleNavMouseLeave = useCallback(() => {
    // Let the shark component handle its own mouse leave logic
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

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
      if (sharkRef.current) {
        sharkRef.current.stopIdleAnimation();
      }
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
  }, [handleMouseMove, handleLinkHover, handleLinkLeave, handleNavMouseLeave]);

  return (
    <nav className={styles.nav} ref={navRef}>
      <Shark ref={sharkRef} />
      <ul ref={ulRef}>
        {links.map((link, index) => (
          <li
            key={link.label}
            className={styles.navItem}
            ref={(el) => {
              linkRefs.current[index] = el;
            }}
          >
            <Link
              href={link.href}
              className={isActiveLink(link.href) ? styles.active : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Topbar;

import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { Metadata } from 'next';
import { businessLinks, socialLinks, streamingLinks } from '../../../data/linksData';

export const metadata: Metadata = {
  title: 'Links - Atlamoon',
  description: 'Connect with Atlamoon across all platforms. Find links to music streaming services, Twitch channel, social media, and more.',
}

const Links = () => {
  return (
    <main className={styles.linksPageContainer}>
      <section>
        <nav className={styles.socialLinks}>
          <ul>
            {
              streamingLinks.map((link, index) =>
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>)
            }
          </ul>
          <ul>
            {
              businessLinks.map((link, index) =>
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>)
            }
          </ul>
          <ul>
            {
              socialLinks.map((link, index) =>
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>)
            }
          </ul>
        </nav>
      </section>
      <section className="imageContainer">
        <Image
          src={getImageSrc("/moonlinks.png")}
          alt="Moon"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </section>
    </main>
  );
}

export default Links

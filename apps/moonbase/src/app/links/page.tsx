import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { Metadata } from 'next';

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
            <a>
              TWITCH
            </a>
            <a>
              YOUTUBE
            </a>
            <a>
              SPOTIFY
            </a>
            <a>
              AMAZON
            </a>
          </ul>
          <ul>
            <a>HUATGG</a>
            <a>THRONE</a>
            <a>UMUMARKET</a>
            <a>VGEN</a>
            <a>ROGUE</a>
            <a>KO-FI</a>
          </ul>
          <ul>
            <a>INSTAGRAM</a>
            <a>TWITTER</a>
            <a>TIKTOK</a>
            <a>BANDLAB</a>
            <a>Discord</a>
          </ul>
        </nav>
      </section>
      <section className="imageContainer">
        <Image
          src={getImageSrc("/moonmain.png")}
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

import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';

const merchLinks = [
  {
    title: 'Waters',
    year: 2025,
    links: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=_akAYDUnoVo',
      },
      {
        type: 'spotify',
        url: 'https://open.spotify.com/album/6AcPD4YZwBt68o0qzzbSvN',
      },
    ],
  },
  {
    title: 'Chokehold',
    year: 2024,
    links: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=QUzSLggfW-E',
      },
      {
        type: 'spotify',
        url: 'https://open.spotify.com/album/5YMGOBoA14zR7MV3tqP81O',
      },
    ],
  },
  {
    title: 'You Bring Me Life',
    year: 2024,
    links: [
      {
        type: 'spotify',
        url: 'https://open.spotify.com/artist/72IVayeIvKRwJgbgxQzxZZ',
      },
    ],
  },
]

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

import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { SpotifyIcon, YoutubeIcon } from '@/app/music/page';

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

const Merch = () => {
  return (
    <main className={styles.merchPageContainer}>
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
      <section>
        <nav>
          <ul>

          </ul>
        </nav>
      </section>
    </main>
  );
}

export default Merch

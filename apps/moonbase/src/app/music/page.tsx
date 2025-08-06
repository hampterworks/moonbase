import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { Ticket } from '@moonbase/ui-components';
import { Metadata } from 'next';

const atlamoonSongs = {
  original_songs: [
    {
      title: 'Waters',
      year: 2025,
      language: 'en',
      time: '2:26',
      backgroundImg: getImageSrc('/waters.png'),
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
      language: 'en',
      time: '2:55',
      feature: 'Ft. Karl Francis',
      backgroundImg: getImageSrc('/chokehold.png'),
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
      language: 'en',
      time: '3:28',
      backgroundImg: getImageSrc('/life.png'),
      links: [
        {
          type: 'youtube',
          url: 'https://youtu.be/iBaQyqmU-28?si=FjnWtnalFF18KUWD',
        },
        {
          type: 'spotify',
          url: 'https://open.spotify.com/artist/72IVayeIvKRwJgbgxQzxZZ',
        },
      ],
    },
    {
      title: 'On my screen',
      year: 2024,
      language: 'en',
      time: '3:55',
      backgroundImg: getImageSrc('/screen.png'),
      links: [
        {
          type: 'youtube',
          url: 'https://youtu.be/t22vTOK-Z5Y?si=jOlGwVUXHMF9v6Nu',
        },
      ],
    },
    {
      title: 'Poison',
      year: 2021,
      language: 'en',
      time: '4:36',
      backgroundImg: getImageSrc('/poison.png'),
      links: [
        {
          type: 'youtube',
          url: 'https://youtu.be/5OC7foAhpZA?si=fx9WLXQIeRqAc_Vd',
        },
        {
          type: 'spotify',
          url: 'https://open.spotify.com/artist/72IVayeIvKRwJgbgxQzxZZ',
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: 'Music - Atlamoon',
  description: 'Discover Atlamoon\'s latest tracks',
}

const Music = () => {
  return (
    <main className={styles.musicPageContainer}>
      <section className={styles.imageContainer}>
        <Image
          src={getImageSrc('/moonmain.png')}
          alt="Moon"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </section>
      <section className={styles.originalSongsSection}>
        <h2>original songs</h2>
        <div>
          <ul>
            {atlamoonSongs.original_songs.map((song, index) => (
              <Ticket
                key={song.title}
                year={song.year}
                title={song.title}
                language="en"
                time={song.time}
                links={song.links}
                feature={song.feature}
                backgroundImg={song.backgroundImg}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.videoSection}>
        <h2>song covers</h2>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/videoseries?si=rij9xGsV4AHzglul&amp;list=PL0ioG6SjHh9UgcreBq2HGhzwAL1KuBlqT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Music;

import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { Ticket } from '@moonbase/ui-components';
import { Metadata } from 'next';
import { atlamoonSongs } from '../../../data/originalSongData';

export const metadata: Metadata = {
  title: 'Music - Atlamoon',
  description: "Discover Atlamoon's latest tracks",
};

const Music = () => {
  return (
    <main className={styles.musicPageContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.imageContainer}>
          <Image
            src={getImageSrc('/moonmusic.png')}
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
              {atlamoonSongs.map((song, index) => (
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
      </div>
      <section className={styles.videoSection}>
        <h2>song covers</h2>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PL0ioG6SjHh9UgcreBq2HGhzwAL1KuBlqT&listType=playlist&rel=0"
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

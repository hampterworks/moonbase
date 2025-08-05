import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { SpotifyIcon, Ticket, YoutubeIcon } from '@moonbase/ui-components';

const atlamoonSongs = {
  original_songs: [
    {
      title: 'Waters',
      year: 2025,
      language: 'en',
      time: '2:26',
      backgroundImg: '/waters.png',
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
      backgroundImg: '/chokehold.png',
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
      backgroundImg: '/life.png',
      links: [
        {
          type: 'spotify',
          url: 'https://open.spotify.com/artist/72IVayeIvKRwJgbgxQzxZZ',
        },
      ],
    },
    {
      title: 'Poison',
      year: 2021,
      language: 'en',
      time: '4:36',
      backgroundImg: '/poison.png',
      links: [
        {
          type: 'spotify',
          url: 'https://open.spotify.com/artist/72IVayeIvKRwJgbgxQzxZZ',
        },
      ],
    },
  ],
}

export type Link = {
  type: string
  url: string
}

type SongRowProps = {
  song: {
    title: string
    original_artist?: string | null
    year?: number
    links: Link[]
  }
  index: number
}

const SongRow = ({ song, index }: SongRowProps) => {
  return <li key={index} className={styles.songRow}>
    {song.year && <span>{song.year}</span>}
    <h3>{song.title}</h3>
    {song.original_artist && <span className={styles.artistTag}>{song.original_artist}</span>}
    <div>
      {
        song.links.map((link, linkIndex) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={linkIndex}
          >
            {
              link.type === 'youtube' ? <YoutubeIcon/> : <SpotifyIcon/>
            }
          </a>
        ))
      }
    </div>
  </li>
}

const Music = () => {
  return (
    <main className={styles.musicPageContainer}>
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
      <div>
        <section className={styles.originalSongsSection}>
          <h2>original songs</h2>
          <div>
            <ul>
              {atlamoonSongs.original_songs.map((song, index) => (
                <Ticket
                  key={song.title}
                  year={song.year}
                  title={song.title}
                  language='en'
                  time={song.time}
                  links={song.links}
                  feature={song.feature}
                  backgroundImg={song.backgroundImg}
                />
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.coversSection}>
          <h2>song covers</h2>
          <div>
            {/*<ul>*/}
            {/*  {atlamoonSongs.cover_songs.map((song, index) => (*/}
            {/*    <SongRow key={index} song={song} index={index} />*/}
            {/*  ))}*/}
            {/*</ul>*/}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Music

import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import { getImageSrc } from '@/app/imageLoaderFunction';

const atlamoonSongs = {
  original_songs: [
    {
      title: 'Waters',
      year: 2025,
      language: 'en',
      time: '2:26',
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
  ],
  cover_songs: [
    {
      title: 'How Do You Sleep',
      original_artist: 'Sam Smith',
      links: [
        {
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=euPDVMthx80',
        },
      ],
    },
    {
      title: 'MAMMAMIA',
      original_artist: null,
      links: [
        {
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=tQRMasH4J28',
        },
      ],
    },
    {
      title: 'Starlight',
      original_artist: 'Muse',
      links: [
        {
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=JIMFCFqhx9I',
        },
      ],
    },
    {
      title: "I'd Rather Pretend",
      original_artist: 'Bryant Barnes',
      links: [
        {
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=ik3onswRgjY',
        },
      ],
    },
    {
      title: "Can't Help Falling in Love",
      original_artist: 'Elvis Presley',
      links: [
        {
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=etK7W4WqzxU',
        },
      ],
    },
    {
      title: 'Stay with Me (Acoustic)',
      original_artist: null,
      links: [
        {
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=t6pCH4V3zDI',
        },
      ],
    },
    {
      title: 'Almost (Anime Cover)',
      original_artist: null,
      links: [
        {
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=4R4tMG40TQo',
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
                <SongRow key={index} song={song} index={index} />
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.coversSection}>
          <h2>song covers</h2>
          <div>
            <ul>
              {atlamoonSongs.cover_songs.map((song, index) => (
                <SongRow key={index} song={song} index={index} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Music

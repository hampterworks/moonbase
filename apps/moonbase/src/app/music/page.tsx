import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';

const atlamoonSongs = {
  original_songs: [
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
const YoutubeIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
          fill="#FF0002"
        />

        <path
          d="M31.044,42.269916 L31.0425,28.6877416 L44.0115,35.5022437 L31.044,42.269916 Z M59.52,26.3341627 C59.52,26.3341627 59.0505,23.003199 57.612,21.5363665 C55.7865,19.610299 53.7405,19.6012352 52.803,19.4894477 C46.086,19 36.0105,19 36.0105,19 L35.9895,19 C35.9895,19 25.914,19 19.197,19.4894477 C18.258,19.6012352 16.2135,19.610299 14.3865,21.5363665 C12.948,23.003199 12.48,26.3341627 12.48,26.3341627 C12.48,26.3341627 12,30.2467232 12,34.1577731 L12,37.8256098 C12,41.7381703 12.48,45.6492202 12.48,45.6492202 C12.48,45.6492202 12.948,48.9801839 14.3865,50.4470165 C16.2135,52.3730839 18.612,52.3126583 19.68,52.5135736 C23.52,52.8851913 36,53 36,53 C36,53 46.086,52.9848936 52.803,52.4954459 C53.7405,52.3821478 55.7865,52.3730839 57.612,50.4470165 C59.0505,48.9801839 59.52,45.6492202 59.52,45.6492202 C59.52,45.6492202 60,41.7381703 60,37.8256098 L60,34.1577731 C60,30.2467232 59.52,26.3341627 59.52,26.3341627 L59.52,26.3341627 Z"
          fill="#FFF"
        />
      </g>
    </svg>
  )
}

const SpotifyIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Color-"
          transform="translate(-200.000000, -460.000000)"
          fill="#00DA5A"
        >
          <path
            d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460"
            id="Spotify"
          ></path>
        </g>
      </g>
    </svg>
  )
}

type Link = {
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
          src="/moonmain.png"
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
              {atlamoonSongs.original_songs.map((song, index) =>
                <SongRow key={index} song={song} index={index} />)}
            </ul>
          </div>
        </section>
        <section className={styles.coversSection}>
          <h2>song covers</h2>
          <div>
            <ul>
              {atlamoonSongs.cover_songs.map((song, index) =>
                <SongRow key={index} song={song} index={index} />)}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Music

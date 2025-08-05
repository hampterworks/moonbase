import styles from './page.module.css';
import Image from 'next/image';
import { getImageSrc } from '@/app/imageLoaderFunction';

const socialLinks = [
  {
    name: 'TWITCH',
    url: 'https://www.twitch.tv/atlamoon',
  },
  {
    name: 'YOUTUBE',
    url: 'https://www.youtube.com/channel/UCgJAnRBvrfScomnp3F45B5w',
  },
  {
    name: 'SPOTIFY',
    url: 'https://open.spotify.com/artist/72IVayeIvKRwJgbgxQzxZZ',
  },
  {
    name: 'AMAZON',
    url: 'https://music.amazon.com/artists/B0DNSHMX5Q/atlamoon',
  },
  {
    name: 'APPLE',
    url: 'https://music.apple.com/za/artist/atlamoon/1781142958',
  },
  {
    name: 'UMUMARKET',
    url: 'https://uwumarket.us/collections/atlamoon',
  },
  {
    name: 'HUATGG',
    url: 'https://huat.gg/collections/atlamoon',
  },
  {
    name: 'ROGUE',
    url: 'https://uwumarket.us/collections/atlamoon',
  },
  {
    name: 'VGEN',
    url: 'https://vgen.co/AtlaMoon',
  },
  {
    name: 'KO-FI',
    url: 'https://ko-fi.com/atlamoon',
  },
  {
    name: 'THRONE',
    url: 'https://throne.com/atlamoon',
  },
  {
    name: 'INSTAGRAM',
    url: 'https://www.instagram.com/atlamoonvt/',
  },
  {
    name: 'TWITTER',
    url: 'https://x.com/AtlaMoonn',
  },
  {
    name: 'TIKTOK',
    url: 'https://www.tiktok.com/@AtlaMoon',
  },
  {
    name: 'BANDLAB',
    url: 'https://www.bandlab.com/atlamoon',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/SfzETnY',
  },
];

const About = () => {
  const itemsPerRow = 4; // Now 4 items per row

  const getRowNumber = (index: number) => {
    return Math.floor(index / itemsPerRow);
  };

  return (
    <main className='pageContainer'>
      <section className="imageContainer">
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
      <section className={styles.aboutSection}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque
          sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
          condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
          fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque
          sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
          condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
          fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        </p>
      </section>
    </main>
  );
}

export default About

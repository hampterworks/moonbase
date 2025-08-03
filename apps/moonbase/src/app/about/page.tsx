import styles from './page.module.css';
import Image from 'next/image';
import { getImageSrc } from '@/app/imageLoaderFunction';

const socialLinks = [
  {
    name: 'TWITCH',
    url: 'https://www.twitch.tv/atlamoon',
    tier: 'headliner'
  },
  {
    name: 'YOUTUBE',
    url: 'https://www.youtube.com/channel/UCgJAnRBvrfScomnp3F45B5w',
    tier: 'headliner'
  },
  {
    name: 'SPOTIFY',
    url: 'https://open.spotify.com/artist/72IVayeIvKRwJgbgxQzxZZ',
    tier: 'main'
  },
  {
    name: 'AMAZON',
    url: 'https://music.amazon.com/artists/B0DNSHMX5Q/atlamoon',
    tier: 'main'
  },
  {
    name: 'APPLE',
    url: 'https://music.apple.com/za/artist/atlamoon/1781142958',
    tier: 'main'
  },
  {
    name: 'UMUMARKET',
    url: 'https://uwumarket.us/collections/atlamoon',
    tier: 'main'
  },
  {
    name: 'HUATGG',
    url: 'https://huat.gg/collections/atlamoon',
    tier: 'main'
  },
  {
    name: 'ROGUE',
    url: 'https://uwumarket.us/collections/atlamoon',
    tier: 'main'
  },
  {
    name: 'VGEN',
    url: 'https://vgen.co/AtlaMoon',
    tier: 'support'
  },
  {
    name: 'KO-FI',
    url: 'https://ko-fi.com/atlamoon',
    tier: 'main'
  },
  {
    name: 'THRONE',
    url: 'https://throne.com/atlamoon',
    tier: 'main'
  },
  {
    name: 'INSTAGRAM',
    url: 'https://www.instagram.com/atlamoonvt/',
    tier: 'support'
  },
  {
    name: 'TWITTER',
    url: 'https://x.com/AtlaMoonn',
    tier: 'support'
  },
  {
    name: 'TIKTOK',
    url: 'https://www.tiktok.com/@AtlaMoon',
    tier: 'support'
  },
  {
    name: 'BANDLAB',
    url: 'https://www.bandlab.com/atlamoon',
    tier: 'support'
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/SfzETnY',
    tier: 'support'
  },
];

const About = () => {
  const itemsPerRow = 4; // Now 4 items per row

  const getRowNumber = (index: number) => {
    return Math.floor(index / itemsPerRow);
  };

  return (
    <main className="pageContainer">
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
        <nav className={styles.socialSection}>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  style={
                    { '--row': getRowNumber(index) } as React.CSSProperties
                  }
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default About

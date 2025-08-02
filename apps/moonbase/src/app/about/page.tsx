import styles from './page.module.css';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'YOUTUBE',
    url: 'https://youtube.com/@atlamoon',
    tier: 'headliner'
  },
  {
    name: 'TWITCH',
    url: 'https://twitch.tv/atlamoon',
    tier: 'headliner'
  },
  {
    name: 'SPOTIFY',
    url: 'https://spotify.com/artist/atlamoon',
    tier: 'main'
  },
  {
    name: 'THRONE',
    url: 'https://soundcloud.com/atlamoon',
    tier: 'main'
  },
  {
    name: 'INSTAGRAM',
    url: 'https://instagram.com/atlamoon',
    tier: 'support'
  },
  {
    name: 'TWITTER',
    url: 'https://twitter.com/atlamoon',
    tier: 'support'
  },
  {
    name: 'VGEN',
    url: 'https://instagram.com/atlamoon',
    tier: 'support'
  },
];

const About = () => {
  return (
    <main className={styles.page}>
      <section className={styles.imageContainer}>
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
      <section className={styles.aboutSection}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        </p>
        <nav className={styles.socialSection}>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles[link.tier]}`}
                >
                  {link.name}
                </a>
                {index < socialLinks.length - 1 && (
                  <span className={styles.separator}>■</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  )
}

export default About

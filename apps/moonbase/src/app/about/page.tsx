import styles from './page.module.css';
import Image from 'next/image';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Atlamoon',
  description: 'Learn more about Atlamoon',
}

const About = () => {
  return (
    <main className={styles.aboutPageContainer}>
      <section className={styles.imageContainer}>
        <Image
          src={getImageSrc('/moonabout.png')}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
          Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.
        </p>
        <section className={`${styles.imageContainer} ${styles.mobileImageContainer}`}>
          <Image
            src={getImageSrc('/moonabout.png')}
            alt="Moon"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            style={{
              objectFit: 'contain',
            }}
          />
        </section>
        <ul>
          <li>Sample facts:</li>
          <li>Placeholder text for interesting fact number one.</li>
          <li>Another placeholder for a fun fact or detail.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Sample text for an interesting personal detail.</li>
          <li>Placeholder for a memorable experience or story.</li>
          <li>Final placeholder for a favorite thing or preference.</li>
        </ul>

      </section>
    </main>
  );
}

export default About

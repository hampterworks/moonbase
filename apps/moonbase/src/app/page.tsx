import Image from 'next/image';
import styles from './page.module.css';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Atlamoon',
  description: 'Welcome to Atlamoon - Musician, producer, singer and Twitch streamer.',
}


const Index = () => {
  return (
    <div className={styles.page}>
      <div className={styles.imageWrapper}>
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
      </div>
      <button className={styles.button}>
        <a href="https://www.twitch.tv/atlamoon/">WATCH NOW</a>
      </button>
    </div>
  )
}

export default Index;

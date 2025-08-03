'use client'
import Image from 'next/image';
import styles from './page.module.css';
import { getImageSrc } from '@/app/imageLoaderFunction';

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
        <a href="">WATCH NOW</a>
      </button>
    </div>
  )
}

export default Index;

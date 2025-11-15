import styles from './page.module.css';
import Image from 'next/image';
import { getImageSrc } from '@/app/imageLoaderFunction';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Atlamoon',
  description: 'Learn more about Atlamoon',
};

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
        <h2>Hi Moonray,</h2>
        <p>
          I'm AtlaMoon! A musician, producer, and Twitch streamer. I
          sing and play a bunch of instruments, like drums, bass guitar, guitar,
          piano, ukelele, and (of course) the kazoo! Besides my music, I am
          known for organizing big events (like 2D concerts and talent shows),
          setting up Team NeuroSpicy (an inclusive community where
          neurodivergent streamers can find each other for collabing or just
          chatting), and my freelance graphic design work.
        </p>
        <p>
          Before becoming a streamer, I would have never thought that I could do
          music! That changed when I got into VRChat and stumbled upon the music
          community there. I tried singing for a small group of friends and they
          told me that my sound was soothing and comforting. They also told me
          that I should try streaming music! This all happened during my
          vacation, so I had enough time on my hands and decided to give it a
          try.
        </p>
        <p>
          During that vacation I streamed twice a day. This way I could reach as
          many people across different timezones. I decided to stream music for
          anyone dealing with anxiety, stress, or just looking for comfy music.
          That was all the way back in 2022. Since then I have learned a lot
          about streaming, content creation, and growing a wonderful community
          (I love my Moonrays)! Nowadays, you'll hear me play a mix of original
          work and covers across different genres on stream. My work is also
          available on <Link href={'/links'}>other platfroms</Link>.
        </p>
        <p>
          My OC's have always been based around a space theme. I have always
          been a very big space nerd. I also love the ocean, since it reminds me
          of space on earth. The ocean is filled with some of my favorite
          animals. That's how I got to the manta ray OC! I love manta rays.
          They're so gentle and majestic. Did you know that sharks and manta
          rays are family? That's why we have Sharkira, our sharky friend (and I
          guess family of mine?), as our mascot.
        </p>
        <p>Thank you for visiting! See you on stream ~ AtlaMoon</p>
        <section
          className={`${styles.imageContainer} ${styles.mobileImageContainer}`}
        >
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
          <li>FACTS ABOUT THE MOON</li>
          <li>
            Has a secret talent for sounding like an Animal Crossing character
          </li>
          <li>Loves Interstellar (seen it 6 times (and counting))</li>
          <li>LOVES cooking and baking</li>
          <li>Prefers to leave this life, if so required, into a black hole</li>
          <li>
            Memorized over 90% of the script for the Bee movie for an on-stream
            redeem
          </li>
        </ul>
        <ul>
          <li>FAVORITES</li>
          <li>Food: Sushi</li>
          <li>Movie: Interstellar</li>
          <li>Colors: Manta Ray Blue, Peach, Sage Green</li>
          <li>Numbers: 3, 7, 8, 13</li>
          <li>Animals: Manta Ray, Shark, Orca, Seal, Pika</li>
          <li>Oshi Marks: 🌙🌊</li>
        </ul>
      </section>
    </main>
  );
};

export default About;

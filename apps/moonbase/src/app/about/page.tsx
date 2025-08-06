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
          Hi im Atlamoon a Musician, producer, singer and Twitch streamer. I play drums, bass guitar, guitar, piano, uke and of course the Kazoo ~

          I started streaming about 4-5 years ago? With many breaks in between. What led me to streaming was mostly VRChat.
          Before I got into VRChat, I was mostly muted online. Never really liked my voice or thought I could do music until I found the music community.
          I tried singing for a very small group of friends and they told me it comforted them and that I should stream.
          It was my vacation so I streamed 2 times a day for people who couldn&#39;t sleep. I tried to cover as many timezones as possible and would sing and play for people who dealt with anxiety and stress,etc
          Since then my community started growing.
        </p>
        <p>
          My OCs always had been based around something with space. I&#39;m a big space nerd, always have been.
          I also love the ocean as it reminds me of space on earth. hence why I got to the manta ray oc! I love manta rays. They're so gentle and majestic ~
          Slowly learned more about content and became a fan of streaming music for my community. Been organizing big events, like 2d concerts, talent shows and set up a big community for neurodivergent people to find friends on twitch, set up collabs and have more people around them who understand.
        </p>
        <ul>
          <li>Moon facts:</li>
          <li>I have a secret talent to sound like an animal crossing character.</li>
          <li>My favorite movie is Interstellar (seen it 6 times)</li>
          <li>I LOVE cooking and baking</li>
          <li>If I were to die, I want to die in a blackhole</li>
          <li>I memorized 90% of the bee movie scrips as it was a stream redeem</li>
          <li>My fav food is sushi</li>
        </ul>
      </section>
    </main>
  );
}

export default About

import { ApplicationFrame } from '@moonbase/ui-components';
import { League_Spartan, Inter } from 'next/font/google';
import './global.css';
import { getImageSrc } from '@/app/imageLoaderFunction';

export const metadata = {
  metadataBase: new URL('https://hampterworks.github.io/moonbase/'),
  title: 'Atlamoon',
  description: 'Hi im Atlamoon a Musician, producer, singer and Twitch streamer.',
  icons: {
    icon: getImageSrc('/favicon.ico'),
  },
  openGraph: {
    title: 'Atlamoon - Musician & Twitch Streamer',
    description: 'Welcome to Atlamoon - Musician, producer, singer and Twitch streamer.',
    url: 'https://hampterworks.github.io/moonbase/',
    siteName: 'Atlamoon',
    images: [
      {
        url: '/rimunrimun.png',
        width: 500,
        height: 500,
        alt: 'Atlamoon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlamoon - Musician & Twitch Streamer',
    description: 'Welcome to Atlamoon - Musician, producer, singer and Twitch streamer.',
    images: ['/rimunrimun.png'],
  }
}

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-league-spartan',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${inter.variable} h1`}
        style={
          {
            '--bg-image': `url("${process.env.CUSTOM_BASE_PATH || ''}/bg.png")`,
          } as React.CSSProperties
        }
      >
        <ApplicationFrame>{children}</ApplicationFrame>
      </body>
    </html>
  );
}

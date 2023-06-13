import './globals.css';
import { Noto_Sans, Bodoni_Moda, Cormorant_Garamond } from 'next/font/google';
import Header from '../components/header'

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto',
});

const bodoni = Bodoni_Moda({
  variable: '--font-bodoni',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cormorant',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${cormorant.variable} ${bodoni.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

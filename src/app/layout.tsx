import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import { ReactLenis } from './utils/lenis';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: [ 'latin' ],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: [ 'latin' ],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: [ 'latin' ],
  weight: [ '300', '400', '500', '700', '900' ],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: [ 'latin' ],
  weight: [ '200', '300', '400', '500', '600', '700', '800' ],
});

export const metadata: Metadata = {
  title: 'Termicons',
  description: 'Termicons is a collection of icons for the terminal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${plusJakartaSans.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}

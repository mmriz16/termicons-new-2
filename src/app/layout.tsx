import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono as GeistMono, Roboto, Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google';
import './globals.css';

import { ReactLenis } from './utils/lenis';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: [ 'latin' ],
});

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: [ 'latin' ],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: [ 'latin' ],
  weight: [ '300', '400', '500', '700', '900' ],
});

const plusJakartaSans = PlusJakartaSans({
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

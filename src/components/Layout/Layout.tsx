import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });
type props = { children : ReactNode };

export const metadata = {
  title: 'portfolio.',
  description: 'samuel adamson | software engineer.',
};

export const Layout = ({ children, }: props) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
};

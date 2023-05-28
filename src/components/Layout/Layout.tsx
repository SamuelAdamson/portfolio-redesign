import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Menu, SplashMenu, Footer } from './components';

const inter = Inter({ subsets: ['latin'] });
type props = { children : ReactNode };

export const metadata = {
  title: 'portfolio.',
  description: 'samuel adamson | software engineer.',
};

export const Layout = ({ children, }: props) => {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
};
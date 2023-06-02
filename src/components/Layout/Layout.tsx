import { Inter } from 'next/font/google';
import { ReactNode, useState, useEffect } from 'react';
import { Menu, SplashMenu, Footer } from './components';
import { Container } from '../Utility';
import { menuLinks } from './links';

const inter = Inter({ subsets: ['latin'] }); // font
type props = { children : ReactNode };

export const metadata = {
  title: 'portfolio.',
  description: 'samuel adamson | software engineer.',
};

export const Layout = ({ children, }: props) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    // TODO change condition on menu vs splash menu
    <>
      {width > 1024 ? <Menu links={menuLinks} /> : <SplashMenu links={menuLinks} />}
      <Container className={inter.className}>
        {children}
      </Container>
    </>
  );
};
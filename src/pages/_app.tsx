import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

export default function Home({ Component, pageProps, }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />  
    </Layout>
  )
};

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { client } from '@/apollo/client';
import { ApolloProvider } from '@apollo/client';

import { Navigation } from '@/components/layout/Navigation/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

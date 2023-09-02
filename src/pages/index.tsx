import Head from 'next/head';

import { Histories } from '@/components/features/Histories/Histories';

import { paths } from '@/utils/paths';

export default function Home() {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name='description' content={`Read about news`} />
        <meta property='og:title' content={`News`} />
        <meta property='og:description' content={`Read about news`} />
        <link rel='canonical' href={`https://myApp${paths.histories}/`} />
      </Head>
      <Histories />
    </>
  );
}

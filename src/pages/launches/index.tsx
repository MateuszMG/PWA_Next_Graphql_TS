import Head from 'next/head';

import { Launches } from '@/components/features/Launches/Launches';

import { paths } from '@/utils/paths';

export default function LaunchesPage() {
  return (
    <>
      <Head>
        <title>Launches</title>
        <meta name='description' content={`Read about launches`} />
        <meta property='og:title' content={`Launches`} />
        <meta property='og:description' content={`Read about launches`} />
        <link rel='canonical' href={`https://myApp${paths.launches}/`} />
      </Head>
      <Launches />
    </>
  );
}

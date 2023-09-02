import { HISTORY_QUERY } from '@/graphql/histories';
import Head from 'next/head';

import { client } from '@/apollo/client';

import { History, HistoryProps } from '@/components/features/History/History';
import { ErrorBox } from '@/components/globals/ErrorBox/ErrorBox';

import { paths } from '@/utils/paths';
import { createHistoryStaticPaths } from '@/utils/staticPaths/history';

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: createHistoryStaticPaths(),
  };
}

interface Context {
  params: { id: string };
}

export async function getStaticProps(context: Context) {
  const { data } = await client.query({
    query: HISTORY_QUERY,
    variables: {
      id: context.params.id,
    },
  });

  return {
    props: {
      history: data.history,
    },
  };
}

export default function HistoryPage({ history }: HistoryProps) {
  if (!history) return <ErrorBox />;

  return (
    <div>
      <Head>
        <title>{history.title}</title>
        <meta name='description' content={history.details} />
        <meta property='og:title' content={history.title} />
        <meta property='og:description' content={history.details} />
        <link
          rel='canonical'
          href={`https://myApp${paths.history(history.id)}/`}
        />
      </Head>
      <History history={history} />
    </div>
  );
}

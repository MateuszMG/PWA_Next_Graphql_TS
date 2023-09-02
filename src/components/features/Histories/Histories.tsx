import Link from 'next/link';

import { paths } from '@/utils/paths';

import { ErrorBox } from '../../globals/ErrorBox/ErrorBox';
import { Loader, LoaderSize } from '../../globals/Loader/Loader';
import styles from './Histories.module.css';
import { useHistories } from './useHistories';

export const Histories = () => {
  const { error, hasMore, histories, loading, scrollRef } = useHistories();

  if (error) return <ErrorBox />;

  return (
    <main>
      <h1>Top stories</h1>

      <article className={styles.article}>
        {histories.map((item) => (
          <section key={item.id} className={styles.section}>
            <h2>{item.title}</h2>
            <Link key={item.id} href={paths.history(item.id)}>
              See article
            </Link>
          </section>
        ))}
      </article>

      {hasMore && (
        <div className={styles.scrollRef} ref={scrollRef}>
          {loading && (
            <Loader.Wrapper>
              <Loader size={LoaderSize.big} />
            </Loader.Wrapper>
          )}
        </div>
      )}
    </main>
  );
};

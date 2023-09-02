import { HistoryFragment } from '@/graphql/histories';

import styles from './History.module.css';

export interface HistoryProps {
  history: HistoryFragment;
}

export const History = ({ history }: HistoryProps) => {
  return (
    <main className={styles.pageWrapper}>
      <h1> {history.title} </h1>
      <p> {history.details} </p>
    </main>
  );
};

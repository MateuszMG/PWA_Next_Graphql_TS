import Link from 'next/link';

import { paths } from '@/utils/paths';

import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} href={paths.histories}>
        Feed
      </Link>
      <Link className={styles.link} href={paths.launches}>
        Explore
      </Link>
    </nav>
  );
};

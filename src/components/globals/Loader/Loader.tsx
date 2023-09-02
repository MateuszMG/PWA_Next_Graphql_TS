import { ReactNode } from 'react';
import { PulseLoader } from 'react-spinners';

import styles from './Loader.module.css';

export enum LoaderSize {
  small = 10,
  big = 50,
}

interface LoaderProps {
  size?: LoaderSize;
}

export const Loader = ({ size }: LoaderProps) => {
  return (
    <div className={styles.loader}>
      <PulseLoader
        className={styles.spinner}
        loading={true}
        size={size || LoaderSize.small}
      />
    </div>
  );
};

interface LoaderWrapper {
  children: ReactNode;
}

Loader.Wrapper = ({ children }: LoaderWrapper) => (
  <div className={styles.wrapper}>{children}</div>
);

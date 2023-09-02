import { ReactNode } from 'react';

import styles from './ErrorBox.module.css';

interface ErrorBoxProps {
  children?: ReactNode;
}

export const ErrorBox = ({ children }: ErrorBoxProps) => {
  return (
    <div className={styles.errorWrapper}>
      {children || <h1>Something went wrong... Please try again later</h1>}
    </div>
  );
};

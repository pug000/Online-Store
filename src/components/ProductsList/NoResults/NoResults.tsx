import { memo } from 'react';

import styles from './NoResults.module.scss';

interface NoResultsProps {
  text: string;
}

function NoResults({ text }: NoResultsProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
}

export default memo(NoResults);

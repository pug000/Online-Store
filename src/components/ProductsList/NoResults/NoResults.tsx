import { memo } from 'react';

import styles from './NoResults.module.scss';

interface NoResultsProps {
  text: string;
}

function NoResults({ text }: NoResultsProps) {
  return (
    <div className={styles.noResultWrapper}>
      <h2 className={styles.noResultWrapperTitle}>{text}</h2>
    </div>
  );
}

export default memo(NoResults);

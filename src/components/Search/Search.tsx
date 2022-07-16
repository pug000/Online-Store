import React, { FC } from 'react';

import styles from './Search.module.scss';

export const Search: FC = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <input className={styles.searchWrapperInput} type="text" placeholder='Поиск по названию' />
        <button className={styles.searchWrapperClearBtn}></button>
      </div>
    </div>
  )
}
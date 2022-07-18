import React, { FC } from 'react';
import { SearchProps } from '../../../ts/interfaces';

import styles from './Search.module.scss';

export const Search: FC<SearchProps> = (
  {
    value,
    onChange,
    clearOnClick,
  }
) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <input className={styles.searchWrapperInput}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder='Поиск по названию'
          autoFocus
        />
        <button
          onClick={clearOnClick}
          className={
            value.length <= 0
              ? `${styles.searchWrapperClearBtn}`
              : `${styles.searchWrapperClearBtn} ${styles.searchWrapperClearBtnActive}`
          }
        ></button>
      </div>
    </div>
  )
}
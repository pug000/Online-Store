import React, { FC } from 'react';

import styles from './Search.module.scss';

const Search: FC = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <input className={styles.searchWrapperInput} type="text" placeholder='Поиск по названию' />
        <button className={styles.searchWrapperClearBtn}></button>
      </div>
    </div>
  )
}

export default Search;
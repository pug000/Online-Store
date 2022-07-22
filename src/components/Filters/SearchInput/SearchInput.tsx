import React, { FC } from 'react';
import { eventHandler } from '../../../ts/types';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  value: string;
  onChange: eventHandler<React.ChangeEvent<HTMLInputElement>, void>;
  clearOnClick: eventHandler<React.MouseEvent<HTMLButtonElement>, void>;
}

const SearchInput: FC<SearchInputProps> = (
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
          onChange={onChange}
          placeholder='Поиск по названию'
          autoFocus
        />
        <button
          onClick={clearOnClick}
          className={
            value.length === 0
              ? `${styles.searchWrapperClearBtn}`
              : `${styles.searchWrapperClearBtn} ${styles.searchWrapperClearBtnActive}`
          }
        ></button>
      </div>
    </div>
  )
}

export default SearchInput;

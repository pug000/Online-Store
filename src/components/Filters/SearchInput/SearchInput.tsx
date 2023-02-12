import type { EventHandler } from 'ts/types';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  value: string;
  onChange: EventHandler<React.ChangeEvent<HTMLInputElement>, void>;
  clearOnClick: EventHandler<React.MouseEvent<HTMLButtonElement>, void>;
}

function SearchInput({ value, onChange, clearOnClick }: SearchInputProps) {
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchWrapperInput}
          value={value}
          onChange={onChange}
          placeholder="Поиск по названию"
        />
        <button
          onClick={clearOnClick}
          type="button"
          aria-hidden="true"
          className={
            value.length === 0
              ? `${styles.searchWrapperClearBtn}`
              : `${styles.searchWrapperClearBtn} ${styles.searchWrapperClearBtnActive}`
          }
        />
      </div>
    </div>
  );
}

export default SearchInput;

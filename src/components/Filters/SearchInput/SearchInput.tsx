import { memo } from 'react';
import type { FilterState } from 'ts/interfaces';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  value: string;
  filterName: keyof FilterState;
  placeholder: string;
  onChange: (name: keyof FilterState, value: string) => void;
}

function SearchInput({ value, filterName, placeholder, onChange }: SearchInputProps) {
  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          value={value}
          name={filterName}
          onChange={({ target }) => onChange(filterName, target.value)}
          placeholder={placeholder}
        />
        <button
          onClick={() => onChange(filterName, '')}
          type="button"
          aria-hidden="true"
          className={
            value.length === 0
              ? `${styles.clearButton}`
              : `${styles.clearButton} ${styles.active}`
          }
        />
      </div>
    </div>
  );
}

export default memo(SearchInput);

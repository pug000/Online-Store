import { memo } from 'react';

import type { FilterState, Options } from 'ts/interfaces';

import styles from './SelectedSort.module.scss';

interface SelectedSortProps {
  value: string;
  filterName: keyof FilterState;
  title: string;
  onChange: (name: keyof FilterState, value: string) => void;
  options: Readonly<Options[]>;
}

function SelectedSort({
  value,
  filterName,
  title,
  options,
  onChange,
}: SelectedSortProps) {
  return (
    <div className={styles.sort}>
      <h2 className={styles.title}>{title}</h2>
      <select
        className={styles.select}
        value={value}
        name={filterName}
        onChange={({ target }) => onChange(filterName, target.value)}
      >
        {options.map(({ id, option }) => (
          <option className={styles.option} key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(SelectedSort);

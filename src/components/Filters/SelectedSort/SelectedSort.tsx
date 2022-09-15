import React from 'react';
import { Options } from '../../../ts/interfaces';
import { EventHandler } from '../../../ts/types';

import styles from './SelectedSort.module.scss';

interface SelectedSortProps {
  value: string;
  onChange: EventHandler<string, void>;
  options: Readonly<Options[]>;
}

function SelectedSort(
  {
    value,
    options,
    onChange,
  }: SelectedSortProps,
) {
  return (
    <div className={styles.sort}>
      <h2 className={styles.sortTitle}>Сортировка</h2>
      <select
        className={styles.sortSelect}
        value={value}
        onChange={({ target }) => onChange(target.value)}
      >
        {options.map(({ id, option }) => (
          <option className={styles.sortSelectOption} key={id} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectedSort;

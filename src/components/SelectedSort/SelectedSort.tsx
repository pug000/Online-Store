import React, { FC } from "react";
import { SelectedSortProps } from "../../ts/interfaces";

import styles from './Sort.module.scss';

export const SelectedSort: FC<SelectedSortProps> = (
  {
    optionsLayout,
    value,
    onChange,
  }
) => {
  return (
    <div className={styles.sort}>
      <h2 className={styles.sortTitle}>Сортировка</h2>
      <select className={styles.sortSelect}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {optionsLayout.map(({ id, option }) => (
          <option className={styles.sortSelectOption} key={id} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
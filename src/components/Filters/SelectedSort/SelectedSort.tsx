import React, { FC } from "react";
import { ProductData, SelectedSortProps } from "../../../ts/interfaces";
import { SortMap } from "../../../ts/types";

import styles from './Sort.module.scss';

export const SelectedSort: FC<SelectedSortProps> = (
  {
    value,
    optionsLayout,
    onChange,
  }
) => {
  return (
    <div className={styles.sort}>
      <h2 className={styles.sortTitle}>Сортировка</h2>
      <select
        className={styles.sortSelect}
        value={value}
        onChange={e => onChange(e.target.value as keyof SortMap<ProductData[]>)}
      >
        {optionsLayout.map(({ id, option }) => (
          <option className={styles.sortSelectOption} key={id} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
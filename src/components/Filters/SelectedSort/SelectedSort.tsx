import React, { FC } from "react";
import { Options, ProductData } from "../../../ts/interfaces";
import { eventHandler, SortMap } from "../../../ts/types";

import styles from './SelectedSort.module.scss';

interface SelectedSortProps {
  value: keyof SortMap<ProductData[]>;
  onChange: eventHandler<keyof SortMap<ProductData[]>, void>;
  options: Readonly<Options[]>;
}

const SelectedSort: FC<SelectedSortProps> = (
  {
    value,
    options,
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
        {options.map(({ id, option }) => (
          <option className={styles.sortSelectOption} key={id} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectedSort;

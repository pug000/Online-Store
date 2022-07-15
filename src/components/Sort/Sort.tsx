import React, { FC } from "react";
import { optionsLayout } from './../../layout/data';

import styles from './Sort.module.scss';

const Sort: FC = () => {
  return (
    <div className={styles.sort}>
      <h2 className={styles.sortTitle}>Сортировка</h2>
      <select className={styles.sortSelect}>
        {optionsLayout.map((item, idx) => (
          <option className={styles.sortSelectOption} key={idx} value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Sort;
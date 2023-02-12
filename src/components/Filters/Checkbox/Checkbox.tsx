import { memo } from 'react';

import type { Checkbox, FilterState } from 'ts/interfaces';

import styles from './Checkbox.module.scss';

export interface CheckboxFilterProps {
  title: string;
  items: Checkbox[];
  filter: string[];
  filterName: keyof FilterState;
  addOnClick: (filterName: keyof FilterState, value: string) => void;
  removeOnClick: (filterName: keyof FilterState, value: string) => void;
}

function CheckboxFilter({
  title,
  items,
  filter,
  filterName,
  addOnClick,
  removeOnClick,
}: CheckboxFilterProps) {
  const selectFilterOnClick = (value: string) =>
    filter.includes(value)
      ? removeOnClick(filterName, value)
      : addOnClick(filterName, value);

  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {items.map(({ id, name }) => (
          <div
            key={id}
            aria-hidden="true"
            className={
              filter.includes(name)
                ? `${styles.filterItem} ${styles.active}`
                : `${styles.filterItem}`
            }
            defaultValue=""
            onClick={() => selectFilterOnClick(name)}
          >
            <span className={styles.text}>{name}</span>
            <button className={styles.button} type="button" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(CheckboxFilter);

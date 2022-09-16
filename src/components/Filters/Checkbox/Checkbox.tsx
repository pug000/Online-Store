import React, { useCallback } from 'react';
import { EventHandler } from '../../../ts/types';
import { Checkbox } from '../../../ts/interfaces';

import styles from './Checkbox.module.scss';

export interface CheckboxFilterProps {
  title: string;
  items: Checkbox[];
  filter: string[];
  addOnClick: EventHandler<string, void>;
  removeOnClick: EventHandler<string, void>;
}

function CheckboxFilter(
  {
    title,
    items,
    filter,
    addOnClick,
    removeOnClick,
  }: CheckboxFilterProps,
) {
  const checkSelectedFilter = useCallback((name: string) => (
    filter.includes(name)
  ), [addOnClick, removeOnClick]);

  const selectFilterOnClick = useCallback((name: string) => (
    checkSelectedFilter(name)
      ? removeOnClick(name)
      : addOnClick(name)
  ), [addOnClick, removeOnClick]);

  return (
    <div className={styles.filter}>
      <h2 className={styles.filterTitle}>{title}</h2>
      <div className={styles.filterContainer}>
        {
          items.map(({ id, name }) => (
            <div
              key={id}
              aria-hidden="true"
              className={
                checkSelectedFilter(name)
                  ? `${styles.filterItem} ${styles.filterItemActive}`
                  : `${styles.filterItem}`
              }
              defaultValue=""
              onClick={() => selectFilterOnClick(name)}
            >
              <span className={styles.filterItemText}>{name}</span>
              <button
                className={styles.filterItemBtn}
                type="button"
                aria-hidden="true"
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CheckboxFilter;

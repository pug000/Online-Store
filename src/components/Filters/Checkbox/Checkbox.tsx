import React, { FC } from 'react';
import { CheckboxProps } from '../../../ts/interfaces';
import { CheckboxItem } from './CheckboxItem';

import styles from './Checkbox.module.scss';

export const Checkbox: FC<CheckboxProps> = (
  {
    title,
    layout,
    filter,
    addOnClick,
    removeOnClick,
  }
) => {
  return (
    <div className={styles.filter}>
      <h2 className={styles.filterTitle}>{title}</h2>
      <div className={styles.filterContainer}></div>
      {
        layout.map(({ id, name }) => (
          <CheckboxItem
            key={id}
            name={name}
            filter={filter}
            addOnClick={addOnClick}
            removeOnClick={removeOnClick}
          />
        ))
      }
    </div>
  )
}

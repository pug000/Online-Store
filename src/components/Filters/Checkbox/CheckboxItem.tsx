import React, { FC, useState } from 'react';
import { CheckboxItemProps } from '../../../ts/interfaces';

import styles from './Checkbox.module.scss';

export const CheckboxItem: FC<CheckboxItemProps> = (
  {
    name,
    filter,
    addOnClick,
    removeOnClick
  }
) => {
  const [active, setActive] = useState(filter.includes(name) ? true : false);

  const handleClick = () => {
    setActive(active => !active);
    !active ? addOnClick(name) : removeOnClick(name);
  }

  return (
    <div
      className={
        active
          ? `${styles.filterItem} ${styles.filterItemActive}`
          : `${styles.filterItem}`
      }
      onClick={handleClick}
    >
      <span className={styles.filterItemText}>{name}</span>
      <button className={styles.filterItemBtn}></button>
    </div>
  )
}

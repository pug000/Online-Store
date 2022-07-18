import React, { FC } from 'react';
import { ResetButtonProps } from '../../../ts/interfaces';

import styles from './Reset.module.scss';

export const ResetButton: FC<ResetButtonProps> = (
  {
    text,
    resetOnClick,
  }
) => {
  return (
    <button
      className={styles.resetContainerBtn}
      onClick={resetOnClick}
    >{text}</button>
  )
}

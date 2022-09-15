import React, { FC } from 'react';
import { EventHandler } from '../../../ts/types';

import styles from './Reset.module.scss';

export interface ResetButtonProps {
  text: string;
  resetOnClick: EventHandler<React.MouseEvent<HTMLButtonElement>, void>;
}

const ResetButton: FC<ResetButtonProps> = (
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

export default ResetButton;

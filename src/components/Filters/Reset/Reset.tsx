import React from 'react';
import { EventHandler } from 'ts/types';

import styles from './Reset.module.scss';

export interface ResetButtonProps {
  text: string;
  resetOnClick: EventHandler<React.MouseEvent<HTMLButtonElement>, void>;
}

function ResetButton(
  {
    text,
    resetOnClick,
  }: ResetButtonProps,
) {
  return (
    <button
      className={styles.resetContainerBtn}
      onClick={resetOnClick}
      type="button"
    >
      {text}
    </button>
  );
}

export default ResetButton;

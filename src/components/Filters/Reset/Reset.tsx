import { memo } from 'react';

import styles from './Reset.module.scss';

export interface ResetButtonProps {
  text: string;
  resetOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ResetButton({ text, resetOnClick }: ResetButtonProps) {
  return (
    <button className={styles.resetButton} onClick={resetOnClick} type="button">
      {text}
    </button>
  );
}

export default memo(ResetButton);

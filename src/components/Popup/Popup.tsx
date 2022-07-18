import React, { FC } from 'react';
import { PopupProps } from '../../ts/interfaces';

import styles from './Popup.module.scss';

export const Popup: FC<PopupProps> = (
  {
    popup,
    onClick,
  }
) => {
  return (
    <div className={popup ? `${styles.popup} ${styles.popupActive}` : `${styles.popup}`}>
      <div className={styles.popupOverlay} onClick={onClick}></div>
      <div className={popup ? `${styles.popupContent} ${styles.popupContentActive}` : `${styles.popupContent}`}>
        <div className={styles.popupContentTitle}>{'Извините, все слоты заполнены'}</div>
        <button className={styles.popupContentCloseBtn} onClick={onClick}></button>
      </div>
    </div>
  )
}

import React, { FC } from 'react';
import { eventHandler } from '../../ts/types';

import styles from './Popup.module.scss';

interface PopupProps {
  isPopupOpen: boolean;
  onClick: eventHandler<React.MouseEvent<HTMLButtonElement | HTMLDivElement>, void>;
}

const Popup: FC<PopupProps> = (
  {
    isPopupOpen,
    onClick,
  }
) => {
  return (
    <div className={isPopupOpen ? `${styles.popup} ${styles.popupActive}` : `${styles.popup}`}>
      <div className={styles.popupOverlay} onClick={onClick}></div>
      <div className={isPopupOpen
        ? `${styles.popupContent} ${styles.popupContentActive}`
        : `${styles.popupContent}`}>
        <div className={styles.popupContentTitle}>{'Извините, все слоты заполнены'}</div>
        <button className={styles.popupContentCloseBtn} onClick={onClick}></button>
      </div>
    </div>
  )
}

export default Popup;

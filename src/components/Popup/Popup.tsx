import React from 'react';
import { SetState } from '../../ts/types';

import styles from './Popup.module.scss';

interface PopupProps {
  isPopupOpen: boolean;
  setPopupOpen: SetState<boolean>;
}

function Popup(
  {
    isPopupOpen,
    setPopupOpen,
  }: PopupProps,
) {
  return (
    <div className={isPopupOpen ? `${styles.popup} ${styles.popupActive}` : `${styles.popup}`}>
      <div
        aria-hidden="true"
        className={styles.popupOverlay}
        onClick={() => setPopupOpen(false)}
      />
      <div className={isPopupOpen
        ? `${styles.popupContent} ${styles.popupContentActive}`
        : `${styles.popupContent}`}
      >
        <div className={styles.popupContentTitle}>Извините, все слоты заполнены</div>
        <button
          type="button"
          aria-hidden="true"
          className={styles.popupContentCloseBtn}
          onClick={() => setPopupOpen(false)}
        />
      </div>
    </div>
  );
}

export default Popup;

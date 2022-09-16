import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setPopupOpen } from '../../redux/slices/popupSlice';

import styles from './Popup.module.scss';

function Popup() {
  const isPopupOpen = useSelector((state: RootState) => state.isPopupOpen);
  const dispatch = useDispatch();

  const closePopup = () => dispatch(setPopupOpen(false));

  return (
    <div className={isPopupOpen ? `${styles.popup} ${styles.popupActive}` : `${styles.popup}`}>
      <div
        aria-hidden="true"
        className={styles.popupOverlay}
        onClick={closePopup}
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
          onClick={closePopup}
        />
      </div>
    </div>
  );
}

export default Popup;

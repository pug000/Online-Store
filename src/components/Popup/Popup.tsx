import { useCallback } from 'react';

import { setBooleanState } from 'redux/slices/booleanSlice';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import styles from './Popup.module.scss';

function Popup() {
  const isPopupOpen = useAppSelector((state) => state.booleanState.isPopupOpen);
  const dispatch = useAppDispatch();

  const closePopup = useCallback(
    () => dispatch(setBooleanState({ key: 'isPopupOpen', value: false })),
    [isPopupOpen]
  );

  return (
    <div
      className={
        isPopupOpen ? `${styles.popup} ${styles.popupActive}` : `${styles.popup}`
      }
    >
      <div aria-hidden="true" className={styles.popupOverlay} onClick={closePopup} />
      <div
        className={
          isPopupOpen
            ? `${styles.popupContent} ${styles.popupContentActive}`
            : `${styles.popupContent}`
        }
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

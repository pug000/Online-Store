import { memo, useEffect, useRef } from 'react';

import styles from './Popup.module.scss';

interface PopupProps {
  isPopupOpen: boolean;
  closePopup: () => void;
  text: string;
}

function Popup({ isPopupOpen, closePopup, text }: PopupProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isPopupOpen) {
      timerRef.current = setTimeout(() => {
        closePopup();
      }, 2000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPopupOpen]);

  return (
    <div className={isPopupOpen ? `${styles.popup} ${styles.active}` : `${styles.popup}`}>
      <div aria-hidden="true" className={styles.overlay} onClick={closePopup} />
      <div
        className={
          isPopupOpen ? `${styles.content} ${styles.active}` : `${styles.content}`
        }
      >
        <div className={styles.title}>{text}</div>
        <button
          type="button"
          aria-hidden="true"
          className={styles.closeButton}
          onClick={closePopup}
        />
      </div>
    </div>
  );
}

export default memo(Popup);

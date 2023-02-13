import { memo, useEffect, useRef } from 'react';
import classNames from 'classnames';

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
    <div className={classNames(styles.popup, { [styles.active]: isPopupOpen })}>
      <div aria-hidden="true" className={styles.overlay} onClick={closePopup} />
      <div className={classNames(styles.content, { [styles.active]: isPopupOpen })}>
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

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './Header.module.scss';

function Header() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerContainerTitle}>Online Store</h1>
        <div className={styles.headerContainerCart}>
          <span>{cart.length}</span>
        </div>
      </div>
      <div className={styles.headerLine} />
    </header>
  );
}

export default Header;

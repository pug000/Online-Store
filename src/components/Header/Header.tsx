import React from 'react';

import { ProductData } from '../../ts/interfaces';

import styles from './Header.module.scss';

export interface HeaderProps {
  cart: ProductData[];
}

function Header({ cart }: HeaderProps) {
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

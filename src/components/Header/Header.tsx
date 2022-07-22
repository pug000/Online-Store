import React, { FC } from 'react';

import styles from './Header.module.scss';

export interface HeaderProps {
  cart: string[];
}

const Header: FC<HeaderProps> = ({ cart }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerContainerTitle}>Online Store</h1>
        <div className={styles.headerContainerCart}>
          <span>{cart.length}</span>
        </div>
      </div>
      <div className={styles.headerLine}></div>
    </header>
  )
};

export default Header;

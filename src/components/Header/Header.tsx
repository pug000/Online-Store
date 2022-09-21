import React from 'react';

import { useAppSelector } from 'hooks/useRedux';

import CartMenu from './CartMenu/CartMenu';

import styles from './Header.module.scss';

function Header() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerContainerTitle}>Online Store</h1>
        <div className={styles.headerContainerCart}>
          <span>{cart.length}</span>
        </div>
      </div>
      <div className={styles.headerLine} />
      <CartMenu />
    </header>
  );
}

export default Header;

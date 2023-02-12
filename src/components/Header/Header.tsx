import { memo, useCallback, useState } from 'react';

import { useAppSelector } from 'hooks/useRedux';

import * as cartSelectors from 'redux/selectors/cartSelector';

import CartMenu from './CartMenu/CartMenu';

import styles from './Header.module.scss';

function Header() {
  const [isCartMenuOpen, setCartMenuOpen] = useState(false);
  const cart = useAppSelector(cartSelectors.getCart);

  const openCartMenu = () => {
    setCartMenuOpen(true);
  };

  const closeCartMenu = useCallback(() => {
    setCartMenuOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Online Store</h1>
        <button className={styles.buttonCart} type="button" onClick={openCartMenu}>
          <div className={styles.circle}>
            <span>{cart.length}</span>
          </div>
        </button>
      </div>
      <div className={styles.line} />
      <CartMenu isCartMenuOpen={isCartMenuOpen} closeCartMenu={closeCartMenu} />
    </header>
  );
}

export default memo(Header);

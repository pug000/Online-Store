import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import { setBooleanState } from 'redux/slices/booleanSlice';
import * as cartSelectors from 'redux/selectors/cartSelector';

import CartMenu from './CartMenu/CartMenu';

import styles from './Header.module.scss';

function Header() {
  const cart = useAppSelector(cartSelectors.getCart);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerContainerTitle}>Online Store</h1>
        <button
          className={styles.headerContainerButtonCart}
          type="button"
          onClick={() =>
            dispatch(setBooleanState({ key: 'isCartMenuOpen', value: true }))
          }
        >
          <div className={styles.headerCircle}>
            <span>{cart.length}</span>
          </div>
        </button>
      </div>
      <div className={styles.headerLine} />
      <CartMenu />
    </header>
  );
}

export default Header;

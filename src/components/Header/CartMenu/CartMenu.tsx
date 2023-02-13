import { memo, useCallback } from 'react';
import classNames from 'classnames';

import { cartActions } from 'redux/slices/cartSlice';
import * as cartSelectors from 'redux/selectors/cartSelector';

import { useActions, useAppSelector } from 'hooks/useRedux';

import type { ProductData } from 'ts/interfaces';

import styles from './CartMenu.module.scss';
import CartItem from './CartItem/CartItem';

interface CartMenuProps {
  isCartMenuOpen: boolean;
  closeCartMenu: () => void;
}

function CartMenu({ isCartMenuOpen, closeCartMenu }: CartMenuProps) {
  const cart = useAppSelector(cartSelectors.getCart);
  const cartTotalCount = useAppSelector(cartSelectors.getCartTotalCount);
  const { removeCartItem, clearCart } = useActions(cartActions);

  const removeCartItemFromCart = useCallback((cartItem: ProductData) => {
    removeCartItem(cartItem);
  }, []);

  const purchaseCart = () => {
    closeCartMenu();
    clearCart();
  };

  return (
    <>
      <div
        className={classNames(styles.overlay, { [styles.active]: isCartMenuOpen })}
        aria-hidden="true"
        onClick={closeCartMenu}
      />
      <div className={classNames(styles.wrapper, { [styles.active]: isCartMenuOpen })}>
        <div className={styles.containerHeader}>
          <h3 className={styles.title}>Shopping Cart</h3>
          <button
            className={styles.closeButton}
            type="button"
            aria-label="close"
            onClick={closeCartMenu}
          />
        </div>
        <div className={styles.containerMain}>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              removeCartItemFromCart={removeCartItemFromCart}
            />
          ))}
        </div>
        <div className={styles.containerFooter}>
          <div className={styles.price}>
            <span>Итого:</span>
            <span>{`$${cartTotalCount}`}</span>
          </div>
          <button className={styles.purchaseButton} type="button" onClick={purchaseCart}>
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(CartMenu);

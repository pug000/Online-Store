import { memo, useCallback } from 'react';

import { removeCartItem, clearCart } from 'redux/slices/cartSlice';
import * as cartSelectors from 'redux/selectors/cartSelector';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

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
  const dispatch = useAppDispatch();

  const removeCartItemFromCart = useCallback((cartItem: ProductData) => {
    dispatch(removeCartItem(cartItem));
  }, []);

  const purchaseCart = () => {
    closeCartMenu();
    dispatch(clearCart());
  };

  return (
    <>
      <div
        className={
          isCartMenuOpen ? `${styles.overlay} ${styles.active}` : `${styles.shadow}`
        }
        aria-hidden="true"
        onClick={closeCartMenu}
      />
      <div
        className={
          isCartMenuOpen ? `${styles.wrapper} ${styles.active}` : `${styles.wrapper}`
        }
      >
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

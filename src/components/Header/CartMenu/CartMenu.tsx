import React, { useCallback, useEffect } from 'react';

import { setBooleanState } from 'redux/slices/booleanSlice';

import { removeCartItem, getCartTotalCount, clearCart } from 'redux/slices/cartSlice';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import styles from './CartMenu.module.scss';

function CartMenu() {
  const cart = useAppSelector((state) => state.cart.cart);
  const cartTotalCount = useAppSelector((state) => state.cart.cartTotalCount);
  const isCartMenuOpen = useAppSelector((state) => state.booleanState.isCartMenuOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCartMenuOpen) {
      dispatch(getCartTotalCount(cart));
    }
  }, [cart, isCartMenuOpen]);

  const closeCartMenu = useCallback(() => {
    dispatch(setBooleanState({ key: 'isCartMenuOpen', value: false }));
  }, [isCartMenuOpen]);

  return (
    <>
      <div
        className={
          isCartMenuOpen ? `${styles.shadow} ${styles.shadowActive}` : `${styles.shadow}`
        }
        aria-hidden="true"
        onClick={closeCartMenu}
      />
      <div
        className={
          isCartMenuOpen ? `${styles.cart} ${styles.cartActive}` : `${styles.cart}`
        }
      >
        <div className={styles.cartHeader}>
          <h3 className={styles.cartHeaderTitle}>Shopping Cart</h3>
          <button
            className={styles.cartHeaderCloseButton}
            type="button"
            aria-label="close"
            onClick={closeCartMenu}
          />
        </div>
        <div className={styles.cartMain}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.cartItemImg}>
                <img src={`./assets/img/${item.id}.png`} alt="cart-img" />
              </div>
              <div className={styles.cartItemDescription}>
                <p className={styles.cartItemName}>{item.name}</p>
                <p className={styles.cartItemPrice}>{`$${item.price}`}</p>
                <button
                  className={styles.cartItemButtonRemove}
                  type="button"
                  aria-label="button"
                  onClick={() => dispatch(removeCartItem(item))}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartFooterPrice}>
            <span>Итого:</span>
            <span>{`$${cartTotalCount}`}</span>
          </div>
          <button
            className={styles.cartFooterButton}
            type="button"
            onClick={() => {
              closeCartMenu();
              dispatch(clearCart());
            }}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  );
}

export default CartMenu;

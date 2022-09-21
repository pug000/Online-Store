import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import styles from './CartMenu.module.scss';

function CartMenu() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className={styles.shadow} />
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <h3 className={styles.cartHeaderTitle}>Shopping Cart</h3>
          <button
            className={styles.cartHeaderCloseButton}
            type="button"
            aria-label="close"
          />
        </div>
        <div className={styles.cartMain}>
          {cart.map((item) => (
            <div
              key={item.id}
              className={styles.cartItem}
            >
              <div className={styles.cartItemImg}>
                <img
                  src={`./assets/img/${item.id}.png`}
                  alt="cart-img"
                />
              </div>
              <div className={styles.cartItemDescription}>
                <p className={styles.cartItemName}>{item.name}</p>
                <p className={styles.cartItemPrice}>{`$${item.price}`}</p>
                <button
                  className={styles.cartItemButtonRemove}
                  type="button"
                  aria-label="button"
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartFooterPrice}>
            <span>Итого:</span>
            <span>$</span>
          </div>
          <button
            className={styles.cartFooterButton}
            type="button"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  );
}

export default CartMenu;

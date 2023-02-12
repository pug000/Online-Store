import { memo } from 'react';
import { ProductData } from 'ts/interfaces';

import styles from './CartItem.module.scss';

interface CartItemProps {
  cartItem: ProductData;
  removeCartItemFromCart: (cartItem: ProductData) => void;
}

function CartItem({ cartItem, removeCartItemFromCart }: CartItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={`./assets/img/${cartItem.id}.png`} alt="product" />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{cartItem.name}</p>
        <p className={styles.price}>{`$${cartItem.price}`}</p>
        <button
          className={styles.removeButton}
          type="button"
          aria-label="button"
          onClick={() => removeCartItemFromCart(cartItem)}
        />
      </div>
    </div>
  );
}

export default memo(CartItem);

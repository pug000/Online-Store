import { memo } from 'react';
import classNames from 'classnames';

import type { ProductData } from 'ts/interfaces';

import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: ProductData;
  cart: ProductData[];
  addToCart: (product: ProductData) => void;
  removeFromCart: (product: ProductData) => void;
}

function ProductItem({ product, cart, addToCart, removeFromCart }: ProductItemProps) {
  const isSelectedProduct = cart.some(({ id }) => id === product.id);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{product.name}</h3>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={`./assets/img/${product.id}.png`}
          alt="product"
        />
      </div>
      <div className={styles.description}>
        <p className={styles.text}>Количество: {product.quantity}</p>
        <p className={styles.text}>Производитель: {product.brand}</p>
        <p className={styles.text}>Тип клавиатуры: {product.type}</p>
        <p className={styles.text}>Цвет подсветки: {product.colorEffect}</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.price}>${product.price}</div>
        <button
          type="button"
          className={classNames(styles.button, { [styles.active]: isSelectedProduct })}
          onClick={() =>
            isSelectedProduct ? removeFromCart(product) : addToCart(product)
          }
        >
          {isSelectedProduct ? 'Удалить из корзины' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  );
}

export default memo(ProductItem);

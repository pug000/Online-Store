import { memo } from 'react';

import type { ProductData } from 'ts/interfaces';
import { EventHandler } from 'ts/types';

import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: ProductData;
  cart: ProductData[];
  addToCart: EventHandler<ProductData, void>;
  removeFromCart: EventHandler<ProductData, void>;
}

function ProductItem({ product, cart, addToCart, removeFromCart }: ProductItemProps) {
  const selectedProduct = cart.some(({ id }) => id === product.id);

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
          className={
            selectedProduct
              ? `${styles.button} ${styles.buttonActive}`
              : `${styles.button}`
          }
          onClick={() => (selectedProduct ? removeFromCart(product) : addToCart(product))}
        >
          {selectedProduct ? 'Удалить из корзины' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  );
}

export default memo(ProductItem);

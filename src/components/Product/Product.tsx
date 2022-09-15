import React from 'react';
import { ProductData } from '../../ts/interfaces';
import { SetState } from '../../ts/types';

import styles from './Product.module.scss';

interface ProductProps {
  products: Readonly<ProductData[]>;
  cart: ProductData[];
  setCart: SetState<ProductData[]>;
  setPopupOpen: SetState<boolean>;
}

function Product(
  {
    products,
    cart,
    setCart,
    setPopupOpen,
  }: ProductProps,
) {
  const checkForActive = (id: string) => cart.some((item) => item.id === id);

  const addToCart = (item: ProductData) => (
    cart.length < 20
      ? setCart((prev) => [...prev, item])
      : setPopupOpen((prev) => !prev)
  );

  const removeFromCart = (currentItem: ProductData) => (
    setCart((prev) => prev.filter((item) => item.id !== currentItem.id))
  );

  const handleClick = (currentItem: ProductData) => (
    checkForActive(currentItem.id)
      ? removeFromCart(currentItem)
      : addToCart(currentItem)
  );

  if (!products.length) {
    return (
      <div className={styles.noResultWrapper}>
        <h2 className={styles.noResultWrapperTitle}>Извините, совпадений не обнаружено</h2>
      </div>
    );
  }

  return (
    <div className={styles.productWrapper}>
      {products.map((item) => (
        <div className={styles.product} key={item.id}>
          <div className={styles.productTitle}>{item.name}</div>
          <div className={styles.productContainer}>
            <img
              className={styles.productContainerImg}
              src={`./assets/img/${item.id}.png`}
              alt="product-img"
            />
          </div>
          <div className={styles.productDescription}>
            <div className={styles.productDescriptionCount}>
              Количество:
              {' '}
              {item.quantity}
            </div>
            <div className={styles.productDescriptionBrand}>
              Производитель:
              {' '}
              {item.brand}
            </div>
            <div className={styles.productDescriptionType}>
              Тип клавиатуры:
              {' '}
              {item.type}
            </div>
            <div className={styles.productDescriptionColorEffect}>
              Цвет подсветки:
              {' '}
              {item.colorEffect}
            </div>
          </div>
          <div className={styles.productBottom}>
            <div className={styles.productBottomPrice}>
              $
              {item.price}
            </div>
            <button
              type="button"
              className={
                checkForActive(item.id)
                  ? `${styles.productBottomBtn} ${styles.productBottomBtnActive}`
                  : `${styles.productBottomBtn}`
              }
              onClick={() => handleClick(item)}
            >
              {checkForActive(item.id) ? 'Удалить из корзины' : 'Добавить в корзину'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;

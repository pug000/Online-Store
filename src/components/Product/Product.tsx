import React, { FC } from 'react';
import { ProductData } from '../../ts/interfaces';
import { setState } from '../../ts/types';

import styles from './Product.module.scss';

interface ProductProps {
  products: Readonly<ProductData[]>;
  cart: string[];
  setCart: setState<React.SetStateAction<string[]>, void>;
  setPopupOpen: setState<React.SetStateAction<boolean>, void>;
}

const Product: FC<ProductProps> = (
  {
    products,
    cart,
    setCart,
    setPopupOpen,
  }
) => {
  if (!products.length) {
    return (
      <div className={styles.noResultWrapper}>
        <h2 className={styles.noResultWrapperTitle}>{'Извините, совпадений не обнаружено'}</h2>
      </div>
    )
  }

  const checkForActive = (num: string) => cart.includes(num);

  const addToCart = (id: string) => cart.length < 20 ? setCart(cart => [...cart, id]) : setPopupOpen(isPopupOpen => !isPopupOpen);

  const removeFromCart = (id: string) => setCart(cart => cart.filter((el) => el !== id));

  const handleClick = (num: string) => checkForActive(num) ? removeFromCart(num) : addToCart(num);

  return (
    <div className={styles.productWrapper}>
      {products.map((item) => (
        <div className={styles.product} key={item.num}>
          <div className={styles.productTitle}>{item.name}</div>
          <div className={styles.productContainer}>
            <img className={styles.productContainerImg} src={`./assets/img/${item.num}.png`} alt='product-img' />
          </div>
          <div className={styles.productDescription}>
            <div className={styles.productDescriptionCount}>Количество: {item.count}</div>
            <div className={styles.productDescriptionBrand}>Производитель: {item.brand}</div>
            <div className={styles.productDescriptionType}>Тип клавиатуры: {item.type}</div>
            <div className={styles.productDescriptionColorEffect}>Цвет подсветки: {item.colorEffect}</div>
          </div>
          <div className={styles.productBottom}>
            <div className={styles.productBottomPrice}>${item.price}</div>
            <button
              className={checkForActive(item.num) ? `${styles.productBottomBtn} ${styles.productBottomBtnActive}`
                : `${styles.productBottomBtn}`
              }
              onClick={() => handleClick(item.num)}
            >{checkForActive(item.num) ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product;

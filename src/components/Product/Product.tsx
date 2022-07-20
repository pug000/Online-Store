import React, { FC, useMemo, useState } from 'react';
import { ProductProps } from '../../ts/interfaces';

import styles from './Product.module.scss';

export const Product: FC<ProductProps> = (
  {
    product,
    cart,
    setCart,
    setPopup,
  }
) => {
  const [active, setActive] = useState<boolean>(false);

  useMemo(() => setActive(cart.includes(product.num) ? true : false), [cart]);

  const addToCart = (id: string) => cart.length < 20 ? setCart(cart => [...cart, id]) : setPopup(popup => !popup);

  const removeFromCart = (id: string) => setCart(cart => cart.filter((el) => el !== id));

  const handleClick = () => {
    cart.length < 20 ? setActive(active => !active) : setActive(false);
    !active ? addToCart(product.num) : removeFromCart(product.num);
  };

  return (
    <div className={styles.product}>
      <div className={styles.productTitle}>{product.name}</div>
      <div className={styles.productContainer}>
        <img className={styles.productContainerImg} src={`./assets/img/${product.num}.png`} alt='product-img' />
      </div>
      <div className={styles.productDescription}>
        <div className={styles.productDescriptionCount}>Количество: {product.count}</div>
        <div className={styles.productDescriptionBrand}>Производитель: {product.brand}</div>
        <div className={styles.productDescriptionType}>Тип клавиатуры: {product.type}</div>
        <div className={styles.productDescriptionColorEffect}>Цвет подсветки: {product.colorEffect}</div>
      </div>
      <div className={styles.productBottom}>
        <div className={styles.productBottomPrice}>${product.price}</div>
        <button
          className={active
            ? `${styles.productBottomBtn} ${styles.productBottomBtnActive}`
            : `${styles.productBottomBtn}`}
          onClick={handleClick}
        >{active ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
      </div>
    </div>
  )
}
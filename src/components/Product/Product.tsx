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
      <div className={styles.title}>{product.name}</div>
      <div className={styles.containerImg}>
        <img className={styles.img} src={`./assets/img/${product.num}.png`} alt='product-img' />
      </div>
      <div className={styles.description}>
        <div className={styles.count}>Количество: {product.count}</div>
        <div className={styles.brand}>Производитель: {product.brand}</div>
        <div className={styles.type}>Тип клавиатуры: {product.type}</div>
        <div className={styles.colorEffect}>Цвет подсветки: {product.colorEffect}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>${product.price}</div>
        <button
          className={active ? `${styles.btn} ${styles.btnActive}` : `${styles.btn}`}
          onClick={handleClick}
        >{active ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
      </div>
    </div>
  )
}
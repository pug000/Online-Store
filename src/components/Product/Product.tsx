import React, { FC, useState } from 'react';
import { ProductProps } from '../../ts/interfaces';

import styles from './Product.module.scss';



export const Product: FC<ProductProps> = (
  {
    productData,
    cart,
    setCart,
    setPopup,
  }
) => {
  return (
    <div className={styles.wrapper}>
      {productData.map((
        {
          num,
          name,
          count,
          brand,
          colorEffect,
          price,
          type
        }) => {
        const [active, setActive] = useState<boolean>(cart.includes(num) ? true : false);

        const handleClick = () => {
          cart.length < 20 ? setActive(active => !active) : setActive(false);
          !active ? addToCart(num) : removeFromCart(num);
        };

        const addToCart = (id: string) => cart.length < 20 ? setCart(cart => [...cart, id]) : setPopup(popup => !popup);

        const removeFromCart = (id: string) => setCart(cart => cart.filter((el) => el !== id));

        return (
          <div key={num} className={styles.product}>
            <div className={styles.title}>{name}</div>
            <div className={styles.containerImg}>
              <img className={styles.img} src={`./assets/img/${num}.png`} alt='product-img' />
            </div>
            <div className={styles.description}>
              <div className={styles.count}>Количество: {count}</div>
              <div className={styles.brand}>Производитель: {brand}</div>
              <div className={styles.type}>Тип клавиатуры: {type}</div>
              <div className={styles.colorEffect}>Цвет подсветки: {colorEffect}</div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.price}>${price}</div>
              <button className={active ? `${styles.btn} ${styles.btnActive}` : `${styles.btn}`}
                onClick={handleClick}>{active ? 'Удалить и корзины' : 'Добавить в корзину'}</button>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}
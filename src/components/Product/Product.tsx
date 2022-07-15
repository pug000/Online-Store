import React from "react";
import { data } from './../../layout/data';

import styles from './Product.module.scss';

const Product: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <div key={item.num} className={styles.product}>
          <div className={styles.title}>{item.name}</div>
          <div className={styles.containerImg}>
            <img className={styles.img} src={`./assets/img/${item.num}.png`} alt="product-img" />
          </div>
          <div className={styles.description}>
            <div className={styles.count}>Количество: {item.count}</div>
            <div className={styles.brand}>Производитель: {item.brand}</div>
            <div className={styles.type}>Тип клавиатуры: {item.type}</div>
            <div className={styles.colorEffect}>Цвет подсветки: {item.colorEffect}</div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.price}>${item.price}</div>
            <div className={styles.btn}>Добавить в корзину</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product;
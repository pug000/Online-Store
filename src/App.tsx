import React, { FC, useMemo, useState } from 'react';
import { Header } from './components/Header/Header';
import { Product } from './components/Product/Product';
import { Filters } from './components/Filters/Filters';
import { Popup } from './components/Popup/Popup';
import { dataLayout } from './layout/data';
import { FilterState, ProductData } from './ts/interfaces';
import { getLocalStorage, setLocalStorage } from './local';
import { checkboxFilter, maxPrice, maxQuantity, minPrice, minQuantity, searchFilter, sliderFilter, sortFilter } from './settings';
import { Footer } from './components/Footer/Footer';

import './styles/reset.scss';
import styles from './styles/styles.module.scss';

const App: FC = () => {
  const defaultFilters: FilterState = {
    search: '',
    sort: 'По названию (A-Z)',
    price: [minPrice, maxPrice],
    quantity: [minQuantity, maxQuantity],
    brand: [],
    type: [],
    colorEffect: [],
  }
  const [cart, setCart] = useState<string[]>(getLocalStorage('cart', []));
  const [data, setData] = useState<ProductData[]>(dataLayout)
  const [popup, setPopup] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterState>(getLocalStorage('filters', defaultFilters));

  useMemo(() => {
    let result = [...dataLayout].filter((item) => searchFilter(item.name, filter.search));
    result = sortFilter(result, filter.sort);
    result = result.filter((item) => sliderFilter(item.price, filter.price));
    result = result.filter((item) => sliderFilter(item.count, filter.quantity));
    result = result.filter((item) => checkboxFilter(item.brand, filter.brand));
    result = result.filter((item) => checkboxFilter(item.type, filter.type));
    result = result.filter((item) => checkboxFilter(item.colorEffect, filter.colorEffect));

    setData(result);
  }, [filter]);

  useMemo(() => {
    setCart(cart);
  }, [cart])

  window.onbeforeunload = () => {
    setLocalStorage('cart', cart);
    setLocalStorage('filters', filter);
  }

  return (
    <>
      <Header cart={cart} />
      <main className={styles.main}>
        <Filters
          filter={filter}
          setFilter={setFilter}
          defaultFilters={defaultFilters}
          setCart={setCart}
        />
        {data.length
          ? <div className={styles.wrapper}>
            {data.map((item) => (
              <Product
                key={item.num}
                product={item}
                cart={cart}
                setCart={setCart}
                setPopup={setPopup}
              />
            ))}
          </div>
          : <div className={styles.noResultWrapper}>
            <h2 className={styles.noResultWrapperTitle}>{'Извините, совпадений не обнаружено'}</h2>
          </div>}
      </main>
      <Footer />
      <Popup popup={popup} onClick={() => setPopup(!popup)} />
    </>
  )
};

export default App;

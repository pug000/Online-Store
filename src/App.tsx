import React, { FC, useMemo, useState } from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Filters from './components/Filters/Filters';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';
import dataLayout from './layout/data';
import { OptionValue } from './ts/enum';
import { FilterState, ProductData } from './ts/interfaces';
import { getLocalStorage, setLocalStorage } from './local';
import { checkboxFilter, maxPrice, maxQuantity, minPrice, minQuantity, rangeFilter, searchFilter, sortFilter } from './settings';

import './styles/reset.scss';
import './styles/styles.scss';


const App: FC = () => {
  const defaultFilters: FilterState = {
    search: '',
    sort: OptionValue.AZ,
    price: [minPrice, maxPrice],
    quantity: [minQuantity, maxQuantity],
    brand: [],
    type: [],
    colorEffect: [],
  }

  const [cart, setCart] = useState<string[]>(getLocalStorage('cart', []));
  const [data, setData] = useState<ProductData[]>(dataLayout)
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterState>(getLocalStorage('filters', defaultFilters));

  useMemo(() => {
    const res = sortFilter(dataLayout, filter.sort).filter((item) =>
      searchFilter(item.name, filter.search)
      && rangeFilter(item.price, filter.price)
      && rangeFilter(item.count, filter.quantity)
      && checkboxFilter(item.brand, filter.brand)
      && checkboxFilter(item.type, filter.type)
      && checkboxFilter(item.colorEffect, filter.colorEffect));

    setData(res);
  }, [filter]);

  window.onbeforeunload = () => {
    setLocalStorage('cart', cart);
    setLocalStorage('filters', { ...filter, search: '' });
  };

  return (
    <>
      <Header cart={cart} />
      <main className='main'>
        <Filters
          filter={filter}
          setFilter={setFilter}
          defaultFilters={defaultFilters}
          setCart={setCart}
        />
        <Product
          products={data}
          cart={cart}
          setCart={setCart}
          setPopupOpen={setPopupOpen}
        />
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} onClick={() => setPopupOpen(!isPopupOpen)} />
    </>
  )
};

export default App;

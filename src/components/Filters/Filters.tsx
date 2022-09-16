import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import {
  updateFilter,
  selectFilter,
  removeSelectedFilter,
  resetFilter,
  clearFilter
} from '../../redux/slices/filterSlice';
import { setProducts } from '../../redux/slices/productsSlice';

import SearchInput from './SearchInput/SearchInput';
import SelectedSort from './SelectedSort/SelectedSort';
import RangeSlider from './RangeSlider/RangeSlider';
import CheckboxFilter from './Checkbox/Checkbox';
import ResetButton from './Reset/Reset';

import {
  Checkbox,
  Options,
} from '../../ts/interfaces';
import OptionValue from '../../ts/enum';

import {
  checkboxFilter,
  maxPrice,
  maxQuantity,
  minPrice,
  minQuantity,
  rangeFilter,
  searchFilter,
  sortFilter
} from '../../settings';

import styles from './Filters.module.scss';
import { RootState } from '../../redux/store';
import dataLayout from '../../layout/data';

function Filters() {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const options: Options[] = [
    { id: 1, option: OptionValue.AZ },
    { id: 2, option: OptionValue.ZA },
    { id: 3, option: OptionValue.minPrice },
    { id: 4, option: OptionValue.maxPrice },
    { id: 5, option: OptionValue.minQuantity },
    { id: 6, option: OptionValue.maxQuantity },
  ];

  const brands: Checkbox[] = [
    { id: 1, name: 'Cougar' },
    { id: 2, name: 'HyperX' },
    { id: 3, name: 'Razer' },
    { id: 4, name: 'MSI' },
    { id: 5, name: 'Corsair' },
    { id: 6, name: 'ZET' },
  ];

  const types: Checkbox[] = [
    { id: 1, name: 'механическая' },
    { id: 2, name: 'ножничная' },
    { id: 3, name: 'мембранная' },
  ];

  const colorsEffect: Checkbox[] = [
    { id: 1, name: 'RGB' },
    { id: 2, name: 'многоцветная' },
    { id: 3, name: 'красная' },
  ];

  const clearSettings = () => {
    dispatch(clearFilter());
    dispatch(clearCart());
  };

  useEffect(() => {
    const filteredProducts = sortFilter(dataLayout, filter.sort)
      .filter((item) => searchFilter(item.name, filter.search)
        && rangeFilter(item.price, filter.price)
        && rangeFilter(item.quantity, filter.quantity)
        && checkboxFilter(item.brand, filter.brand)
        && checkboxFilter(item.type, filter.type)
        && checkboxFilter(item.colorEffect, filter.colorEffect));

    dispatch(setProducts(filteredProducts));
  }, [filter]);

  return (
    <div className={styles.filterContainer}>
      <SearchInput
        value={filter.search}
        onChange={({ target }) => dispatch(updateFilter({ key: 'search', value: target.value }))}
        clearOnClick={() => dispatch(updateFilter({ key: 'search', value: '' }))}
      />
      <SelectedSort
        value={filter.sort}
        onChange={(value) => dispatch(updateFilter({ key: 'sort', value }))}
        options={options}
      />
      <RangeSlider
        title="Цена $"
        value={filter.price}
        step={10}
        onChange={(value) => dispatch(updateFilter({ key: 'price', value }))}
        defaultValue={[minPrice, maxPrice]}
      />
      <RangeSlider
        title="Количество"
        value={filter.quantity}
        step={1}
        onChange={(value) => dispatch(updateFilter({ key: 'quantity', value }))}
        defaultValue={[minQuantity, maxQuantity]}
      />
      <CheckboxFilter
        title="Производитель"
        items={brands}
        filter={filter.brand}
        addOnClick={(value) => dispatch(selectFilter({ key: 'brand', value }))}
        removeOnClick={(value) => dispatch(removeSelectedFilter({ key: 'brand', value }))}
      />
      <CheckboxFilter
        title="Клавиатура"
        items={types}
        filter={filter.type}
        addOnClick={(value) => dispatch(selectFilter({ key: 'type', value }))}
        removeOnClick={(value) => dispatch(removeSelectedFilter({ key: 'type', value }))}
      />
      <CheckboxFilter
        title="Цвет подсветки"
        items={colorsEffect}
        filter={filter.colorEffect}
        addOnClick={(value) => dispatch(selectFilter({ key: 'colorEffect', value }))}
        removeOnClick={(value) => dispatch(removeSelectedFilter({ key: 'colorEffect', value }))}
      />
      <div className={styles.resetContainer}>
        <ResetButton
          text="Сброс фильтров"
          resetOnClick={() => dispatch(resetFilter())}
        />
        <ResetButton
          text="Cброс настроек"
          resetOnClick={clearSettings}
        />
      </div>
    </div>
  );
}

export default Filters;

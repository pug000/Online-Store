import { useCallback, useEffect } from 'react';

import { clearCart } from 'redux/slices/cartSlice';
import {
  updateFilter,
  selectFilter,
  removeSelectedFilter,
  resetFilter,
  clearFilter,
} from 'redux/slices/filterSlice';
import { setProducts } from 'redux/slices/productsSlice';
import getFilter from 'redux/selectors/filterSelector';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import products from 'utils/products';
import { checkboxFilter, rangeFilter, searchFilter, sortFilter } from 'utils/functions';
import {
  brands,
  colorsEffect,
  maxPrice,
  maxQuantity,
  minPrice,
  minQuantity,
  options,
  types,
} from 'utils/constants';

import SearchInput from './SearchInput/SearchInput';
import SelectedSort from './SelectedSort/SelectedSort';
import RangeSlider from './RangeSlider/RangeSlider';
import CheckboxFilter from './Checkbox/Checkbox';
import ResetButton from './Reset/Reset';

import styles from './Filters.module.scss';

function Filters() {
  const filter = useAppSelector(getFilter);
  const dispatch = useAppDispatch();

  const clearSettings = useCallback(() => {
    dispatch(clearFilter());
    dispatch(clearCart());
  }, [filter]);

  useEffect(() => {
    const filteredProducts = sortFilter(products, filter.sort).filter(
      (item) =>
        searchFilter(item.name, filter.search) &&
        rangeFilter(item.price, filter.price) &&
        rangeFilter(item.quantity, filter.quantity) &&
        checkboxFilter(item.brand, filter.brand) &&
        checkboxFilter(item.type, filter.type) &&
        checkboxFilter(item.colorEffect, filter.colorEffect)
    );

    dispatch(setProducts(filteredProducts));
  }, [filter]);

  return (
    <div className={styles.filterContainer}>
      <SearchInput
        value={filter.search}
        onChange={({ target }) =>
          dispatch(updateFilter({ key: 'search', value: target.value }))
        }
        clearOnClick={() => dispatch(updateFilter({ key: 'search', value: '' }))}
      />
      <SelectedSort
        value={filter.sort}
        onChange={({ target }) =>
          dispatch(updateFilter({ key: 'sort', value: target.value }))
        }
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
        removeOnClick={(value) =>
          dispatch(removeSelectedFilter({ key: 'colorEffect', value }))
        }
      />
      <div className={styles.resetContainer}>
        <ResetButton text="Сброс фильтров" resetOnClick={() => dispatch(resetFilter())} />
        <ResetButton text="Cброс настроек" resetOnClick={clearSettings} />
      </div>
    </div>
  );
}

export default Filters;

import { memo, useCallback, useEffect } from 'react';

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
import { checkboxFilters, options, rangeSliders } from 'utils/constants';

import type { FilterState } from 'ts/interfaces';

import SearchInput from './SearchInput/SearchInput';
import SelectedSort from './SelectedSort/SelectedSort';
import RangeSlider from './RangeSlider/RangeSlider';
import CheckboxFilter from './Checkbox/Checkbox';
import ResetButton from './Reset/Reset';

import styles from './Filters.module.scss';

function Filters() {
  const filter = useAppSelector(getFilter);
  const dispatch = useAppDispatch();

  const updateFilterOnChange = useCallback(
    (name: keyof FilterState, value: string | number[]) => {
      dispatch(updateFilter({ key: name, value }));
    },
    []
  );

  const selectItemOnClick = useCallback((name: keyof FilterState, value: string) => {
    dispatch(selectFilter({ key: name, value }));
  }, []);

  const removeSelectedItemOnClick = useCallback(
    (name: keyof FilterState, value: string) => {
      dispatch(removeSelectedFilter({ key: name, value }));
    },
    []
  );

  const resetFilters = useCallback(() => {
    dispatch(resetFilter());
  }, []);

  const clearSettings = useCallback(() => {
    dispatch(clearFilter());
    dispatch(clearCart());
  }, []);

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
    <div className={styles.wrapper}>
      <SearchInput
        value={filter.search}
        filterName="search"
        placeholder="Поиск по названию"
        onChange={updateFilterOnChange}
      />
      <SelectedSort
        filterName="sort"
        title="Сортировка"
        value={filter.sort}
        onChange={updateFilterOnChange}
        options={options}
      />
      {rangeSliders.map(({ id, title, filterName, step, defaultValue }) => (
        <RangeSlider
          key={id}
          title={title}
          filterName={filterName}
          step={step}
          defaultValue={defaultValue}
          value={filter[filterName] as number[]}
          onChange={updateFilterOnChange}
        />
      ))}
      {checkboxFilters.map(({ id, title, items, filterName }) => (
        <CheckboxFilter
          key={id}
          title={title}
          filterName={filterName}
          items={items}
          filter={filter[filterName] as string[]}
          addOnClick={selectItemOnClick}
          removeOnClick={removeSelectedItemOnClick}
        />
      ))}
      <div className={styles.buttonWrapper}>
        <ResetButton text="Сброс фильтров" resetOnClick={resetFilters} />
        <ResetButton text="Cброс настроек" resetOnClick={clearSettings} />
      </div>
    </div>
  );
}

export default memo(Filters);

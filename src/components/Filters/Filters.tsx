import { memo, useCallback } from 'react';

import { cartActions } from 'redux/slices/cartSlice';
import { filterActions } from 'redux/slices/filterSlice';
import getFilter from 'redux/selectors/filterSelector';

import { useActions, useAppSelector } from 'hooks/useRedux';

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
  const { updateFilter, selectFilter, removeSelectedFilter, clearFilter, resetFilter } =
    useActions(filterActions);
  const { clearCart } = useActions(cartActions);

  const updateFilterOnChange = useCallback(
    (name: keyof FilterState, value: string | number[]) => {
      updateFilter({ key: name, value });
    },
    []
  );

  const selectItemOnClick = useCallback((name: keyof FilterState, value: string) => {
    selectFilter({ key: name, value });
  }, []);

  const removeSelectedItemOnClick = useCallback(
    (name: keyof FilterState, value: string) => {
      removeSelectedFilter({ key: name, value });
    },
    []
  );

  const resetFilters = useCallback(() => {
    resetFilter();
  }, []);

  const clearSettings = useCallback(() => {
    clearFilter();
    clearCart();
  }, []);

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

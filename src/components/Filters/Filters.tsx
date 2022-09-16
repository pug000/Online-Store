import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';

import SearchInput from './SearchInput/SearchInput';
import SelectedSort from './SelectedSort/SelectedSort';
import RangeSlider from './RangeSlider/RangeSlider';
import CheckboxFilter from './Checkbox/Checkbox';
import ResetButton from './Reset/Reset';

import {
  Checkbox,
  FilterState,
  Options,
} from '../../ts/interfaces';
import { SetState } from '../../ts/types';
import OptionValue from '../../ts/enum';

import {
  maxPrice,
  maxQuantity,
  minPrice,
  minQuantity
} from '../../settings';

import styles from './Filters.module.scss';

interface FiltersProps {
  filter: FilterState;
  setFilter: SetState<FilterState>;
  defaultFilter: FilterState;
}

function Filters(
  {
    filter,
    setFilter,
    defaultFilter,
  }: FiltersProps,
) {
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
    setFilter(defaultFilter);
    dispatch(clearCart());
  };

  return (
    <div className={styles.filterContainer}>
      <SearchInput
        value={filter.search}
        onChange={({ target }) => setFilter({ ...filter, search: target.value })}
        clearOnClick={() => setFilter({ ...filter, search: defaultFilter.search })}
      />
      <SelectedSort
        value={filter.sort}
        onChange={(selectedValue) => setFilter({ ...filter, sort: selectedValue })}
        options={options}
      />
      <RangeSlider
        title="Цена $"
        value={filter.price}
        step={10}
        onChange={(value) => setFilter({ ...filter, price: value })}
        defaultValue={[minPrice, maxPrice]}
      />
      <RangeSlider
        title="Количество"
        value={filter.quantity}
        step={1}
        onChange={(value) => setFilter({ ...filter, quantity: value })}
        defaultValue={[minQuantity, maxQuantity]}
      />
      <CheckboxFilter
        title="Производитель"
        items={brands}
        filter={filter.brand}
        addOnClick={(value) => setFilter(
          { ...filter, brand: [...filter.brand, value] }
        )}
        removeOnClick={(value) => setFilter(
          { ...filter, brand: [...filter.brand].filter((el) => el !== value) }
        )}
      />
      <CheckboxFilter
        title="Клавиатура"
        items={types}
        filter={filter.type}
        addOnClick={(value) => setFilter(
          { ...filter, type: [...filter.type, value] }
        )}
        removeOnClick={(value) => setFilter(
          { ...filter, type: [...filter.type].filter((el) => el !== value) }
        )}
      />
      <CheckboxFilter
        title="Цвет подсветки"
        items={colorsEffect}
        filter={filter.colorEffect}
        addOnClick={(value) => setFilter(
          { ...filter, colorEffect: [...filter.colorEffect, value] }
        )}
        removeOnClick={(value) => setFilter(
          { ...filter, colorEffect: [...filter.colorEffect].filter((el) => el !== value) }
        )}
      />
      <div className={styles.resetContainer}>
        <ResetButton
          text="Сброс фильтров"
          resetOnClick={() => setFilter({ ...defaultFilter, sort: filter.sort })}
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

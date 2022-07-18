import React, { FC } from 'react'
import { brandsLayout, colorsEffectLayout, optionsLayout, typesLayout } from '../../layout/data';
import { maxPrice, maxQuantity, minPrice, minQuantity } from '../../settings';
import { FiltersProps } from '../../ts/interfaces';
import { Search } from './Search/Search';
import { SelectedSort } from './SelectedSort/SelectedSort';
import { RangeSlider } from './RangeSlider/RangeSlider';
import { Checkbox } from './Checkbox/Checkbox';
import { ResetButton } from './Reset/Reset';

import styles from './Filters.module.scss';

export const Filters: FC<FiltersProps> = (
  {
    filter,
    setFilter,
    defaultFilters,
    setCart,
  }
) => {
  const resetFilters = { ...defaultFilters, sort: filter.sort }
  return (
    <div className={styles.filterContainer}>
      <Search
        value={filter.search}
        onChange={e => setFilter({ ...filter, search: e })}
      />
      <SelectedSort
        value={filter.sort}
        onChange={selectedValue => setFilter({ ...filter, sort: selectedValue })}
        optionsLayout={optionsLayout} />
      <RangeSlider
        title='Цена $'
        value={filter.price}
        step={10}
        onChange={(value) => setFilter({ ...filter, price: value })}
        defaultValue={[minPrice, maxPrice]}
      />
      <RangeSlider
        title='Количество'
        value={filter.quantity}
        step={1}
        onChange={(value) => setFilter({ ...filter, quantity: value })}
        defaultValue={[minQuantity, maxQuantity]}
      />
      <Checkbox
        title={'Производитель'}
        layout={brandsLayout}
        filter={filter.brand}
        addOnClick={(value) => setFilter(
          { ...filter, brand: [...filter.brand, value] }
        )}
        removeOnClick={(value) => setFilter(
          { ...filter, brand: [...filter.brand].filter((el) => el !== value) }
        )}
      />
      <Checkbox
        title={'Клавиатура'}
        layout={typesLayout}
        filter={filter.type}
        addOnClick={(value) => setFilter(
          { ...filter, type: [...filter.type, value] }
        )}
        removeOnClick={(value) => setFilter(
          { ...filter, type: [...filter.type].filter((el) => el !== value) }
        )}
      />
      <Checkbox
        title={'Цвет подсветки'}
        layout={colorsEffectLayout}
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
          text='Сброс фильтров'
          resetOnClick={() => setFilter(resetFilters)}
        />
        <ResetButton
          text='Cброс настроек'
          resetOnClick={() => {
            setFilter(defaultFilters);
            setCart([]);
          }}
        />
      </div>
    </div>
  )
}

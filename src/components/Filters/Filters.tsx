import React, { FC } from 'react'
import { brandsLayout, colorsEffectLayout, optionsLayout, typesLayout } from '../../layout/data';
import { FiltersProps } from '../../ts/interfaces';
import { Search } from './Search/Search';
import { SelectedSort } from './SelectedSort/SelectedSort';
import { RangeSlider } from './RangeSlider/RangeSlider';
import { Checkbox } from './Checkbox/Checkbox';

import styles from './Filters.module.scss';
import { maxPrice, maxQuantity, minPrice, minQuantity } from '../../settings';

export const Filters: FC<FiltersProps> = (
  {
    filter,
    setFilter
  }
) => {
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
        value={filter.price}
        step={10}
        onChange={(value) => setFilter({ ...filter, price: value })}
        defaultValue={[minPrice, maxPrice]}
      />
      <RangeSlider
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
    </div>
  )
}

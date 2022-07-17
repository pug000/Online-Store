import React, { FC } from 'react';
import ReactSlider from 'react-slider';
import { RangeSliderProps } from '../../../ts/interfaces';

import styles from './Slider.module.scss';

export const RangeSlider: FC<RangeSliderProps> = (
  {
    value,
    step,
    onChange,
    defaultValue,
  }
) => {
  return (
    <div className={styles.filterRange}>
      <h2 className={styles.filterRangeTitle}>Цена</h2>
      <ReactSlider
        defaultValue={value}
        className={styles.filterSlider}
        trackClassName={styles.filterSliderTracker}
        min={defaultValue[0]}
        max={defaultValue[1]}
        minDistance={0}
        step={step}
        withTracks={true}
        pearling={false}
        renderThumb={(props) => {
          return <div {...props} className={styles.filterSliderThumb}></div>
        }}
        renderTrack={(props) => {
          return <div {...props} className={styles.filterSliderTrack}></div>
        }}
        onChange={onChange}
      />
      <div className={styles.filterRangeContainer}>
        <div className={styles.filterRangeValue}>{value[0]}</div>
        <div className={styles.filterRangeValue}>{value[1]}</div>
      </div>
    </div>
  )
}

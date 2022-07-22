import React, { FC } from 'react';
import ReactSlider from 'react-slider';
import { eventHandler } from '../../../ts/types';

import styles from './RangeSlider.module.scss';

interface RangeSliderProps {
  title: string;
  value: number[];
  step: number;
  onChange: eventHandler<number[], void>;
  defaultValue: number[];
}

const RangeSlider: FC<RangeSliderProps> = (
  {
    title,
    value,
    step,
    onChange,
    defaultValue,
  }
) => {
  return (
    <div className={styles.filterRange}>
      <h2 className={styles.filterRangeTitle}>{title}</h2>
      <ReactSlider
        value={value}
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

export default RangeSlider;

import { memo } from 'react';
import ReactSlider from 'react-slider';

import type { FilterState } from 'ts/interfaces';

import styles from './RangeSlider.module.scss';

interface RangeSliderProps {
  title: string;
  value: number[];
  filterName: keyof FilterState;
  step: number;
  onChange: (name: keyof FilterState, values: number[]) => void;
  defaultValue: number[];
}

function RangeSlider({
  title,
  value,
  filterName,
  step,
  onChange,
  defaultValue,
}: RangeSliderProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <ReactSlider
        value={value}
        className={styles.slider}
        trackClassName={styles.tracker}
        min={defaultValue[0]}
        max={defaultValue[1]}
        minDistance={0}
        step={step}
        withTracks
        pearling={false}
        renderThumb={(props) => <div {...props} className={styles.thumb} />}
        renderTrack={(props) => <div {...props} className={styles.track} />}
        onChange={(values) => onChange(filterName, values)}
      />
      <div className={styles.rangeContainer}>
        <div className={styles.rangeValue}>{value[0]}</div>
        <div className={styles.rangeValue}>{value[1]}</div>
      </div>
    </div>
  );
}

export default memo(RangeSlider);

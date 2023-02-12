import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import type { ActionCreatorsMapObject } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState } from 'redux/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useActions = <A extends ActionCreatorsMapObject>(actions: A) => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export { useAppSelector, useActions };

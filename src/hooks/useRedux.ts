import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import type {
  RootState,
  AppDispatch,
} from 'ts/types';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  useAppDispatch,
  useAppSelector,
};

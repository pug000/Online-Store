import type { RootState } from 'redux/store';

const getFilter = (state: RootState) => state.filter;

export default getFilter;

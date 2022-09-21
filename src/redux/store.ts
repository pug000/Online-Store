import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './slices/cartSlice';
import filterSlice from './slices/filterSlice';
import popupSlice from './slices/popupSlice';
import productsSlice from './slices/productsSlice';

const rootReducer = combineReducers({
  cart: cartSlice,
  isPopupOpen: popupSlice,
  filter: filterSlice,
  products: productsSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['isPopupOpen', 'products'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { persistor };
export default store;

import store from 'redux/store';

type EventHandler<T, R> = (arg: T) => R;

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { EventHandler, SetState, RootState, AppDispatch };

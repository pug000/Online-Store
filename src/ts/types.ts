type EventHandler<T, R> = (arg: T) => R;

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type { EventHandler, SetState };

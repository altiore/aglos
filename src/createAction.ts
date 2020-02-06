type SetState1<S> = (state: S) => void;
type SetStateParam<S> = (state: S) => Partial<S>;
type SetState2<S> = (param: SetStateParam<S>) => void;

type InternalAction<S> = (setState: SetState1<S> | SetState2<S>, api?: any) => any;

export const createAction = (callback) => {};

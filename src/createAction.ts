import { AGLOS_ACTION_TYPE } from './action';

type SetState1<S> = (state: S) => void;
type SetStateParam<S> = (state: S) => Partial<S>;
type SetState2<S> = (param: SetStateParam<S>) => void;

type InternalAction<S> = (setState: SetState1<S> & SetState2<S>, api?: any) => any;

type MainAction<S> = (...args: any) => InternalAction<S>;

export const createAction = <S>(callback: MainAction<S>) => {
  return function(...args) {
    return function(dispatch, getState, extraArgument) {
      const setState = (setStateArg) => dispatch({
        type: AGLOS_ACTION_TYPE,
        setStateArg,
        state: getState(),
      }) ;
      callback(...args)(setState);
    }
  }
};

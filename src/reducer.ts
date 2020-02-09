import produce from "immer"

import { AGLOS_ACTION_TYPE } from './action';

export const createReducer = (initialState, actions) => produce(
  (draft, action) => {
    const preparedActions = actions instanceof Map ? actions : new Map(Object.keys(actions).map((key) => [key, actions[key]]));
    if (action.type === AGLOS_ACTION_TYPE) {
      const payload = typeof action.setStateArg === 'function' ? action.setStateArg(action.state['counter']) : action.setStateArg;
      if (typeof payload === 'number' || typeof payload === 'string') {
        draft = payload;
      } else {
        Object.keys(payload).forEach((key) => {
          draft[key] = payload[key];
        });
      }
      return draft;
    }
  },
  initialState
);

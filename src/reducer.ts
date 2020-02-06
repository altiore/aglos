import produce from "immer"

const nextState = (initialState, actions) => produce(initialState, draftState => {
  draftState.push({todo: "Tweet about it"});
  draftState[1].done = true
});

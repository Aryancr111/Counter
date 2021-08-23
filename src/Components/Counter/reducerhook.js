import { useReducer } from "react";
// importing useReducer hook to handle state transitions

const initialState = { count: 1, max: 1000 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      const newCount = state.count + 1; //handles the increment
      return {
        ...state,
        count: newCount <= state.max ? newCount : state.count,
      };
      //need to spread state to make accurate state change
    case "decrement":
      return { ...state, count: state.count - 1 }; //handles the decrement
      //need to spread state to make accurate state change
    case "absolute":
      return {
        ...state,
        count: +action.value <= state.max ? +action.value : state.count,
      };
    default:
      return state;
  }
}

export default function useCounter(initialValues) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...initialValues,
  });
  return [state, dispatch];
}

import { ADD, DELETE } from "./actions";

interface Todo {
  id: string;
  text: string;
}

interface Action {
  type: string;
  payload: Todo | string;
}

const initialState: Todo[] = [];

export const reducer = (state = initialState, action: Action): Todo[] => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload as Todo];
    case DELETE:
      return [...state.filter((todo) => todo.id !== action.payload)];
    default:
      return state;
  }
};

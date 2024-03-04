export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";

interface Todo {
  id: string;
  text: string;
}

export const ADD_TODO = (newTodo: Todo) => {
  return {
    type: ADD,
    payload: newTodo,
  };
};

export const DELETE_TODO = (id: string) => {
  return {
    type: DELETE,
    payload: id,
  };
};

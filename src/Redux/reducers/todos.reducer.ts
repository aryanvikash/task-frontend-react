// Actions

export const SET_TODO_LOADING = "SET_TODO_LOADING";
export const FETCH_TODOS = "FETCH_TODOS";
export const SAVE_TODOS = "SAVE_TODOS";
export const ADD_TODO = "ADD_TODO";
export const MARKCOMPLETE_TODO = "MARKCOMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const setTodoLoading = (loading: boolean) => ({
  type: SET_TODO_LOADING,
  payload: loading,
});

export const fetchtodo = (board: Number) => ({
  type: FETCH_TODOS,
  payload: board,
});

export const savetodos = (todos: any[]) => ({
  type: SAVE_TODOS,
  payload: todos,
});

export const addtodo = (boardId: Number, todo: any) => ({
  type: ADD_TODO,
  payload: { boardId, todo },
});


export const upadteTodo = (todo:any, content: any) => ({
  type: UPDATE_TODO,
  payload: { todo, content },
});
export const deletetodo = (todo: any) => ({
  type: DELETE_TODO,
  payload: todo,
});

export const markCompleteTodo = (completed: any, todo: any) => ({
  type: MARKCOMPLETE_TODO,
  payload: { completed, todo },
});

const initialState = {
  loading: false,
  todos: [],
};

export default function todos(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case SET_TODO_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SAVE_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };

    default:
      return state;
  }
}

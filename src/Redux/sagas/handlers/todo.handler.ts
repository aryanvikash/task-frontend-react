import { call, put } from "redux-saga/effects";

import {
  fetchtodo,
  savetodos,
  setTodoLoading,
} from "../../reducers/todos.reducer";
import {
  requestAddNewTask,
  requestDeleteTodo,
  requestGetTodos,
  requestMarkCompleteTodo,
  requestUpdateTask,
} from "../requests/todos.request";

export function* handleGetTodo(action: any): any {
  try {
    yield put(setTodoLoading(true));
    const { data } = yield call(requestGetTodos, action.payload);
    yield put(savetodos(data));
    yield put(setTodoLoading(false));
  } catch (error) {
    console.log(error);
  }
}
export function* HandleMarkCompleteTodo(action: any): any {
  try {
    const { completed, todo } = action.payload;
    yield put(setTodoLoading(true));
    yield call(requestMarkCompleteTodo, todo.id, completed);
    yield put(fetchtodo(todo.board.id));
    yield put(setTodoLoading(false));
  } catch (error) {
    console.log(error);
  }
}
export function* HandledeleteTodo(action: any): any {
  try {
    const todo = action.payload;
    yield put(setTodoLoading(true));
    yield call(requestDeleteTodo, todo.id);
    yield put(fetchtodo(todo.board.id));
    yield put(setTodoLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* HandleAddnewTask(action: any): any {
  try {
    const { boardId, todo } = action.payload;
    yield put(setTodoLoading(true));
    yield call(requestAddNewTask, boardId, todo);
    yield put(fetchtodo(boardId));
    yield put(setTodoLoading(false));
  } catch (error) {
    console.log(error);
  }
}
export function* HandlerUpdateTask(action: any): any {
  try {
    const { todo, content } = action.payload;
    yield put(setTodoLoading(true));
    yield call(requestUpdateTask, todo.id, content);
    yield put(fetchtodo(todo.board.id));
    yield put(setTodoLoading(false));
  } catch (error) {
    console.log(error);
  }
}

import { all, takeLatest } from "redux-saga/effects";
import {
  HandleAddnewTask,
  HandledeleteTodo,
  handleGetTodo,
  HandleMarkCompleteTodo,
  HandlerUpdateTask,
} from "./handlers/todo.handler";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  MARKCOMPLETE_TODO,
  UPDATE_TODO,
} from "../reducers/todos.reducer";
import {
  handleAddnewBoard,
  handleDeleteBoard,
  handleGetBoard,
} from "./handlers/boards.hander";
import {
  ADD_BOARD,
  DELETE_BOARD,
  FETCH_BOARDS,
} from "../reducers/boards.reducer";

export function* watcherSaga() {
  yield all([
    takeLatest(FETCH_TODOS, handleGetTodo),
    takeLatest(DELETE_TODO, HandledeleteTodo),
    takeLatest(MARKCOMPLETE_TODO, HandleMarkCompleteTodo),
    takeLatest(ADD_TODO, HandleAddnewTask),
    takeLatest(FETCH_BOARDS, handleGetBoard),
    takeLatest(ADD_BOARD, handleAddnewBoard),
    takeLatest(DELETE_BOARD, handleDeleteBoard),
    takeLatest(UPDATE_TODO, HandlerUpdateTask),
  ]);
}

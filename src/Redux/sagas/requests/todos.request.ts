import axios from "axios";
import { config } from "../../../constants";
export function requestGetTodos(board: number) {
  return axios.get(`${config.apiUrl}/todos?board=${board}`);
}
export function requestDeleteTodo(id: number) {
  return axios.delete(`${config.apiUrl}/todos/${id}`);
}
export function requestMarkCompleteTodo(id: Number, completed: boolean) {
  return axios.patch(`${config.apiUrl}/todos/${id}`, { completed });
}

export function requestAddNewTask(boardId: Number, todo: any) {
  return axios.post(`${config.apiUrl}/todos`, {
    content: todo,
    board: boardId,
  });
}

export function requestUpdateTask(id: Number, content: any) {
  return axios.patch(`${config.apiUrl}/todos/${id}`, {
    content: content,
  });
}

import { call, put } from "redux-saga/effects";
import {
  fetchBoards,
  loadingBoard,
  saveBoards,
} from "src/Redux/reducers/boards.reducer";
import {
  requestaddnewBoard,
  requestDeleteBoard,
  requestGetBoard,
} from "../requests/boards.requests";

export function* handleGetBoard(action: any): any {
  try {
    yield put(loadingBoard(true));
    const { data } = yield call(requestGetBoard);
    yield put(saveBoards(data));
    yield put(loadingBoard(false));
  } catch (error) {
    console.log(error);
  }
}
export function* handleAddnewBoard(action: any): any {
  try {

    yield call(requestaddnewBoard, action.payload);
    yield put(fetchBoards());
  } catch (error) {
    console.log(error);
  }
}
export function* handleDeleteBoard(action: any): any {
  try {
    yield call(requestDeleteBoard, action.payload);
    yield put(fetchBoards());
  } catch (error) {
    console.log(error);
  }
}


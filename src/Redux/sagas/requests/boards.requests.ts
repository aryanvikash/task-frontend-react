import axios from "axios";
import { config } from "../../../constants";

export function requestGetBoard() {
  return axios.get(`${config.apiUrl}/boards`);
}
export function requestaddnewBoard(name: any) {
  return axios.post(`${config.apiUrl}/boards`, { name });
}
export function requestDeleteBoard(id: number) {
  return axios.delete(`${config.apiUrl}/boards/${id}`);
}

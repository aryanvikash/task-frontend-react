export const LOADING_BOARDS = "LOADING_BOARDS";
export const FETCH_BOARDS = "FETCH_BOARDS";
export const SAVE_BOARDS = "SAVE_BOARDS";
export const DELETE_BOARD ="DELETE_BOARD";

export const ADD_BOARD = "ADD_BOARD";

export function loadingBoard(loading: boolean) {
  return {
    type: LOADING_BOARDS,
    payload: loading,
  };
}

export const deleteboard = (id: number)=> {
  return {
    type: DELETE_BOARD,
    payload: id,
  };
}

export const fetchBoards = () => ({
  type: FETCH_BOARDS,
});

export function addnewBoard(name: any) {
  return {
    type: ADD_BOARD,
    payload: name,
  };
}
export const saveBoards = (boards: any) => ({
  type: SAVE_BOARDS,
  payload: boards,
});

const initialState = {
  loading: false,
  boards: [],
};

const boardsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING_BOARDS:
      return {
        ...state,
        loading: action.payload,
      };

    case FETCH_BOARDS:
      return {
        ...state,
      };
    case SAVE_BOARDS:
      return {
        ...state,
        loading: false,
        boards: action.payload,
      };

    default:
      return state;
  }
};

export default boardsReducer;

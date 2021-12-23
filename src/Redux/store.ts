// setup redux store
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import TodoReducer from "./reducers/todos.reducer";
import BoardReducer from "./reducers/boards.reducer";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  todo: TodoReducer,
  board: BoardReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// prettier-ignore
// @ts-ignore
// const composeEnhancers =typeof window === 'object' &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware)
//   // other store enhancers if any
// );

// store in typescript with type
const store = createStore(reducer, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;

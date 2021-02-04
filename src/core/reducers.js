import { combineReducers } from "redux";
import { albumReducer } from "./albums/reducer";
import { todosReducer } from "./todos";
import { userReducer } from './users';

export default combineReducers({
    users: userReducer,
    todos: todosReducer,
    albums: albumReducer
})
import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { userReducer } from './users';

export default combineReducers({
    users: userReducer,
    todos: todosReducer
})
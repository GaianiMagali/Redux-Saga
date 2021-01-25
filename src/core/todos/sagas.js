import { call, fork, takeEvery } from 'redux-saga/effects';
import { getTodos } from '../api';
import { todosActions } from './actions';

export function* todosList() {
    yield call(getTodos)
}

//Watchers
export function* watchTodosList() {
    yield takeEvery(todosActions.GET_TODOS, todosList)
}

//Root
export const todosSagas = [
    fork(watchTodosList)
]


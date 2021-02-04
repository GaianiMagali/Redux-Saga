import { call, fork, takeEvery } from 'redux-saga/effects';
import { getUsers } from '../api';
import { usersActions } from './actions';

export function* usersList() {
    yield call(getUsers)
}

//Watchers
export function* watchUsersList() {
    yield takeEvery(usersActions.GET_USERS, usersList)
}

//Root
export const usersSaga = [
    fork(watchUsersList)
]
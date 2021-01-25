import { call, put } from 'redux-saga/effects';
import { usersRequestActions } from '../users';
import { todosRequestActions } from '../todos';
import { api } from './api-service';

function* fetchEntities(apiFunction, actions, id, param) {
    try {
        yield put(actions.pending());

        const data = yield call(apiFunction, param || id);

        if (data.length > 0) {
            yield put(actions.success(data));
        } else {
            yield put(actions.failed(data));
        }

    } catch (error) {
        yield put(actions.failed(error));
    }
}

export const getUsers = fetchEntities.bind(null, api.getUsers, usersRequestActions);
export const getTodos = fetchEntities.bind(null, api.getTodos,
todosRequestActions)
import { all } from 'redux-saga/effects';
import { todosSagas } from './todos';
import { usersSagas } from './users';


export default function* sagas() {
    yield all([
        ...usersSagas,
        ...todosSagas
    ])
}
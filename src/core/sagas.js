import { all } from 'redux-saga/effects';
import { albumsSaga } from './albums/sagas';
import { todosSaga } from './todos/sagas';
import {usersSaga} from './users/sagas';



export default function* sagas() {
    yield all([
        ...usersSaga,
        ...todosSaga,
        ...albumsSaga
        

    ])
}
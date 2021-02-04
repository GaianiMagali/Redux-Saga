import { call, fork, takeEvery } from "redux-saga/effects";
import { getAlbums } from "../api";
import { albumsActions } from "./actions";

export function* albumsList() {
    yield call(getAlbums)
}

export function* wathcAlbumsList() {
    yield takeEvery(albumsActions.GET_ALBUMS, albumsList)
}

export const albumsSaga = [
    fork(wathcAlbumsList)
]
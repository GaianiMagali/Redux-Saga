
export const albumsActions = {
    ALBUMS_SUCCESS: "ALBUMS_SUCCESS",
    ALBUMS_PENDING: "ALBUMS_PENDING",
    ALBUMS_FAILED: "ALBUMS_FAILED",
    GET_ALBUMS: "GET_ALBUMS",

    albumsSuccess: data => ({
        type: albumsActions.ALBUMS_SUCCESS,
        payload: {
            data
        }
    }),

    albumsPending: () => ({
        type: albumsActions.ALBUMS_PENDING
    }),

    albumsFailed: error => ({
        type: albumsActions.ALBUMS_FAILED,
        payload: { error }
    }),

    getAlbums: () => ({
        type: albumsActions.GET_ALBUMS
    })
};

export const albumsRequestActions = {
    failed: albumsActions.albumsFailed,
    success: albumsActions.albumsSuccess,
    pending: albumsActions.albumsPending
}
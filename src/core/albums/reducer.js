import { albumsActions } from "./actions";
import { Albums } from "./albums";

export const albumReducer = (state = new Albums(), { payload, type }) => {
    switch (type) {
        case albumsActions.ALBUMS_SUCCESS:
            console.log('success');
            return state.merge({
                isPending: false,
                success: true,
                error: null,
                albums: payload.data
            })
        case albumsActions.ALBUMS_PENDING:
            console.log('pending');
            return state.set('isPending', true)

        case albumsActions.ALBUMS_FAILED:
            console.log('failed');
            return state.merge({
                isPending: false,
                success: false,
                error: payload.error
            })
        default:
            return state;
    }
    

}
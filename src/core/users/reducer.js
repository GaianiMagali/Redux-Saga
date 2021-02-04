import { usersActions } from "./actions";
import { Users } from "./users";

export const userReducer = (state = new Users(),{payload, type}) =>{
    switch (type) {
        case usersActions.USERS_SUCCESS:
            console.log('user success');
            return state.merge({
                isPending: false,
                success: true,
                error: null,
                users: payload.data //Users List
            })

        case usersActions.USERS_PENDING:
            console.log('user pending');
            return state.set('isPending', true)
            
        case usersActions.USER_FAILED:
            console.log('user failed');
            return state.merge({
                isPending: false,
                success: false,
                error: payload.error,
            })
        default:
            return state;
    }
}
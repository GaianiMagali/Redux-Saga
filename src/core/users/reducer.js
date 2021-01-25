import { usersActions } from "./actions";
import { Users } from "./users";

export const userReducer = (state = new Users(),{payload, type}) =>{
    switch (type) {
        case usersActions.USERS_SUCCESS:
            return state.merge({
                isPending: false,
                success: true,
                users: payload.data //Users List
            })

        case usersActions.USERS_PENDING:
            return state.set('isPending', true)
            
        case usersActions.USER_FAILED:
            return state.merge({
                isPending: false,
                success: false,
                error: payload.error
            })

        default:
            return state;
    }
}
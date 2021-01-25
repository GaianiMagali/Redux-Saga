
export const usersActions = {
    USERS_SUCCESS: 'USERS_SUCCESS',
    USERS_PENDING: 'USERS_PENDING',
    USER_FAILED: 'USER_FAILED',
    GET_USERS: 'GET_USERS',


    usersSuccess: data => ({
        type: usersActions.USERS_SUCCESS,
        payload: {
            data
        }
    }),

    usersPending: () => ({
        type: usersActions.USERS_PENDING
    }),

    usersFailed: error => ({
        type: usersActions.USER_FAILED,
        payload: { error }
    }),

    getUsers: () => ({
        type: usersActions.GET_USERS
    })
};

export const usersRequestActions = {
    failed: usersActions.usersFailed,
    success: usersActions.usersSuccess,
    pending: usersActions.usersPending
}
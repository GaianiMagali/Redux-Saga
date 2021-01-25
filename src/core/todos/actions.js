
export const todosActions = {
    TODOS_SUCCESS: 'TODOS_SUCCESS',
    TODOS_PENDING: 'TODOS_PENDING',
    TODOS_FAILED: 'TODOS_FAILED',
    GET_TODOS: 'GET_TODOS',

    todosSuccess: data => ({
        type: todosActions.TODOS_SUCCESS,
        payload: {
            data
        }
    }),

    todosPending: () => ({
        type: todosActions.TODOS_PENDING
    }),

    todosFailed: (error) => ({
        type: todosActions.TODOS_FAILED,
        payload: {
            error
        }
    }),

    getTodos: () => ({
        type: todosActions.GET_TODOS
    })
};

export const todosRequestActions = {
    failed: todosActions.todosFailed,
    success: todosActions.todosSuccess,
    pending: todosActions.todosPending
}
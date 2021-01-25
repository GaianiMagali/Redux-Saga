import { todosActions } from './actions';
import { Todos } from './todos';

export const todosReducer = (
    state = new Todos(), { payload, type }) => {

    switch (type) {
        case todosActions.TODOS_SUCCESS:
            return state.merge({
                isPending: false,
                success: true,
                todos: payload.data
            })

        case todosActions.TODOS_PENDING:
            return state.set('isPending', true)

        case todosActions.TODOS_FAILED:
            return state.merge({
                isPending: false,
                success: false,
                error: payload.error
            })

        default:
           return state;
    }
}
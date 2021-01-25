import { Record } from 'immutable';

export const Todos = new Record({
    isPending: false,
    success: false,
    error: null,
    todos: []
})



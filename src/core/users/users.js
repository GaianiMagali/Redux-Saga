import { Record } from 'immutable';

export const Users = new Record({
    isPending: false,
    success: false,
    error: null,
    users: []
})
import { Record } from 'immutable';

export const Albums = new Record({
    isPending: false,
    success: false,
    error: null,
    albums: []
})
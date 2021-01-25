import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const api = {

    getUsers() {
        return dispatch({
            url: `${API_BASE_URL}/users`
        })
    },

    getTodos() {
        return dispatch({
            url: `${API_BASE_URL}/todos`
        })
    }
}


export function dispatch(options) {
    let config = {
        method: options.method || 'get',
        url: options.url
    }

    return axios(config)
        .then(res => res.data)
        .catch(error => console.log(error))
}
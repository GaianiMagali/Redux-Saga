import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usersActions } from '../../../core/users';
import { CardUsers } from '../../components/CardUsers';

export const UsersScreen = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state)
    console.log(users.toJS());

    useEffect(() => {
        dispatch(usersActions.getUsers())
    }, [])

    return (
        <div className="container">
            <div className="row ">
                {
                    users.users.map(user =>
                        <CardUsers
                            key={user.id}
                            user={user}
                        />
                    )
                }
            </div>

        </div>
    )
}

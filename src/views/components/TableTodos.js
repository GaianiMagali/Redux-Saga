import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../core/todos';

export const TableTodos = () => {

    const dispatch = useDispatch();
    const { todos } = useSelector(state => state);
    //console.log(todos.toJS());

    useEffect(() => {
        dispatch(todosActions.getTodos())
    }, [])

    return (
        <div className="mt-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.todos.map(todo =>
                            <tr key={todo.id}>
                                <th scope="row">{todo.id}</th>
                                <td>{todo.title}</td>
                                <td>
                                    {todo.completed ?
                                        "Completed" :
                                        "Incompleted"
                                    }
                                </td>

                                <td>
                                    <button type="button" className="btn btn-outline-primary">User Profile</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

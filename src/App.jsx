import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { useHistory } from 'react-router';

import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './views/components/ui/Navbar';

//{ users, getUsers }
export const App = () => {
    const history = useHistory();

 
    //Para ver los atributos del objeto

    useEffect(() => {
        history.push('/home')
    }, []);

    // console.log(users.toJS());

    return (
        <div>
            <Navbar/>
            <AppRoutes />
        </div>

    )
}

// const mapStateToProps = (state, props) => {
//     const { users } = state;

//     return {
//         users
//     }
// }

// const mapDispatchToProps = {
//     getUsers: usersActions.getUsers
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

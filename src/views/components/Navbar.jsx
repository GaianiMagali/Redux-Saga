import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/home"
                >
                    Home
            </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/user/:idUser/albums"
                        >
                            Albums
                    </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/user/:idUser/todos"
                        >
                            Todos
                     </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/users"
                        >

                            Users
                    </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

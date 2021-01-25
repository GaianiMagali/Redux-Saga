import { AlbumsScreen } from "../views/pages/albums/AlbumsScreen";
import { HomeScreen } from "../views/pages/Home/HomeScreen";
import { TodosScreen } from "../views/pages/todos/TodosScreen";
import { UsersScreen } from "../views/pages/users/UsersScreen";


export const routes = [
    {
        path: '/home',
        component: HomeScreen
    },

    {
        path: '/users',
        component: UsersScreen
    },

    {
        path: '/user/:idUser/todos',
        component: TodosScreen
    },

    {
        path: '/user/:idUser/albums',
        component: AlbumsScreen
    }
]
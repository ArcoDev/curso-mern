import LayoutAdmin from '../layouts/LayoutAdmin';
//admin pages
import AdminHome from '../pages/Admin';
import AdminSign from '../pages/Admin/SignIn';

//configuracion de la rutas
const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdminSign,
                exact: true
            }
        ]
    }
];

export default routes;
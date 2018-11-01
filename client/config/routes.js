// Routes
import Home from '../routes/Home';
import Login from '../routes/Login';
import Registration from '../routes/Registration';
import NotFound from '../routes/NotFound';
import Main from '../routes/Main';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        isPrivate: true
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        name: 'NotFound',
        component: NotFound
    }
];

export default routes;

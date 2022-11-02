import Home from '../pages/Home';
import Following from '../pages/Following';
import Update from '../pages/Update';
import HeaderOnly from "../components/Layout/HeaderOnly"

// Dùng cho những layout chung
var publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Following',
        component: Following,
    },
    {
        path: '/Update',
        component: Update,
        layout: HeaderOnly,
    },
    {
        path: '/@:nickname',
        component: Update,
    }
];

// Dùng cho những layout cần đăng nhập
var privateRoute = [];

export { privateRoute, publicRoute };

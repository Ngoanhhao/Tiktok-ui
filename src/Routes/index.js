import Home from '../pages/Home';
import Following from '../pages/Following';
import Update from '../pages/Update';
import HeaderOnly from "../components/Layout/HeaderOnly"

import RoutesConfig from "../RoutesConfig/RoutesConfig"
// Dùng cho những layout chung
var publicRoute = [
    {
        path: RoutesConfig.Home,
        component: Home,
    },
    {
        path: RoutesConfig.Following,
        component: Following,
    },
    {
        path: RoutesConfig.Update,
        component: Update,
        layout: HeaderOnly,
    },
    {
        path: RoutesConfig.Config,
        component: Update,
    }
];

// Dùng cho những layout cần đăng nhập
var privateRoute = [];

export { privateRoute, publicRoute };

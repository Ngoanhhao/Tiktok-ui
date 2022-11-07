import Home from '../pages/Home';
import Following from '../pages/Following';
import Update from '../pages/Update';
import HeaderOnly from "../Layout/HeaderOnly"

import config from "../RoutesConfig"
// Dùng cho những layout chung
var publicRoute = [
    {
        path: config.rountes.Home,
        component: Home,
    },
    {
        path: config.rountes.Following,
        component: Following,
    },
    {
        path: config.rountes.Update,
        component: Update,
        layout: HeaderOnly,
    },
    {
        path: config.rountes.Config,
        component: Update,
    }
];

// Dùng cho những layout cần đăng nhập
var privateRoute = [];

export { privateRoute, publicRoute };

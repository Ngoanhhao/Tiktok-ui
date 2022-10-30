import styles from './SidebarStyle.module.scss';
import classNames from 'classnames/bind';

import { SiderTaskbar } from './Sidebar-Option/SidebarTaskBar';
import { SidebarLogin } from './Sidebar-Option/SidebarLogin/';
import { SidebarAccount } from './Sidebar-Option/SidebarAccount';

var cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('sidebar')}>
            <SiderTaskbar />
            <SidebarLogin />
            <SidebarAccount />
        </aside>
    );
}

export default Sidebar;

import styles from "./SidebarStyle.module.scss"
import classNames from "classnames/bind"

var cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx("sidebar")}>
            test
        </aside>
    );
}

export default Sidebar;
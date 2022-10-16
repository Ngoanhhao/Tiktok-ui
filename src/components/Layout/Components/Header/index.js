import styles from "./HeaderStyle.modul.scss"
import className from "classnames/bind"
var cx = className.bind(styles)

function Header() {
    return ( 
        <div className={cx('header-wrapper')}>
            <div className={cx('header-content')}>
                
            </div>
        </div> 
    );
}

export default Header;
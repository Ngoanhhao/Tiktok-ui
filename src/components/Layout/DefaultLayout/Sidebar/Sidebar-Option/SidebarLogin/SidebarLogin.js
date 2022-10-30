import classNames from 'classnames/bind';
import styles from './SidebarLogin.module.scss';

var cx = classNames.bind(styles);

function SidebarLogin() {
    return (
        <div className={cx('SidebarLogin-Wrapper')}>
            <p>Log in to follow creators, like videos, and view comments.</p>
            <button>Log in</button>
        </div>
    );
}

export default SidebarLogin;

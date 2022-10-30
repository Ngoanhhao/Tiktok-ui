import classNames from 'classnames/bind';
import styles from './SidebarAccount.module.scss';
import { AccountItem } from "../../../../../AccountItem"

var cx = classNames.bind(styles);

function SidebarAccount() {
    return ( 
        <div>
            <p>Suggested accounts</p>
            <AccountItem />
            <AccountItem />
        </div>
     );
}

export default SidebarAccount;
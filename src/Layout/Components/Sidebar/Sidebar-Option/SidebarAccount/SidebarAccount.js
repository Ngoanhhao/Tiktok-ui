import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarAccount.module.scss';
import { AccountItem } from "../../../../../components/AccountItem"

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
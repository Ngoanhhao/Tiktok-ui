import React from 'react';
import {NavLink} from "react-router-dom"
import {
    faHome,
    faUserGroup,
    faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SiderTaskbar.module.scss';

var cx = classNames.bind(styles);

function SiderTaskbar() {
    return (
        <div className={cx('taskbar-wrapper')}>
            <div className={cx('foryou')}>
                <NavLink to="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faHome} />
                    For You 
                </NavLink>
            </div>
            <div>
                <h2 className={cx('following')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUserGroup} />
                    Following
                </h2>
            </div>
            <div>
                <h2 className={cx('live')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faVideoCamera} />
                    LIVE
                </h2>
            </div>
        </div>
    );
}

export default SiderTaskbar;

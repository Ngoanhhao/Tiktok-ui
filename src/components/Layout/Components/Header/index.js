import React, { useEffect, useState } from 'react';
import styles from './HeaderStyle.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faEllipsisVertical,
    faPlus,
    faCircleQuestion,
    faKeyboard,
    faEarthAsia,
    faUser,
    faCoins,
    faVideo,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import { Menudropdown } from '../../../Menudropdown';
import { Button } from '../../../Button';
import { Logo } from '../../../../components/Icon';
import Img from "../../../../components/Img"
import Search from "../Search";

var cx = classNames.bind(styles);

function Header() {
    var currentUser = true;
    var MENU_ITEMS = {
        items: [
            {
                icon: faEarthAsia,
                title: 'English',
                items: {
                    title: 'Language',
                    items: [
                        {
                            code: 'vi',
                            title: 'Tiếng Việt',
                        },
                        {
                            code: 'en',
                            title: 'English',
                        },
                    ],
                },
            },
            {
                icon: faCircleQuestion,
                title: 'Feedback and help',
                to: '/feedback',
            },
            {
                icon: faKeyboard,
                title: 'Keyboard shortcuts',
            },
        ],
    };

    var Login_MenuData = {
        items: [
            {
                icon: faUser,
                title: 'View profile',
            },
            {
                icon: faCoins,
                title: 'Get coins',
            },
            {
                icon: faVideo,
                title: 'LIVE studio',
            },
            {
                icon: faGear,
                title: 'Settings',
            },
            {
                icon: faUser,
                title: 'View profile',
            },
            ...MENU_ITEMS.items,
            {
                icon: faRightFromBracket,
                title: 'Log out',
                border_top: true,
            },
        ],
    };



    var handleOnchange = (item) => {
        console.log(item);
    };

    return (
        <header>
            <div className={cx('header-wrapper')}>
                <div className={cx('header-content')}>
                    <div className={cx('logo')}>
                        <Logo />
                    </div>
                </div>
                {/* search */}
                <Search/>

                <div className={cx('header-right')}>
                    <Button p="9px 18px">
                        <FontAwesomeIcon icon={faPlus} className={cx('plus')} />
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messager" delay={[0, 200]}>
                                <button className={cx('plane')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" delay={[0, 200]}>
                                <button className={cx('comment')}>
                                    <FontAwesomeIcon icon={faComment} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    {
                        <Menudropdown
                            position="bottom-end"
                            data={currentUser ? Login_MenuData : MENU_ITEMS}
                            onChange={handleOnchange}
                        >
                            {currentUser ? (
                                <Img
                                    src=""
                                    alt=""
                                />
                            ) : (
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            )}
                        </Menudropdown>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;

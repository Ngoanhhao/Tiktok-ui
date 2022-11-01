import React, { useEffect, useState } from 'react';
import styles from './HeaderStyle.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {
    faCircleXmark,
    faEllipsisVertical,
    faPlus,
    faSearch,
    faSpinner,
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

import { TippyWraper } from '../../../../components/TippyPoppup';
import { AccountItem } from '../../../AccountItem';
import { Menudropdown } from '../../../Menudropdown';
import { Button } from '../../../Button';
import { Logo } from '../../../../components/Icon';
import Img from "../../../../components/Img"

var cx = classNames.bind(styles);

function Header() {
    var [Results, setResults] = useState([]);
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

    useEffect(() => {
        setTimeout(() => {
            setResults([]);
        }, 0);
    }, []);

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

                <HeadlessTippy
                    interactive
                    visible={Results.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('Search-ResultBox')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <TippyWraper>
                                <h4 className={cx('accounts-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </TippyWraper>
                        </div>
                    )}
                >
                    <div className={cx('search-wrapper')}>
                        <input placeholder="Search accounts and videos" />

                        <div className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                        <div className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </HeadlessTippy>

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
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1693582401636354.jpeg?x-expires=1667480400&x-signature=5OwF7X%2BMBMnWyIUqWpylpcArIB4%3D"
                                    alt=""
                                    Fallback="https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s88-c-k-c0x00ffffff-no-rj"
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

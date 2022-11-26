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
import { Link } from 'react-router-dom';  

import styles from './HeaderStyle.module.scss';
import { Menudropdown } from '../../../components/Menudropdown';
import { Button } from '../../../components/Button';
import { Logo } from '../../../components/Icon';
import Img from '../../../components/Img';
import Search from '../Search';
import config from "../../../RoutesConfig"

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
                        <Link to={config.rountes.Home}><Logo /></Link>
                    </div>
                </div>
                {/* search */}
                <Search />

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
                            className={cx('MenuSettings')}
                            data={currentUser ? Login_MenuData : MENU_ITEMS}
                            onChange={handleOnchange}
                        >
                            {currentUser ? (
                                <Img src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1693582401636354.jpeg?x-expires=1667732400&x-signature=VIS632e3rb3XID6YVkd3estq9C0%3D" alt="" />
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

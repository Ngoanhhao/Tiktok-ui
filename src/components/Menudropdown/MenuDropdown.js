import classNames from 'classnames/bind';
import { Button } from '../Button';
import styles from './SettingStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { TippyWraper } from '../TippyPoppup';

var cx = classNames.bind(styles);

function Menudropdown({ data = [], onChange = () => {}, position, children }) {
    var [menuData, setmenuData] = useState([data]);

    var current = menuData[menuData.length - 1];

    return (
        <Tippy
            delay={[0,500]}
            interactive
            offset={[10, 0]}
            onHide={()=>{setmenuData(data => data.slice(0,1))}}
            placement={position}
            render={(attrs) => (
                <div
                    className={cx('Menudropdown-ResultBox')}
                    tabIndex="-1"
                    {...attrs}
                >
                    <TippyWraper className={cx('menu-box')}>
                        <div className={cx('Menudropdown')}>
                            {menuData.length > 1 && (
                                <div className={cx('header')}>
                                    <button
                                        className={cx('header-icon')}
                                        onClick={() => {
                                            setmenuData((value) => {
                                                return value.slice(
                                                    0,
                                                    value.length - 1,
                                                );
                                            });
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <p>{current.title}</p>
                                </div>
                            )}

                            {current.items.map((item, index) => {
                                return (
                                    <Button
                                        className={cx('menu-item',{border_top: item.border_top})}
                                        outline_none
                                        key={index}
                                        to={item.to}
                                        onClick={() => {
                                            if (item.items) {
                                                setmenuData((value) => [
                                                    ...value,
                                                    item.items,
                                                ]);
                                            } else {
                                                onChange(item);
                                            }
                                        }}
                                    >
                                        {!!item.icon && (
                                            <FontAwesomeIcon
                                                className={cx('Menudropdown-icon')}
                                                icon={item.icon}
                                            />
                                        )}
                                        <span className={cx('title')}>
                                            {item.title}
                                        </span>
                                    </Button>
                                );
                            })}
                        </div>
                    </TippyWraper>
                </div>
            )}
        >
            {/* Button toggle */}
            <button className={cx('toggle-btn')}>
                {children}
            </button>
        </Tippy>
    );
}

export default Menudropdown;

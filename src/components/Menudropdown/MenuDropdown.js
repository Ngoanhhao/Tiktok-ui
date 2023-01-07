import React from 'react';
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

function Menudropdown({ data = [], onChange = () => {}, position, children, hideOnClick = false, className}) {
    var [menuData, setmenuData] = useState([data]);
    var [fontWeight,setfontWeight] = useState(false)
    var current = menuData[menuData.length - 1];


    function setDefaultMenu () {
        setmenuData(data => data.slice(0,1))
    }

    function handleBack () {
        setmenuData((value) => {
            return value.slice(
                0,
                value.length - 1,
            );
        });
        setfontWeight(false)
    }

    var renderItem = (current) => {
        return current.items.map((item, index) => {
            return (
                <Button
                    className={cx('menu-item',{border_top: item.border_top},{font_weight_300:fontWeight})}
                    outline_none
                    key={index}
                    to={item.to}
                    onClick={() => {
                        if (item.items) {
                            setmenuData((value) => [
                                ...value,
                                item.items,
                            ]);
                            setfontWeight(true)
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
        })
    }

    return (
        <Tippy
            delay={[0,500]}
            interactive
            hideOnClick={hideOnClick}
            offset={[10, 0]}
            onHide={setDefaultMenu}
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
                                        onClick={handleBack}
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <p className={cx('header-title')}>{current.title}</p>
                                </div>
                            )}
                            <div className={cx(className)}>
                                {/* {current.items.map((item, index) => {
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
                                })} */}
                                {renderItem(current)}
                            </div>
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

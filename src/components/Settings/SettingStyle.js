import classNames from 'classnames/bind';
import { Button } from '../../components/Button';
import styles from './SettingStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
var cx = classNames.bind(styles);

function Settings({ data = [] }) {
    var [menuData, setmenuData] = useState([data]);

    var current = menuData[menuData.length - 1];

    return (
        <div className={cx('settings')}>
            {menuData.length > 1 && (
                <div className={cx('header')}>
                    <button
                        className={cx('header-icon')}
                        onClick={() =>{
                            setmenuData((value) =>{
                                return value.slice(0, value.length - 1)
                            })
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
                        className={cx('menu-item')}
                        outline_none
                        key={index}
                        to={item.to}
                        onClick={() => {
                            if (item.items) setmenuData((value) => [...value, item.items]);
                        }}
                    >
                        {!!item.icon && (
                            <FontAwesomeIcon
                                className={cx('Settings-icon')}
                                icon={item.icon}
                            />
                        )}
                        <span className={cx('title')}>{item.title}</span>
                    </Button>
                );
            })}
        </div>
    );
}

export default Settings;

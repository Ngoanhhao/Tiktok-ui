import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TippyWraper } from '../../../../components/TippyPoppup';
import { AccountItem } from '../../../AccountItem';
import { Button } from '../../../../components/Button';
import { useDebounce } from '../../../Hooks';

var cx = classNames.bind(styles);

function Search() {
    var [searchValue, setsearchValue] = useState('');
    var [Results, setResults] = useState([]);
    var [ShowResults, setShowResults] = useState(true);
    var [loadding, setLoadding] = useState(false);

    var newvalue = useDebounce(searchValue, 500);

    var inputRef = useRef();
    useEffect(() => {
        if (!newvalue.trim()) {
            setResults([]);
            return;
        }
        setLoadding(true);

        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                newvalue,
            )}&type=less`,
        )
            .then((res) => res.json())
            .then((data) => {
                setResults(data.data);
                setLoadding(false);
            })
            .catch(() => {
                setLoadding(false);
            });
    }, [newvalue]);

    var handleinput = (value = []) => {
        if (value[0] === ' ') {
            setsearchValue('');
        } else {
            setsearchValue(value);
        }
    };

    return (
        <>
            <HeadlessTippy
                interactive
                onClickOutside={() => setShowResults(false)}
                visible={ShowResults && Results.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('Search-ResultBox')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <TippyWraper>
                            <h4 className={cx('accounts-title')}>Accounts</h4>

                            {Results.map((value) => {
                                return (
                                    <AccountItem data={value} key={value.id} />
                                );
                            })}

                            <Button
                                outline_none
                                hoverNone
                                className={cx('ViewResult')}
                            >
                                View all results for "{searchValue}"
                            </Button>
                        </TippyWraper>
                    </div>
                )}
            >
                <div className={cx('search-wrapper')}>
                    <input
                        placeholder="Search accounts and videos"
                        onChange={(e) => handleinput(e.target.value)}
                        onClick={() => {
                            setShowResults(true);
                        }}
                        value={searchValue}
                        ref={inputRef}
                    />

                    {!!searchValue && !loadding && (
                        <div
                            className={cx('clear')}
                            onClick={() => {
                                setsearchValue('');
                                setResults([]);
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                    )}
                    {loadding && (
                        <div className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                    )}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;

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
import Request from '../../../utils/HttpRequest';

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

        const fetchApi = async () => {
            try {
                var data = await Request.get(`users/search`, {
                    params: {
                        q: newvalue,
                        type: 'less',
                    },
                })
                setResults(data.data.data);
                setLoadding(false);
            } catch (error) {
                setLoadding(false);
            }
           
        }

        fetchApi();
    }, [newvalue]);

    var handleinput = (value = []) => {
        var searchValue = value;
        // if (searchValue[0] !== ' ') {
        //     setsearchValue(searchValue);
        // }
        if(!searchValue.startsWith(" ")){
            setsearchValue(searchValue);
        }
    };

    return (
        <div>
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

                            <div>
                                {Results.map((value) => {
                                    return (
                                        <AccountItem data={value} key={value.id} />
                                    );
                                })}
                            </div>

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
                    <button className={cx('search-btn')} onMouseDown={e=> e.preventDefault()}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

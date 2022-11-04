import React from 'react';
import styles from './TippyWrapper.module.scss';
import classNames from 'classnames/bind';

var cx = classNames.bind(styles);

function TippyWraper({ children , className}) {
    return <div className={cx('Poppup-Wraper',{[className]:className})}>{children}</div>;
}

export default TippyWraper;

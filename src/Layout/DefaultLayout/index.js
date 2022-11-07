import React from 'react'
import Header from '../Components/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import styles from "./DefaultLayoutStyle.module.scss"
import classNames from "classnames/bind"

var cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

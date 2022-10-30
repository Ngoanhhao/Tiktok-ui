import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItemSearch.module.scss';

var cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account')}>
            <div className={cx('avatar')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_300x300.webp?x-expires=1666332000&x-signature=wBAaA5LcXJRld5OA%2F6AIKrOb6l0%3D"
                    alt="Theanh28"
                />
            </div>
            <div className={cx('Infomation')}>
                <h4>
                    theanh28entertainment
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <p>theanh28entertainment</p>
            </div>
        </div>
    );
}

export default AccountItem;

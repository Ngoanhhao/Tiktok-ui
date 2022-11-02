import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItemSearch.module.scss';

import Img from "../../components/Img"

var cx = classNames.bind(styles);

function AccountItem({ data }) {
    if(!data)return;
    return (
        <Link className={cx('account')} to={`/@${data.nickname}`}>
            <div className={cx('avatar')}>
                <Img
                    src={data.avatar}
                    alt={data.full_name}
                />
            </div>
            <div className={cx('Infomation')}>
                <h4>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>
                <p>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;

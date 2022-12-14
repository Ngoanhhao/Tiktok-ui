import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

var cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    onClick,
    primary,
    outline,
    outline_none,
    type,
    small,
    p,
    className,
    hoverNone,
    ...all
}) {
    var Button = 'button';
    var comp = {
        onClick,
        ...all,
    };

    if (to) {
        Button = Link;
        comp.to = to;
    } else if (href) {
        Button = 'a';
        comp.href = href;
    }

    return (
        <Button
            // className={classNames({ [styles.primary]: primary }, styles.btn)}
            className={cx('btn', {
                primary,
                outline,
                outline_none,
                small,
                type,
                hoverNone,
                [className]: className,
            })}
            style={p ? { padding: p } : undefined}
            {...comp}
        >
            <span>{children}</span>
        </Button>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    outline_none: PropTypes.bool,
    type: PropTypes.string,
    small: PropTypes.bool,
    p: PropTypes.string,
    className: PropTypes.string,
    hoverNone: PropTypes.bool,
}
export default Button;

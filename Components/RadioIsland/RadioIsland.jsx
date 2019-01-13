import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './RadioIsland.css';

const cx = classNames.bind(styles);

const RadioIsland = ({
    inGroup,
    children,
    checked,
    onChange,
    ...props
}) => (
    <div
        className={cx('root', {
            root_checked: checked,
            root_inGroup: inGroup
        })}
        onClick={onChange}
    >
        <div className={cx('content')}>
            {children}
        </div>
        <div className={cx('radio')}>
            <input
                className={cx('inputRadio')}
                {...props}
                checked={checked}
                hidden
                type='radio'
            />
            <span className={cx('spanRadio')} />
        </div>
    </div>
);

RadioIsland.propTypes = {
    inGroup: PropTypes.bool,
    children: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

RadioIsland.defaultProps = {
    inGroup: false,
    checked: false,
    onChange: () => {}
};

export default RadioIsland;

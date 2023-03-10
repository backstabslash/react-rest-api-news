import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ onChange, value, onKeyDown, onClick }) => (
    <div className="inputWrapper">
        <a onClick={onClick}><i className="fas fa-search"></i></a>
        <input
            className="input"
            placeholder="Search for news"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
        />
    </div >
);

Input.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}

Input.defaultProps = {
    onChange: () => { },
    onKeyPress: () => { },
    value: ''
}

export default Input;

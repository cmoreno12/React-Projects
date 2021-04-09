import React from "react";
import PropTypes from 'prop-types';

const Label = ({ children, inputId }) => {
    return (
        <label htmlFor={inputId}>{children}</label>
    );
};

Label.propTypes = {
    children: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
}

export default Label;

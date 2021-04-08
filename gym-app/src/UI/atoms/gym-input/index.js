import React from "react";
import PropTypes from 'prop-types';

const Input = ({
  id,
  handleInputChange,
  name,
  placeholder,
  type,
}) => {
  return (
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
}

export default Input;

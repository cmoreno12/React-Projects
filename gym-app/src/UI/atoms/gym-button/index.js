import PropTypes from 'prop-types';
import React from "react";

export const BUTTONTYPE = {
  primary: "primary",
  secondary: "secondary",
  outline: "outline-primary",
  danger: "danger",
  success: "success",
};

export const BUTTONSIZE = {
  small: "btn-sm",
  large: "btn-lg",
};

const Button = ({ children, size, type, disabled }) => {

  const className = `btn ${'btn-' + BUTTONSIZE[size] ?? ''} ${'btn-' + BUTTONTYPE[type]}`

  return (
    <button className={className} disabled={disabled} >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'danger',
    'success'
  ]),
  disabled: PropTypes.bool,
}

export default Button;
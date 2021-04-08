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

const Button = ({
  children,
  disabled,
  handleClick,
  size,
  type,
}) => {

  const className = `btn ${'btn-' + BUTTONSIZE[size] ?? ''} ${'btn-' + BUTTONTYPE[type]}`

  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.oneOf([
    'danger',
    'outline',
    'primary',
    'secondary',
    'success'
  ]),
}

export default Button;
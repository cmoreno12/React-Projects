import React from "react";
import PropTypes from "prop-types";

export const BUTTONCLASS = {
  primary: "primary",
  secondary: "secondary",
  outline: "outline-primary",
  danger: "danger",
  success: "success",
};

export const BUTTONSIZE = {
  large: "btn-lg",
  small: "btn-sm",
};

export const GymButton = ({ type, value, className }) => {
  return (
    <button type={type} className={className}>
      {value}
    </button>
  );
};

GymButton.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

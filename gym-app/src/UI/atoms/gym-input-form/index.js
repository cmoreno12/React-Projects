import PropTypes from "prop-types";
import React from "react";

export const GymInputForm = ({
  className,
  id,
  name,
  type,
  label,
  placeholder,
  handleInputChange,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

GymInputForm.propTypes = {
  className: PropTypes.string,
  handleInputChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

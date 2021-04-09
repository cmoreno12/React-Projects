import React from "react";
import PropTypes from 'prop-types';
import Label from '../../atoms/gym-label';
import Input from '../../atoms/gym-input';

const InputForm = ({ id,
    handleInputChange,
    name,
    placeholder,
    type,
    label,
    colSize
}) => {
    return (
        <div className={`form-group ${colSize ? 'col-md-' + colSize : ''}`}>
            <Label inputId={id}>{label}</Label>
            <Input id={id} handleInputChange={handleInputChange} name={name} placeholder={placeholder} type={type} />
        </div>
    );
};

InputForm.propTypes = {
    handleInputChange: PropTypes.func,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
    label: PropTypes.string,
    colSize: PropTypes.number
}

export default InputForm;
import React from 'react';

const CustomInput = ({
   meta: { touched, error },
   placeholder,
   input,
   label,
   type
}) => (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={placeholder}/>
        {touched && error && <span>{error}</span>}
    </div>
);

export default CustomInput;

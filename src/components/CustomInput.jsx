import React from "react";

const CustomInput = ({ inputStyle, inputProps }) => {
  return <input className={`${inputStyle}`} {...inputProps} />;
};

export default CustomInput;

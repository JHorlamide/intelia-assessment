import React from "react";

const CustomInput = ({ inputProps }) => {
  return (
    <input
      className='border px-10 py-3 font-medium text-white-700 rounded w-full bg-gray-200'
      {...inputProps}
    />
  );
};

export default CustomInput;

import React from "react";

const CustomBtn = ({ btnStyle, children, ...rest }) => {
  return (
    <button className={`${btnStyle}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomBtn;

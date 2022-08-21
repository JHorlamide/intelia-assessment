import React from "react";

const CustomBtn = ({ btnMargin, children, ...rest }) => {
  return (
    <button
      className={`bg-primaryColor text-white font-semibold rounded-lg py-4 px-8 ${btnMargin}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomBtn;

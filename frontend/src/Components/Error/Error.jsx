import React from "react";

const Error = ({ errMessage }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p className="text-headingColor text-[20px] leading-[30px] font-semibold">
        {" "}
        {errMessage}
      </p>
    </div>
  );
};

export default Error;

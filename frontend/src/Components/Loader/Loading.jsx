import React from "react";

import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="flex items-center mt-9 justify-center w-ful h-full">
      <HashLoader color="#0067FF" />
    </div>
  );
};

export default Loading;

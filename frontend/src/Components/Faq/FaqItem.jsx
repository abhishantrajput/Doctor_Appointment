import React from "react";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  // if(isOpen==false){

  //   setIsOpen(true)
  // }

  // else{
  //   setIsOpen(false)
  // }
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer" onClick={toggle}>
      <div className="flex items-center justify-between gap-5" >
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>

        <div
          className={`${
            isOpen &&
            "bg-primaryColor text-white border-solid border-white border-[2px]"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141f21] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-[14px] lg:text-[18px] leading-6 lg:leading-8 font-[400] text-textColor ">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;

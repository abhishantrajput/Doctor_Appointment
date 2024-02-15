import React from "react";

import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  return (
    <div>
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} />
      ))}
    </div>
  );
};

export default FaqList;

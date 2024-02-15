import React from "react";
import {services} from "../assets/data/services";
import ServiceCard from "../Components/Service/ServiceCard.jsx";

const Services=()=>{

  return (

    <section className="pt-0">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[50px] ">
        {services.map((item, index) => (
          <ServiceCard item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services;

import React from "react";


import { formateDate } from "../../Utils/FormateDate";



const DoctorsAbout = ({ name, about, qualification, experience }) => {

  



  
  

  return (
    <div>
      <div>
        <h2 className="text-[20px] leading-[30px] font-semibold text-headingColor flex items-center gap-2">
          About Of
          <span className="text-irisBlueColor text-[24px] font-bold  leading-8">
            {" "}
            {name}
          </span>
        </h2>

        <p className="text__para">{about}</p>
      </div>

      <div className="mt-12">
        <h2 className="text-[20px] leading-[30px] font-semibold text-headingColor flex items-center gap-2">
          Qualifications
        </h2>

        <ul className="pt-4 md:p-5">
          {qualification?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between md:gap-5 md:mb-[30px]"
            >
              <div className="">
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formateDate(item.startingDate)} -{" "}
                  {formateDate(item.endingDate)}
                </span>
                <p className="text-[16px] font-medium leading-7 text-textColor">
                  {item.degree}
                </p>
              </div>
              <p className="text-[14x] font-medium leading-5 text-textColor">
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-[20px] leading-[30px] font-semibold text-headingColor flex items-center gap-2">
          Experience
        </h2>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
          {experience?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span className="text-[15px] text-yellowColor leading-6 font-semibold">
                {formateDate(item.startingDate)} -{" "}
                {formateDate(item.endingDate)}{" "}
              </span>
              <p className="text-[15px] font-medium leading-6 text-textColor">
                {item.position}
              </p>
              <p className="text-[15px] font-medium leading-5 text-textColor">
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAbout;

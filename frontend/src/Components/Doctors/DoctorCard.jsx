import React from "react";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import starIcon from "../../assets/images/Star.png";
const DoctorCard = ({ doctor, index }) => {
  const {
    name,
    specialization,
    averageRating,
    totalRating,
    photo,
    experiences,
  } = doctor;

  const avgRating = averageRating !== undefined ? averageRating.toFixed(1) : 0;

  return (
    <div className="p-3 lg:p-5">
      <div className="">
        <img src={photo} className="w-full" alt="doctor" />
      </div>

      <h2 className="text-[18px] lg:text-[26px] leading-[30px]  lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-5 text-[12px] leading-4 lg:text-[16px] flex self-center lg:leading-7 font-semibold rounded tracking-widest">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] leading-4 text-[14px] lg:text-[16px] lg:leading-7 font-semibold text-headingColor ">
            <img src={starIcon} alt="" /> {avgRating}
          </span>

          <span className="flex items-center gap-[6px] leading-4 text-[14px] lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className=" flex items-center justify-between mt-3 lg:mt-7">
        <div>
          {/* <h2 className="text-[13px] lg:text-[17px] font-[500] text-headingColor">
            +{totalPatients} Patients
          </h2> */}
          <p className="text-textColor">
            At {experiences && experiences[0]?.hospital}
          </p>
        </div>

        <Link
          to={`/doctors/${doctor._id}`}
          className="h-[44px] w-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none "
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;

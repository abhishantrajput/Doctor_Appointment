import React from "react";
import DoctorsAbout from "../../Pages/Doctors/DoctorsAbout";

import starPng from "../../assets/images/Star.png";



const Overview = ({ doctorData }) => {
  // console.log("Overview DoctorData",doctorData)
  const avgRating = doctorData.averageRating!==undefined?doctorData.averageRating.toFixed(1):0
  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <figure className="max-w-[200px] max-h-[200px]">
          <img src={doctorData?.photo} className="w-full" />
        </figure>

        <div>
          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-3 leading-4 lg:py-2 lg:px-4 lg:leading-7 rounded font-semibold tracking-widest ">
            {doctorData.specialization}
          </span>
          <h3 className="mt-2 text-[22px] leading-9 font-bold text-headingColor">
            {doctorData.name}
          </h3>

          <div className="mt-2 flex items-center gap-[3px]">
            <div>
              <span className=" flex items-center gap-[6px] text-headingColor leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                <img src={starPng} />
                {avgRating}
              </span>
            </div>

            <div className="">
              <span className=" text-textColor leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                ({doctorData.totalRating})
              </span>
            </div>
          </div>
          <p className="text__para lg:max-w-[360px] text-[15px] leading-6  ">
            {doctorData?.bio}
          </p>
        </div>
      </div>

      <DoctorsAbout
        name={doctorData.name}
        experience={doctorData.experiences}
        qualification={doctorData.qualifications}
        about={doctorData.about}
      />
    </div>
  );
};

export default Overview;

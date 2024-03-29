import React, { useEffect } from "react";
import { useState } from "react";
import SidePanel from "./SidePanel";
import DoctorImg from "../../assets/images/doctor-img02.png";
import StarImg from "../../assets/images/Star.png";
import DoctorsAbout from "./DoctorsAbout";
import Feedback from "./Feedback";
import { useParams } from "react-router-dom";
import { BASE_URL,UserRole } from "../../config.js";
import UseFetchData from "../../hooks/UseFetchData.jsx";
import Loader from "../../Components/Loader/Loading.jsx";
import Error from "../../Components/Error/Error.jsx";

const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");

  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = UseFetchData(`${BASE_URL}/doctors/${id}`);

  console.log(doctor);

  const {
    name,
    about,
    qualifications,
    experiences,
    specialization,
    photo,
    totalRating,
    averageRating,
    ticketPrice,
    timeSlots,
    _id,

    bio,
    reviews,
    role,
  } = doctor;

  const avgRating = averageRating !== undefined ? averageRating.toFixed(1) : 0;

  // const [isDoctor, setIsDoctor] = useState(false);

  // useEffect(() => {
  //   console.log("Role is",UserRole);
  //   if (UserRole === "doctor") {
  //     setIsDoctor(true);
  //   }

  //   if (UserRole === "patient") {
  //     setIsDoctor(false);
  //   }


  //   console.log(isDoctor)
  // }, [role]);

  return (
    <section className="">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
            <div className="col-span-2">
              <div className="flex items-center gap-6">
                <figure className="max-w-[200px] max=h-[200px]">
                  <img src={photo} alt="" className="w-full" />
                </figure>

                <div>
                  <span
                    className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 text-[12px] tracking-widest leading-4 lg:leading-7  lg:text-[16px] font-semibold
              "
                  >
                    {specialization}
                  </span>

                  <h3 className="text-headingColor leading-9 mt-3 font-bold text-[22px]">
                    {name}
                  </h3>

                  <div className="flex  items-center gap-[6px] ">
                    <span className="flex items-center gap-[6px] leading-5 text-[14px] lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={StarImg} /> {avgRating}
                      <span className="text-[14px] lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                        ({totalRating})
                      </span>
                    </span>
                  </div>
                  <p className="text__para lext-[12px] leading-5 md:text-[14px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
                <button
                  className={` ${
                    tab === "about" &&
                    "border-b border-primaryColor border-solid"
                  } py-2 px-5 mr-5 leading-7 text-[16px] text-headingColor font-semibold`}
                  onClick={() => setTab("about")}
                >
                  About
                </button>
                <button
                  className={` ${
                    tab === "feedback" &&
                    "border-b border-primaryColor border-solid "
                  } py-2 px-5 mr-5 leading-7 text-[16px] text-headingColor font-semibold`}
                  onClick={() => setTab("feedback")}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorsAbout
                    name={name}
                    about={about}
                    qualification={qualifications}
                    experience={experiences}
                  />
                )}

                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>

            {/* {!isDoctor && (
            )} */}
              <div className="">
                <SidePanel
                  ticketPrice={ticketPrice}
                  timeSlots={timeSlots}
                  doctorId={_id}
                />
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsDetails;

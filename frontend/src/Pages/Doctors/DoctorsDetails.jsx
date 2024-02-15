import React from "react";
import { useState } from "react";
import SidePanel from "./SidePanel";
import DoctorImg from "../../assets/images/doctor-img02.png";
import StarImg from "../../assets/images/Star.png";
import DoctorsAbout from "./DoctorsAbout";
import Feedback from "./Feedback";

const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section className="">
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
          <div className="col-span-2">
            <div className="flex items-center gap-6">
              <figure className="max-w-[200px] max=h-[200px]">
                <img src={DoctorImg} alt="" className="w-full" />
              </figure>

              <div>
                <span
                  className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 text-[12px] tracking-widest leading-4 lg:leading-7  lg:text-[16px] font-semibold
              "
                >
                  Surgeon
                </span>

                <h3 className="text-headingColor leading-9 mt-3 font-bold text-[22px]">
                  John Doe
                </h3>

                <div className="flex  items-center gap-[6px] ">
                  <span className="flex items-center gap-[6px] leading-5 text-[14px] lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={StarImg} />
                    4.8
                    <span className="text-[14px] lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      (272)
                    </span>
                  </span>
                </div>
                <p className="text__para lext-[12px] leading-5 md:text-[14px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe adipisci laudantium{" "}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
              <button
                className={` ${
                  tab === "about" && "border-b border-primaryColor border-solid"
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
              {tab === "about" && <DoctorsAbout />}

              {tab === "feedback" && <Feedback />}
            </div>
          </div>

          <div className="">
            <SidePanel />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;

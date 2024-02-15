import React from "react";

const SidePanel = () => {
  return (
    <div className="self-center shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para font-semibold mt-0">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 font-bold text-headingColor">
          2500 INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available time Slots:
        </p>

        <ul className="mt-3 ">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              Monday
            </p>
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              3:00 PM - 8:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              Wednesday
            </p>
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              3:00 PM - 8:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              Friday
            </p>
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              3:00 PM - 8:00 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;

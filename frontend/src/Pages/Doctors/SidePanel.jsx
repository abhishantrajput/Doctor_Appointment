import React from "react";
import convertTime from "../../Utils/convertTime";
const SidePanel = ({ ticketPrice, timeSlots, doctorId }) => {
  console.log(timeSlots);
  return (
    <div className="self-center shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para font-semibold mt-0">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 font-bold text-headingColor">
          {ticketPrice} INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available time Slots:
        </p>

        <ul className="mt-3 ">
          {timeSlots?.map((item, index) => (
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 font-semibold text-textColor">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 font-semibold text-textColor">
                {convertTime(item.startingTime)} -{" "}
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;

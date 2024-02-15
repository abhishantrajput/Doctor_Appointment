import React from "react";

import { formateDate } from "../../Utils/FormateDate";

const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h2 className="text-[20px] leading-[30px] font-semibold text-headingColor flex items-center gap-2">
          About Of
          <span className="text-irisBlueColor text-[24px] font-bold  leading-8">
            {" "}
            John Doe
          </span>
        </h2>

        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non
          distinctio modi odit iure excepturi reprehenderit rerum. Molestias,
          voluptatem quia? Fuga quam, sit distinctio corporis quas, perspiciatis
          explicabo accusamus consequuntur id laborum nemo. Assumenda dolores
          dignissimos quas sint, tenetur vero, itaque ad, odio quo vel aliquam
          reiciendis ipsa libero aperiam.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-[20px] leading-[30px] font-semibold text-headingColor flex items-center gap-2">
          Qulifications
        </h2>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:items-end sm:justify-between md:gap-5 md:mb-[30px]">
            <div className="">
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("05-05-2012")} - {formateDate("02-05-2015")}
              </span>
              <p className="text-[16px] font-medium leading-7 text-textColor">
                Doctor of Philosophy(PHD) in Surgeon
              </p>
            </div>
            <p className="text-[14x] font-medium leading-5 text-textColor">
              University of California
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-end sm:justify-between md:gap-5 md:mb-[30px]">
            <div className="">
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("01-18-2015")} - {formateDate("03-06-2018")}
              </span>
              <p className="text-[15px] font-medium leading-6 text-textColor">
                Doctor of Philosophy(PHD) in Surgeon
              </p>
            </div>
            <p className="text-[15x] font-medium leading-5 text-textColor">
              University of California
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-[20px] leading-[30px] font-semibold text-headingColor flex items-center gap-2">
          Experience
        </h2>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] text-yellowColor leading-6 font-semibold">
              {formateDate("05-05-2012")} - {formateDate("02-05-2015")}{" "}
            </span>
            <p className="text-[15px] font-medium leading-6 text-textColor">
                Doctor of Philosophy(PHD) in Surgeon
              </p>
              <p className="text-[15px] font-medium leading-5 text-textColor">
              University of California
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] text-yellowColor leading-6 font-semibold">
              {formateDate("05-05-2012")} - {formateDate("02-05-2015")}{" "}
            </span>
            <p className="text-[15px] font-medium leading-6 text-textColor">
                Doctor of Philosophy(PHD) in Surgeon
              </p>
              <p className="text-[15px] font-medium leading-5 text-textColor">
              University of California
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAbout;

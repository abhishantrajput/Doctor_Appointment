import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../Components/Doctors/DoctorCard";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find the Doctor</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between ">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />

            <button className="btn mt-0 rounded-[0px] rounded-r-md tracking-widest">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
            {doctors.map((doctor, index) => (
              <DoctorCard doctor={doctor} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[500px] mx-[auto] ">
            <h2 className="heading text-center">What Our Patients Say</h2>

            <p className="text__para text-center">
              {" "}
              World-class Care for Everyone. Our Health care Offers Unmatched,
              Expert Health Care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;

import React from "react";

import { doctors } from "../../assets/data/doctors.js";
import DoctorCard from "./DoctorCard.jsx";

import { BASE_URL } from "../../config.js";
import UseFetchData from "../../hooks/UseFetchData.jsx";
import Loader from "../../Components/Loader/Loading.jsx";
import Error from "../Error/Error.jsx";

const DoctorsList = () => {
  const { data: doctors, error, loading } = UseFetchData(`${BASE_URL}/doctors`);

  console.log(doctors);

  return (
    <>
      {error && <Error errMessage={error} />}
      {loading && <Loader />}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[80px]">
          {doctors.map((doctor, index) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorsList;

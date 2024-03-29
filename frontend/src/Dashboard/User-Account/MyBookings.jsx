import React from "react";

import { authContext } from "../../context/authContext";

import DoctorCard from "../../Components/Doctors/DoctorCard.jsx";

import { BASE_URL } from "../../config";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";

import { useContext } from "react";

import UseFetchData from "../../hooks/UseFetchData";

const MyBookings = () => {
  const {} = useContext(authContext);

  const {
    data: appointments,
    error,
    loading,
  } = UseFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  console.log("Appointments",appointments)

  return (
    <div>
      {loading && <Loading />}

      {error && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {appointments.map((doctor) => {

            return <DoctorCard doctor={doctor} key={doctor._id} />;
          })}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-[10rem] text-[23px] text-primaryColor leading-8 flex items-center justify-center  ">
          You Do not have any Appointments with Doctor yet.😔
        </h2>
      )}
    </div>
  );
};

export default MyBookings;

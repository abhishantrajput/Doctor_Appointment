import React from "react";
import doctorImg from "../../assets/images/doctor-img01.png";
import userImg from "../../assets/images/patient-avatar.png";
import { useContext } from "react";
import MyBookings from "./MyBookings.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

import { authContext } from "../../context/authContext.jsx";
import { useState } from "react";

import useGetProfile from "../../hooks/UseFetchData.jsx";
import Error from "../../Components/Error/Error.jsx";
import { BASE_URL } from "../../config.js";
import Loading from "../../Components/Loader/Loading.jsx";

const MyAccount = () => {
  const {
    data: userData,
    error,
    loading,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log("userData", userData);

  // console.log(loading)
  const { dispatch } = useContext(authContext);

  const [tab, setTab] = useState("bookings");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loading />}

        {error && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md ">
              <div className="flex items-center justify-center">
                <figure className="w-[120px] h-[120px] rounded-full  border-2 border-solid border-primaryColor">
                  <img
                    src={userData.photo}
                    className="rounded-full w-full h-full"
                  />
                </figure>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood type :{" "}
                  <span className="ml-2 text-headingColor text-[18px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px] ">
                <button
                  className="w-full bg-[#181A1E] p-2 text-[16px] leading-7 text-white rounded-md"
                  onClick={handleLogout}
                >
                  logout
                </button>
                <button className="w-full bg-red-600 p-2 mt-4 text-[16px] leading-7 text-white rounded-md">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" &&
                    "bg-primaryColor text-white font-normal"
                  }  py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  }  py-2  px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <ProfileSettings user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;

import React, { useState } from "react";
import Loader from "../../Components/Loader/Loading.jsx";
import Error from "../../Components/Error/Error.jsx";
import Tabs from "./Tabs.jsx";
import { BASE_URL } from "../../config.js";
import Overview from "../../Components/Tabs/Overview.jsx";
import Profile from "../../Components/Tabs/Profile.jsx";
import Appointments from "../../Components/Tabs/Appointments.jsx";

import infoImg from "../../assets/info.png";
import getDoctorProfile from "../../hooks/UseFetchData.jsx";

const Dashboard = () => {
  const {
    data: doctorData,
    error,
    loading,
  } = getDoctorProfile(`${BASE_URL}/doctors/profile/me`);
  console.log(doctorData);

  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto ">
        {loading && !error && <Loader />}
        {error && !loading && <Error errMessage={error} />}

        {!error && !loading && (
          <div className="grid grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} doctorId={doctorData._id} />

            <div className="col-span-2">
              {doctorData.isApproved == "pending" && (
                <div className=" flex w-full p-4 mb-4 text-yellow-800 items-center gap-2 bg-yellow-50 h-max rounded-lg">
                  <img src={infoImg} className="w-5 h-5" />

                  <span className="sr-only">info</span>

                  <div className="text-sm font-medium">
                    To get Approval please complete your Profile. We'll Review
                    Manually and approve within 3 days.{" "}
                  </div>
                </div>
              )}

              <div className="mt-8">
                {tab === "overview" && <Overview doctorData={doctorData} />}
                {tab === "appointments" && (
                  <Appointments appointments={doctorData.appointments} />
                )}
                {tab === "settings" && <Profile doctorData={doctorData} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;

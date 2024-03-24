import React from "react";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { useContext } from "react";

import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const Tabs = ({ tab, setTab, doctorId }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleDelete = async () => {
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div>
      <span className="lg:hidden">
        {" "}
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>

      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md `}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md `}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md `}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full ">
          <button
            className="w-full bg-[#181A1E] p-2 text-[16px] leading-7 text-white rounded-md"
            onClick={handleLogout}
          >
            logout
          </button>
          <button
            className="w-full bg-red-600 p-2 mt-4 text-[16px] leading-7 text-white rounded-md"
            onClick={handleDelete}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

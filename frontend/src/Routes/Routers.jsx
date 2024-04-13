import React from "react";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
import Contact from "../Pages/Contact";
import Doctors from "../Pages/Doctors/Doctors";
import DoctorsDetails from "../Pages/Doctors/DoctorsDetails";
import NotPageFound from "../Pages/NotPageFound";
import MyAccount from "../Dashboard/User-Account/MyAccount";
import Dashboard from "../Dashboard/Doctor-Account/Dashboard";
import ProtectRoute from "./ProtectRoute";
import CheckoutSuccessPage from "../Pages/Doctors/CheckoutSuccessPage";
import RoomPage from "../screens/Rooms.jsx";
import LobbyScreen from "../screens/Lobby";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout-success" element={ <CheckoutSuccessPage/>} />
      <Route path="/lobby" element={<ProtectRoute allowedRoles={["patient","doctor"]}><LobbyScreen/></ProtectRoute>} />
      <Route path="/room/:id" element={<RoomPage/>} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectRoute>
        }
      />
      <Route path="*" element={<NotPageFound />} />
    </Routes>
  );
};

export default Routers;

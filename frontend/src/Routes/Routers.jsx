import React from "react";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
import Contact from "../Pages/Contact";
import Doctors from "../Pages/Doctors/Doctors";
import DoctorsDetails from "../Pages/Doctors/DoctorsDetails";
import NotPageFound from "../Pages/NotPageFound";
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
      <Route path="*"  element={<NotPageFound/>}/>

    </Routes>
  );
};

export default Routers;

import React from "react";

import Logo from "../../assets/MedConnect_Logo.png";

import { RiLinkedinFill } from "react-icons/ri";

import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "https://www.youtube.com/abhi",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/abhishantrajput",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/abhi",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/abhishant-rajput/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks1 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Service",
  },
  {
    path: "/blog",
    display: "Blog",
  },
];

const quickLinks2 = [
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Find a Loction",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quickLinks3 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contactus",
    display: "Contact Us",
  },
];

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className=" mt-10 pt-10 pb-10 border-t border-solid border-primaryColor" >
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row flex-wrap gap=[30px]  ">
          <div>
            <img src={Logo} alt="Logo" width={200} />

            <p className="text-[14px] leading-7 font-[400] text-textColor mt-3 pl-2">
              Copyright &#169; Developed by Abhishant Rajput
            </p>

            <div className="flex items-center gap-3 mt-3 pl-2 links">
              {socialLinks.map((link, index) => (
                <Link target="_blank"
                  to={link.path}
                  className="w-9 h-9 border border-solid flex justify-center items-center rounded-full border-[#181A1E] hover:bg-primaryColor hover:border-none"
                  key={index}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:mt-0">
            <h2 className="text-[22px] leading-[30px] font-[700] text-headingColor">
              Quick Links
            </h2>

            <ul className="mt-4">
              {quickLinks1.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-10 lg:mt-0">
            <h2 className="text-[22px] leading-[30px] font-[700] text-headingColor">
              I want to
            </h2>

            <ul className="mt-4">
              {quickLinks2.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-10 lg:mt-0">
            <h2 className="text-[22px] leading-[30px] font-[700] text-headingColor">
              Support
            </h2>

            <ul className="mt-4">
              {quickLinks3.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

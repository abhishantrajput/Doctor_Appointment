import React from "react";

import HeroImage1 from "../assets/images/hero-img01.png";
import HeroImage2 from "../assets/images/hero-img02.png";
import icon02 from "../assets/images/icon02.png";
import icon01 from "../assets/images/icon01.png";
import icon03 from "../assets/images/icon03.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import videoIcon from "../assets/images/video-icon.png";
import featureImg from "../assets/images/feature-img.png";
import HeroImage3 from "../assets/images/hero-img03.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServicesList from "../Components/Service/ServicesList";
import DoctorsList from "../Components/Doctors/DoctorsList";
import FaqList from "../Components/Faq/FaqList";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ----------Hero Section--------------- */}
      <section className="hero__section p-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[60px] items-center justify-between ">
            {/* -------------Hero Content------------------ */}

            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help Patients live healthy, longer Life.
                </h1>

                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aperiam facilis ratione eaque, odio reprehenderit esse odit
                  estquasi repellat placeat, ab impedit dolores. Ipsum, culpa.
                </p>

                <button className="py-[10px] px-[15px] md:py-[15px] md:px-[20px] lg:px-[20] lg:py-[25px] btn font-[600] tracking-widest">
                <Link to={"/doctors"}> Request For an Appointment</Link>
                </button>
              </div>

              {/* --------------Hero Counter----------------- */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Stisfaction</p>
                </div>
              </div>
            </div>

            {/* -----------Hero Content 2-------------- */}

            <div className="flex gap-[30px] justify-end ">
              <img className="w-full" src={HeroImage1} alt="hero image1" />
            </div>

            <div className="mt-[30px]">
              <img src={HeroImage2} className="w-full mb-[30px] " />
              <img src={HeroImage3} className="w-full " />
            </div>
          </div>
        </div>
      </section>
      {/* -----------------Hero Section------------------ */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-[auto]">
            <h2 className="heading text-center">
              Providing the Best Medical Services
            </h2>
            <p className="text__para text-center">
              World-class Care for Everyone. Our Health care Offers Unmatched,
              Expert Health Care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>

                <p className="text-[16px] leading-7 text-headingColor text-center font-[400] mt-4  ">
                  World-Class care for everyone. Our health care offers
                  Unmatched, Expert Health care from lab to clinic
                </p>
                <Link
                  to={"/doctors"}
                  className="h-[44px] w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-[auto] flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find Location
                </h2>

                <p className="text-[16px] leading-7 text-headingColor text-center font-[400] mt-4  ">
                  World-Class care for everyone. Our health care offers
                  Unmatched, Expert Health care from lab to clinic
                </p>
                <Link
                  to={"/doctors"}
                  className="h-[44px] w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-[auto] flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>

                <p className="text-[16px] leading-7 text-headingColor text-center font-[400] mt-4  ">
                  World-Class care for everyone. Our health care offers
                  Unmatched, Expert Health care from lab to clinic
                </p>
                <Link
                  to={"/doctors"}
                  className="h-[44px] w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-[auto] flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------About Component------------------- */}

      <About />

      {/* --------------Service Section ---------------- */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-[auto] ">
            <h2 className="heading text-center">Our Medical Services</h2>

            <p className="text__para text-center">
              {" "}
              World-class Care for Everyone. Our Health care Offers Unmatched,
              Expert Health Care
            </p>
          </div>

          <ServicesList />
        </div>
      </section>

      {/* --------------Service Section End---------------- */}

      {/* ----------------Feature Section --------------- */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* -----------------Feature Content---------------- */}

            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual treatment, <br />
                anytime
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the Appointment Directly.
                </li>
                <li className="text__para">
                  2. Search for your Physician here, and contact their Office.
                </li>
                <li className="text__para ">
                  3. View our Physicians here who are accepting new patients,
                  use the online Scheduling tool to Set the Appointment time.
                </li>
              </ul>
              <Link to={"/"}>
                <button className="btn">Learn more...</button>
              </Link>
            </div>

            {/* ----------------Feature Content---------------- */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="featureImg" />

              <div className="w-[150px] lg:w-[248px] bg-white shadow-md absolute bottom-[50px] left-0 md:bottom-[80px] md:left-[6rem] z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 lg:gap-2">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600s]">
                      Sun, 05
                    </p>
                    <br />
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400s]">
                      9:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3  lg:px-[9px]">
                    <img src={videoIcon} />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[95px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full ">
                  Consultation
                </div>

                <div className="flex itmes-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[10px]">
                  <img src={avatarIcon} alt="avatarIcon" />

                  <h2 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-textColor">
                    Bruce Wyane
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------Feature Section End--------------- */}

      {/* ----------------------Doctors Section -------------- */}

      <section>
        <div className="container">
          <div className="xl:w-[500px] mx-[auto] ">
            <h2 className="heading text-center">Our Esteemed doctors</h2>

            <p className="text__para text-center">
              {" "}
              World-class Care for Everyone. Our Health care Offers Unmatched,
              Expert Health Care
            </p>
          </div>

          <DoctorsList />
        </div>
      </section>

      {/* ----------------------Doctors Section End-------------- */}

      {/* --------------FAQ Section ---------------  */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faqImg" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading text-headingColor">
                Most questions asked by our patients
              </h2>

              <div className="mt-6 lg:mt-[35pxs]">
                <FaqList />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------FAQ Section ---------------  */}

      {/* --------------------Testimonials ------------------ */}

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
          <Testimonial/>


        </div>
      </section>

      {/* --------------------Testimonials End------------------ */}
    </>
  );
};

export default Home;

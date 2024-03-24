import React, { useEffect, useState } from "react";
import DoctorCard from "../../Components/Doctors/DoctorCard";
import Testimonial from "../../Components/Testimonial/Testimonial";

import { BASE_URL } from "../../config.js";
import UseFetchData from "../../hooks/UseFetchData.jsx";
import Loader from "../../Components/Loader/Loading.jsx";
import Error from "../../Components/Error/Error.jsx";

const Doctors = () => {
  // const [query, setQuery] = useState("");
  // const [debounceQuery, setDebounceQuery] = useState("");

  // const handleSearch = () => {
  //   setQuery(query.trim());
  //   console.log("Handle Search");
  // };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setDebounceQuery(query);
  //   }, 700);

  //   return () => clearTimeout(timeout);
  // }, [query]);

  // const {
  //   data: doctors,
  //   error,
  //   loading,
  // } = UseFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("Handle Search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    error,
    loading,


  } = UseFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);


  console.log(doctors)
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find the Doctor</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between ">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search doctor by name or Specialist"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button
              className="btn mt-0 rounded-[0px] rounded-r-md tracking-widest"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {error && <Error errMessage={error} />}
          {loading && <Loader />}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
              {doctors.map((doctor, index) => (
                <DoctorCard doctor={doctor} key={index} />
              ))}
            </div>
          )}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-[22px] text-headingColor leading-9 font-bold mb-10">
          {" "}
          Hello!, <span className="text-primaryColor">Welcome</span> Back🎉
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointers"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointers"
            />
          </div>

          <div className="mt-4 text-center">
            <button className="btn w-full text-[19px] py-[10px] rounded-none">
              login
            </button>
          </div>

          <p className="mt-4 text-center text-textColor">
            Don't have an Account?{" "}
            <Link className="font-bold text-primaryColor ml-1" to={"/register"}>
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

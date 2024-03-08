import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

// import { authContext } from "../context/authContext.jsx";

import { authContext } from "../context/authContext.jsx";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(authContext);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
        
      });

      console.log( "Response",res)

      const result = await res.json();

      

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log("Login data", result);

      setLoading(false);

      toast.success(result.message);
      navigate("/");
    } catch (error) {
      navigate("/login");
      console.log(error);
      toast.error(error.message);

      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-[22px] text-headingColor leading-9 font-bold mb-10">
          {" "}
          Hello!, <span className="text-primaryColor">Welcome</span> Back🎉
        </h3>

        <form onSubmit={submitHandler} className="py-4 md:py-0">
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
              {loading ? <HashLoader size={25} color="#0067FF"/> :"login" }
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

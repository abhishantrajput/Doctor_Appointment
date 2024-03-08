import React, { useState } from "react";

import SignUpImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";

import uploadImageToCloudnary from "../Utils/uploadCloudnary.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [previewURL, setPreviewURL] = useState("");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudnary(file);

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);

      toast.success(message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error);

      setLoading(false);
    }
  };

  return (
    <section className="px-4 xl:transparent">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ---------------------IMG Box 👇-------------------- */}

          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={SignUpImg}
                alt="signupGIF"
                className="w-full rounded-l-lg"
              />
            </figure>
          </div>
          {/* ---------------------IMG Box👆-------------------- */}

          {/* ----------------------Form👇---------------------- */}

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointers"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointers"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointers"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 bg-transparent px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 bg-transparent px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img src={previewURL} className="w-full rounded-full" />
                  </figure>
                )}

                <div className="relative w-[170px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileInputChange}
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-[80%] h-full flex items-center justify-center py-[0.75rem] px-[0.375rem] text-[15px] leading-6 bg-[#0066ff46] text-headingColor rounded-lg truncate cursor-pointer font-semibold"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn w-full text-[19px] py-[10px] rounded-none"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>

              <p className="mt-4 text-center text-textColor">
                Already have an Account?{" "}
                <Link
                  className="font-bold text-primaryColor ml-1"
                  to={"/login"}
                >
                  login
                </Link>
              </p>
            </form>
          </div>

          {/* ----------------------Form👆---------------------- */}
        </div>
      </div>
    </section>
  );
};

export default Signup;

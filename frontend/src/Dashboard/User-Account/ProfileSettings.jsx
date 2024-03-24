import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { BASE_URL, token } from "../../config.js";

import uploadImageToCloudnary from "../../Utils/uploadCloudnary.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const ProfileSettings = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudnary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },

        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);

      toast.success(message);
      navigate("/users/profile/me");
    } catch (error) {
      console.log(error);
      toast.error(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  return (
    <div className="mt-10">
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
            aria-readonly
            readOnly
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
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointers"
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
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
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={formData.photo} className="w-full rounded-full" />
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
              {selectedFile ? selectedFile.name : "upload photo"}
            </label>
          </div>
        </div>

        <div className="mt-2 text-center">
          <button
            type="submit"
            disabled={loading}
            className="btn w-full text-[19px] py-[10px] rounded-none"
          >
            {loading ? <HashLoader size={35} color="#ffffff" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;

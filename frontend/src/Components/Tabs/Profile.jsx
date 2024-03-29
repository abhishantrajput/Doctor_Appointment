import React, { useEffect, useState } from "react";

import { BASE_URL, token } from "../../config.js";

import { toast } from "react-toastify";

import uploadImageToCloudnary from "../../Utils/uploadCloudnary.js";

import { AiOutlineDelete } from "react-icons/ai";
const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "+91",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    });
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    const data = await uploadImageToCloudnary(file);
    console.log(data);

    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfieHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      console.log("result", result);

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Reuseble function for adding items

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  // --------------Qualifications----------------//

  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };

  const deleteItems = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key].filter((_, i) => i !== index)],
    }));
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();

    deleteItems("qualifications", index);
  };

  // ----------------Experinces----------------//

  const addExperinces = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperincesChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperinces = (e, index) => {
    e.preventDefault();

    deleteItems("experiences", index);
  };

  // -----------------time slots--------------//

  const addTimeSlots = (e) => {
    e.preventDefault();

    addItem("timeSlots", {
      day: "",
      startingTime: "",
      endingTime: "",
    });
  };

  const handleTimeSlotsChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlots = (e, index) => {
    e.preventDefault();

    deleteItems("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-[24px] text-headingColor font-bold mb-10 leading-6 ">
        Profile Information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form__Label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form__Input"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-5">
          <p className="form__Label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form__Input"
            placeholder="Email"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form__Label">Phone Number*</p>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form__Input"
            placeholder="Phone Number"
            maxLength={13}
            minLength={13}
          />
        </div>
        <div className="mb-5">
          <p className="form__Label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="form__Input"
            placeholder="Write your Bio"
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__Label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                className="form__Input py-3.5"
                onChange={handleInputChange}
              >
                <option>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__Label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                className="form__Input py-3.5 "
                onChange={handleInputChange}
              >
                <option>Select</option>
                <option value="Surgeon">Surgeon</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Oncologist">Oncologist</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Cardiologist">Cardiologist</option>
              </select>
            </div>

            <div>
              <p className="form__Label">Ticket Price</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                className="form__Input"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__Label">Qualifications*</p>

          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__Label">Starting date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__Input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__Label">Ending date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__Input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__Label">Degree</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__Input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__Label">University</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form__Input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-600 rounded-full p-2 text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                  {console.log("index value ", index)}
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="px-5 py-2 bg-green-200 text-green-900 tracking-widest cursor-pointer font-medium rounded h-fit"
          >
            Add Qualifications
          </button>
        </div>
        <div className="mb-5">
          <p className="form__Label">Experinces*</p>

          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__Label">Starting date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__Input"
                      onChange={(e) => handleExperincesChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__Label">Ending date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__Input"
                      onChange={(e) => handleExperincesChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__Label">Position</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form__Input"
                      onChange={(e) => handleExperincesChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__Label">Hosptial</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form__Input"
                      onChange={(e) => handleExperincesChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperinces(e, index)}
                  className="bg-red-600 rounded-full p-2 text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperinces}
            className="px-5 py-2 bg-green-200 text-green-900 tracking-widest cursor-pointer font-medium rounded h-fit"
          >
            Add Experinces
          </button>
        </div>
        <div className="mb-5">
          <p className="form__Label">Time Slots*</p>

          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form__Label">Day</p>
                    <select
                      name="day"
                      className="form__Input py-3.5"
                      value={item.day}
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    >
                      <option>Select</option>
                      <option value="monday">monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__Label">Starting Time</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__Input"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__Label">Ending Time</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__Input"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    />
                  </div>
                  <div
                    onClick={(e) => deleteTimeSlots(e, index)}
                    className="flex items-center"
                  >
                    <button className="bg-red-600 mt-11 rounded-full p-2 text-white text-[18px] mb-[30px] cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlots}
            className="px-5 py-2 bg-green-200 text-green-900 tracking-widest cursor-pointer font-medium rounded h-fit"
          >
            Add Time Slots
          </button>
        </div>

        <div className="mb-5">
          <p className="form__Label">About*</p>

          <textarea
            rows={5}
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            placeholder="Write About Yourself"
            className="form__Input"
          />
        </div>

        <div className="mb-5 flex items-center gap-2">
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
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfieHandler}
            className="btn rounded-lg w-full"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

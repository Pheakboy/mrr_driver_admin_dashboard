import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const CreateDriver = () => {
  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    driverNumber: "",
    gender: "",
    fullName: "",
    bod: "",
    phoneNumber: "",
    email: "",
    driverLicenseImage: null,
    nationalIDCardImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver({
      ...driver,
      [name]: value,
    });
  };

  const handleImageUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDriver({
          ...driver,
          [fieldName]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Implement save functionality here (e.g., send data to backend)
    console.log("Saved", driver);
    // Navigate to driver data page after save
    navigate("/driver-data");
  };

  const handleCancel = () => {
    console.log("Cancelled");
    // Navigate to driver data page after cancel
    navigate("/driver-data");
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl">
      <div className="flex flex-wrap">
        {/* Left Section - Form Inputs */}
        <div className="w-full md:w-2/3 md:pr-8">
          {/* Driver Number */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Driver Number
            </label>
            <input
              type="text"
              name="driverNumber"
              value={driver.driverNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={driver.gender}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={driver.fullName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="bod"
              value={driver.bod}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={driver.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={driver.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Right Section - Image Uploads */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {/* Driver License Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Driver License Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "driverLicenseImage")}
              className="mt-1 block w-full"
            />
            {driver.driverLicenseImage && (
              <img
                src={driver.driverLicenseImage}
                alt="Driver License"
                className="mt-2 rounded-lg shadow-md"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>

          {/* National ID Card Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              National ID Card Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "nationalIDCardImage")}
              className="mt-1 block w-full"
            />
            {driver.nationalIDCardImage && (
              <img
                src={driver.nationalIDCardImage}
                alt="National ID Card"
                className="mt-2 rounded-lg shadow-md"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>

          {/* Save and Cancel buttons */}
          <div className="w-full flex justify-center mt-8 space-x-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              onClick={handleCancel}
            >
              <FontAwesomeIcon icon={faTimes} className="mr-2" />
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
              onClick={handleSave}
            >
              <FontAwesomeIcon icon={faSave} className="mr-2" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDriver;

import React, { useState } from "react";
// import defaultImage from "./404image.png"; // Import your default image here
import img1 from '../data/product1.jpg'
import img2 from '../data/product2.jpg'

const DriverForm = () => {
  const [driver, setDriver] = useState({
    driverNumber: "",
    gender: "",
    fullName: "",
    bod: "",
    phoneNumber: "",
    phoneNumberCode: "US",
    email: "",
    driverLicenseImage: img1, // Default image for driver license
    nationalIDCardImage: img2, // Default image for national ID card
    driverProfileImage: null, // Store driver profile image
  });

  const [viewImage, setViewImage] = useState(null); // State to manage which image to view

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

  const openImageView = (fieldName) => {
    if (fieldName === "driverLicenseImage") {
      setViewImage(driver.driverLicenseImage);
    } else if (fieldName === "nationalIDCardImage") {
      setViewImage(driver.nationalIDCardImage);
    } else if (fieldName === "driverProfileImage") {
      setViewImage(driver.driverProfileImage);
    }
  };

  const closeImageView = () => {
    setViewImage(null);
  };

  const handleSave = () => {
    console.log("Saved", driver);
    // Implement save functionality here
  };

  const handleCancel = () => {
    console.log("Cancelled");
    // Implement cancel functionality here
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {/* Profile Image */}
          <div
            className="w-64 h-64 bg-gray-300 flex items-center justify-center mb-4 overflow-hidden relative cursor-pointer"
            onClick={() => openImageView("driverProfileImage")}
          >
            {driver.driverProfileImage ? (
              <img
                src={driver.driverProfileImage}
                alt="Driver Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-2xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Profile
              </span>
            )}
          </div>

          {/* Upload Profile Image */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "driverProfileImage")}
            className="hidden"
            id="upload-driver-profile"
          />
          <label
            htmlFor="upload-driver-profile"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mb-4 cursor-pointer"
          >
            Upload Driver Profile
          </label>

          {/* Save and Cancel Buttons */}
          <div className="flex space-x-4 mt-8">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mx-5"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
              onClick={handleSave}
            >
              Approved
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3 md:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Input Fields */}
            <div>
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
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                value={driver.gender}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
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
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Birth of Date
              </label>
              <input
                type="date"
                name="bod"
                value={driver.bod}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <div className="flex">
                <select
                  name="phoneNumberCode"
                  value={driver.phoneNumberCode}
                  onChange={handleChange}
                  className="mt-1 block w-20 border border-gray-300 rounded-l-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="IN">IN</option>
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  value={driver.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-r-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={driver.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Image Fields */}
            <div
              className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-4 overflow-hidden cursor-pointer"
              onClick={() => openImageView("driverLicenseImage")}
            >
              <img
                src={driver.driverLicenseImage}
                alt="Driver License"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-4 overflow-hidden cursor-pointer"
              onClick={() => openImageView("nationalIDCardImage")}
            >
              <img
                src={driver.nationalIDCardImage}
                alt="National ID Card"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal to view clicked image */}
      {viewImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="max-w-md w-full bg-white p-4 rounded-lg shadow-lg">
            <img
              src={viewImage}
              alt="View Image"
              className="w-full h-auto max-h-96 object-contain"
            />
            <button
              className="float-right mt-5 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300"
              onClick={closeImageView}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverForm;

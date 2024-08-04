import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../config/config";

const DriverProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [driver, setDriver] = useState(null);
  const [viewImage, setViewImage] = useState(null);
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`${API_BASE_URL}/api/users/driver/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setDriver(data);
          setIsApproved(data.status === "approved");
        })
        .catch((error) => {
          console.error("Error fetching driver data:", error);
          toast.error("Error fetching driver data");
        });
    }
  }, [id]);

  const handleApprove = () => {
    fetch(`${API_BASE_URL}/api/users/driver/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Driver profile approved");
        setIsApproved(true);
      })
      .catch((error) => {
        console.error("Error approving driver profile:", error);
        toast.error("Error approving driver profile already approved");
      });
  };

  const handleCancel = () => {
    navigate("/driver");
  };

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      fetch(`${API_BASE_URL}/api/users/driver/${id}/upload/${type}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          toast.success("Image uploaded successfully");
          // Optionally update driver state with new image URL
          setDriver((prevDriver) => ({
            ...prevDriver,
            [`${type}`]: data.imageUrl
          }));
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          toast.error("Error uploading image");
        });
    }
  };

  if (!driver) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4 md:m-10 mt-24 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl">
      <ToastContainer />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {/* Profile Image */}
          <div
            className="w-64 h-64 bg-gray-300 flex items-center justify-center mb-4 overflow-hidden relative cursor-pointer"
            onClick={() => setViewImage(driver.driverProfileImage || "")}
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
              className={`bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 ${
                isApproved ? "bg-green-600" : "hover:bg-green-600"
              }`}
              onClick={handleApprove}
              disabled={isApproved}
            >
              {isApproved ? "Approved" : "Approve"}
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
                value={driver._id}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
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
                onChange={(e) =>
                  setDriver({ ...driver, gender: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={`${driver.first_name} ${driver.last_name}`}
                onChange={(e) =>
                  setDriver({ ...driver, full_name: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Birth Date
              </label>
              <input
                type="date"
                name="bod"
                value={driver.date_of_birth.split("T")[0]}
                onChange={(e) =>
                  setDriver({ ...driver, date_of_birth: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <div className="flex">
                <select
                  name="phoneNumberCode"
                  value={driver.phone_number_code || "US"}
                  onChange={(e) =>
                    setDriver({ ...driver, phone_number_code: e.target.value })
                  }
                  className="mt-1 block w-20 border border-gray-300 rounded-l-lg shadow-sm px-4 py-2"
                >
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="IN">IN</option>
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  value={driver.phone_number}
                  onChange={(e) =>
                    setDriver({ ...driver, phone_number: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-r-lg shadow-sm px-4 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={driver.address}
                onChange={(e) =>
                  setDriver({ ...driver, address: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={driver.user_id.email}
                onChange={(e) =>
                  setDriver({ ...driver, email: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
              />
            </div>

            {/* Image Fields */}
            <div
              className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-4 overflow-hidden cursor-pointer"
              onClick={() => setViewImage(driver.driverLicenseImage || "")}
            >
              {driver.driverLicenseImage ? (
                <img
                  src={driver.driverLicenseImage}
                  alt="Driver License"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-2xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              )}
            </div>

            <div
              className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-4 overflow-hidden cursor-pointer"
              onClick={() => setViewImage(driver.nationalIdCardImage || "")}
            >
              {driver.nationalIdCardImage ? (
                <img
                  src={driver.nationalIdCardImage}
                  alt="National ID Card"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-2xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              )}
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
              onClick={() => setViewImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverProfile;

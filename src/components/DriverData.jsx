import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../config/config";

const DriverData = ({ searchQuery, activeFilter }) => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState('newest'); // Default to newest

  useEffect(() => {
    fetchDrivers();
  }, []);

  useEffect(() => {
    setData((prevData) => sortData(prevData, sortBy));
  }, [sortBy]);

  const fetchDrivers = () => {
    fetch(`${API_BASE_URL}/api/users/all-drivers`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging log
        setData(sortData(data, sortBy));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const sortData = (data, sortBy) => {
    return data.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      if (sortBy === 'newest') {
        return dateB - dateA; // Newest first (most recent date first)
      } else if (sortBy === 'oldest') {
        return dateA - dateB; // Oldest first (earliest date first)
      }
      return 0; // Default return for no sorting
    });
  };

  const handleView = (index) => {
    const fullName = `${data[index].first_name || ''} ${data[index].last_name || ''}`;
    alert(`Viewing driver: ${fullName}`);
  };

  const handleDelete = (index) => {
    const fullName = `${data[index].first_name || ''} ${data[index].last_name || ''}`;
    if (window.confirm(`Are you sure you want to delete ${fullName}?`)) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  const handleStatusChange = (index, status) => {
    const updatedData = [...data];
    updatedData[index].status_register = status;
    setData(updatedData);
  };

  const handleAddDriver = (newDriver) => {
    if (!newDriver.createdAt) {
      newDriver.createdAt = new Date().toISOString();
    }
    setData((prevData) => {
      const updatedData = [newDriver, ...prevData];
      return sortData(updatedData, sortBy);
    });
  };

  const filteredData = data.filter((driver) => {
    const fullName = `${driver.first_name || ''} ${driver.last_name || ''}`.toLowerCase();
    const email = (driver.user_id?.email || '').toLowerCase();
    const phone = (driver.phone_number || '').toLowerCase();

    const matchesSearchQuery =
      fullName.includes(searchQuery.toLowerCase()) ||
      email.includes(searchQuery.toLowerCase()) ||
      phone.includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "active" && driver.status_register === "approved") ||
      (activeFilter === "inactive" && driver.status_register === "waiting");

    return matchesSearchQuery && matchesFilter;
  });

  return (
    <div className="m-4 md:m-1 mt-24 p-4 bg-white rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <Link
          to="/create-driver"
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Add Driver
        </Link>
        <div>
          <button
            onClick={() => setSortBy('newest')}
            className={`px-4 py-2 rounded-md transition duration-300 mr-2 ${
              sortBy === 'newest' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Newest
          </button>
          <button
            onClick={() => setSortBy('oldest')}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              sortBy === 'oldest' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Oldest
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone Number</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {filteredData.map((driver, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">
                <Link
                  to={`/driver/${driver._id}`}
                  className="text-blue-500 hover:underline"
                >
                  {`${driver.first_name || ''} ${driver.last_name || ''}`}
                </Link>
              </td>
              <td className="py-3 px-6 text-left">{driver.user_id?.email || 'N/A'}</td>
              <td className="py-3 px-6 text-left">{driver.phone_number || 'N/A'}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <button
                    className={`py-1 px-3 rounded-full text-xs mr-2 ${
                      driver.status_register === "approved"
                        ? "bg-green-200 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleStatusChange(index, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className={`py-1 px-3 rounded-full text-xs ${
                      driver.status_register === "waiting"
                        ? "bg-red-200 text-red-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleStatusChange(index, "waiting")}
                  >
                    Wait
                  </button>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <button
                    className="text-gray-500 hover:text-gray-700 mr-2"
                    onClick={() => handleView(index)}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>

                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleDelete(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverData;

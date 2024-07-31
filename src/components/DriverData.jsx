import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../config/config";

const DriverData = ({ searchQuery, activeFilter }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users/all-drivers`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setData(sortedData); // Sort by created_at in descending order
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleView = (index) => {
    const fullName = `${data[index].first_name} ${data[index].last_name}`;
    alert(`Viewing driver: ${fullName}`);
  };

  const handleEdit = (index) => {
    const fullName = `${data[index].first_name} ${data[index].last_name}`;
    alert(`Editing driver: ${fullName}`);
  };

  const handleDelete = (index) => {
    const fullName = `${data[index].first_name} ${data[index].last_name}`;
    if (window.confirm(`Are you sure you want to delete ${fullName}?`)) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  const handleStatusChange = (index, status) => {
    const updatedData = [...data];
    updatedData[index].status = status;
    setData(updatedData);
  };

  const filteredData = data.filter((driver) => {
    const fullName = `${driver.first_name} ${driver.last_name}`.toLowerCase();
    const email = driver.user_id.email.toLowerCase();
    const matchesSearchQuery =
      fullName.includes(searchQuery.toLowerCase()) ||
      email.includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "active" && driver.status === "active") ||
      (activeFilter === "inactive" && driver.status === "inactive");

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
                  {`${driver.first_name} ${driver.last_name}`}
                </Link>
              </td>
              <td className="py-3 px-6 text-left">{driver.user_id.email}</td>
              <td className="py-3 px-6 text-left">{driver.phone_number}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <button
                    className={`py-1 px-3 rounded-full text-xs mr-2 ${
                      driver.status === "active"
                        ? "bg-green-200 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleStatusChange(index, "active")}
                  >
                    Activate
                  </button>
                  <button
                    className={`py-1 px-3 rounded-full text-xs ${
                      driver.status === "inactive"
                        ? "bg-red-200 text-red-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleStatusChange(index, "inactive")}
                  >
                    Deactivate
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
                    className="text-gray-500 hover:text-gray-700 mr-2"
                    onClick={() => handleEdit(index)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
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

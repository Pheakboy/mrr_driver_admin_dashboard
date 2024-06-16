import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const drivers = [
  {
    name: "Heng Somnang",
    email: "Heng.somnang@gmail.com",
    phone: "+44 20 7234 3456",
    status: "Active",
  },
  {
    name: "Nick Taylor",
    email: "Nick  taylor12@hotmail.com",
    phone: "+44 21 7284 3456",
    status: "Active",
  },
];

const DriverData = () => {
  const [data, setData] = useState(drivers);

  const handleView = (index) => {
    alert(`Viewing driver: ${data[index].name}`);
  };

  const handleEdit = (index) => {
    alert(`Editing driver: ${data[index].name}`);
  };

  const handleDelete = (index) => {
    if (
      window.confirm(`Are you sure you want to delete ${data[index].name}?`)
    ) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-4 bg-white rounded-3xl shadow-lg">
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
          <tr className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-whiteuppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone Number</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((driver, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <Link to={`/driver/${index}`} className="contents">
                <td className="py-3 px-6 text-left">{driver.name}</td>
                <td className="py-3 px-6 text-left">{driver.email}</td>
                <td className="py-3 px-6 text-left">{driver.phone}</td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <button className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs mr-2">
                      Activate
                    </button>
                    <button className="bg-red-200 text-red-700 py-1 px-3 rounded-full text-xs">
                      Deactivate
                    </button>
                  </div>
                </td>
              </Link>
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

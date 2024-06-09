import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const drivers = [
  {
    id: 340,
    name: "Emily Horvath",
    email: "Emilyhorvath@gmail.com",
    phone: "+44 21 7844 3489",
    status: "Active",
  },
  {
    id: 339,
    name: "Alexis Francis",
    email: "AlexisFrancis456@ntwor1.com",
    phone: "+44 21 7544 3480",
    status: "Active",
  },
  {
    id: 338,
    name: "Charlotte",
    email: "Charlotte@hotmail.com",
    phone: "+44 21 7588 3567",
    status: "Active",
  },
  {
    id: 337,
    name: "Aubrey Wisdom",
    email: "Aubreywisdom56@gmail.com",
    phone: "+44 21 1238 3567",
    status: "Active",
  },
  {
    id: 336,
    name: "Abigail Laydon",
    email: "Laydonbills@gnmail.com",
    phone: "+44 21 9238 3534",
    status: "Active",
  },
  {
    id: 335,
    name: "Olivia Smith",
    email: "Olivia.smith@gmail.com",
    phone: "+44 20 7234 3456",
    status: "Active",
  },
  {
    id: 334,
    name: "Lily Taylor",
    email: "lilytaylor12@hotmail.com",
    phone: "+44 21 7284 3456",
    status: "Active",
  },
  {
    id: 333,
    name: "Grace Stewart",
    email: "Stewartserve@ntwor1.com",
    phone: "+44 21 7884 3456",
    status: "Active",
  },
  {
    id: 332,
    name: "Zoe Diesel",
    email: "Diesel1423@rediffmail.com",
    phone: "+44 21 7844 3456",
    status: "Active",
  },
];

const CustomerData = () => {
  const [data, setData] = useState(drivers);

  const handleView = (index) => {
    alert(`Viewing driver: ${data[index].name}`);
  };

  const handleEdit = (index) => {
    alert(`Editing driver: ${data[index].name}`);
  };

  const handleDelete = (index) => {
    if (window.confirm(`Are you sure you want to delete ${data[index].name}?`)) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-4 bg-white rounded-3xl shadow-lg">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Customer ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone Number</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((driver, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{driver.id}</td>
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

export default CustomerData;

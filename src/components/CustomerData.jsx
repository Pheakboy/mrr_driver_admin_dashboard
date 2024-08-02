import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const API_ENDPOINT = "http://ec2-54-82-25-173.compute-1.amazonaws.com:8000/api/users/all-passengers";

const CustomerData = ({ searchQuery = "" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // flag to check if the component is still mounted

    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('API Response:', result); // Log API response
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // cleanup function to set the flag to false
    };
  }, []);

  const handleView = (index) => {
    alert(`Viewing customer: ${data[index]?.first_name} ${data[index]?.last_name}`);
  };

  const handleEdit = (index) => {
    alert(`Editing customer: ${data[index]?.first_name} ${data[index]?.last_name}`);
  };

  const handleDelete = (index) => {
    if (window.confirm(`Are you sure you want to delete ${data[index]?.first_name} ${data[index]?.last_name}?`)) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  const filteredData = data.filter((customer) => {
    const query = searchQuery.toLowerCase();
    const firstName = customer?.first_name?.toLowerCase();
    const lastName = customer?.last_name?.toLowerCase();
    return (firstName && firstName.includes(query)) || (lastName && lastName.includes(query));
  });

  console.log('Filtered Data:', filteredData); // Log filtered data

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="m-4 md:m-1 mt-24 p-4 bg-white rounded-3xl shadow-lg">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Phone Number</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {filteredData.map((customer, index) => (
            <tr key={customer?._id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{customer?.first_name} {customer?.last_name}</td>
              <td className="py-3 px-6 text-left">{customer?.phone_number}</td>
              <td className="py-3 px-6 text-left">{customer?.user_id?.email}</td>
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

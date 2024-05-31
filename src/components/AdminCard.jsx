import React from 'react'

const AdminCard = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
      <div className="p-6 bg-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-sm font-medium text-gray-700">Total Passenger</h3>
        <p className="text-3xl font-bold text-gray-900">12,768</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
      <div className="p-6 bg-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-sm font-medium text-gray-700">Total Driver</h3>
        <p className="text-3xl font-bold text-gray-900">39,265</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
      <div className="p-6 bg-indigo-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-sm font-medium text-gray-700">
          Total Booking 
        </h3>
        <p className="text-3xl font-bold text-gray-900">142,334</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
      <div className="p-6 bg-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-sm font-medium text-gray-700">Total Amount</h3>
        <p className="text-3xl font-bold text-gray-900">194726478</p>
      </div>
    </div>
  </div>
  )
}

export default AdminCard
import React from "react";
import { Link } from 'react-router-dom';

const ReportDriver = () => {
  return (
    <div className="bg-slate-200 ml-12 mr-12 h-full mb-8 rounded-xl p-4">
      <b className="text-yellow-600 text-2xl ml-8 mb-6">Report</b>
      <div className="border-2 border-black mt-8"></div>
      <label className="ml-4 hover:text-sky-600 mt-2 block">Search trip...</label>
      <div className="ml-8 mt-4">
        <Link to="/Line" className="text-sky-600 hover:text-sky-800 mr-4">
          Today
        </Link>
        <Link to="/Line" className="text-sky-600 hover:text-sky-800 mr-4">
          Yesterday
        </Link>
        <Link to="/Line" className="text-sky-600 hover:text-sky-800 mr-4">
          This week
        </Link>
        <Link to="/Line" className="text-sky-600 hover:text-sky-800 mr-4">
          This month
        </Link>
        <Link to="/Line" className="text-sky-600 hover:text-sky-800 mr-4">
          This year
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 w-96 ml-8 mt-6">
        <input
          type="text"
          className="border-1 border-black bg-slate-200 placeholder-black pl-4 rounded-md"
          placeholder="From Date"
        ></input>
        <input
          type="text"
          className="border-1 border-black bg-slate-200 placeholder-black pl-4 rounded-md"
          placeholder="To Date"
        ></input>
        <label>
          <select
            name="selectedFruit"
            className="bg-slate-200 border-1 border-black bg-slate-200 placeholder-black pl-4 rounded-md"
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-3 gap-4 w-96 ml-8 mt-6">
        <button
          type="submit"
          className="bg-yellow-400 text-white h-12 rounded-md hover:scale-110 hover:bg-yellow-500 "
        >
          Search
        </button>
        <button
          type="reset"
          className="bg-yellow-400 text-white h-12 rounded-md hover:scale-110 hover:bg-yellow-500"
        >
          Reset
        </button>
        <button
          type="button" // Fixed type attribute
          className="bg-yellow-400 text-white h-12 rounded-md hover:scale-110 hover:bg-yellow-500"
        >
          Export
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Driver ID
              </th>
              <th scope="col" className="px-6 py-3">
                Driver name
              </th>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Ride Date
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Message</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                000001
              </th>
              <td className="px-6 py-4">John Frith</td>
              <td className="px-6 py-4">IDTB080027</td>
              <td className="px-6 py-4">12/20/2024</td>
              <td className="px-6 py-4">Good</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                002901
              </th>
              <td className="px-6 py-4">Ben White</td>
              <td className="px-6 py-4">IDTB080092</td>
              <td className="px-6 py-4">12/20/2024</td>
              <td className="px-6 py-4">Best</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                002901
              </th>
              <td className="px-6 py-4">Ben White</td>
              <td className="px-6 py-4">IDTB080092</td>
              <td className="px-6 py-4">12/20/2024</td>
              <td className="px-6 py-4">Best Best</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportDriver;

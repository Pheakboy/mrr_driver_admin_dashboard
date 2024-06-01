import React from "react";
import DriverData from "../components/DriverData";
import { Header } from "../components";
import Pagination from "../components/Pagination";
const Drivers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* <h1 className="text-2xl font-bold">Drivers</h1>*/}
      <Header category="Page" title="Drivers" />
      <div className="flex justify-end mb-8">
        {/* <Pagination /> */}
        <div className="m-1">
          <label
            className="  min-w-sm max-w-2xl flex flex-col md:flex-row  border py-2 px-2 rounded-2xl gap-2 shadow-xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <input
              id="search-bar"
              placeholder="Search here"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            />
            <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
              <div className="relative">
                <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"></div>
                <div className="flex items-center transition-all opacity-1 valid:">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search ...
                  </span>
                </div>
              </div>
            </button>
          </label>
        </div>
      </div>
      <DriverData />
    </div>
  );
};

export default Drivers;

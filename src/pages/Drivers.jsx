import React, { useState } from "react";
import DriverData from "../components/DriverData";
import { Header } from "../components";

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex justify-between">
        <Header category="Page" title="Drivers" />
        <div className="flex justify-end">
          <div className="m-1">
            <label
              className="min-w-sm max-w-2xl flex flex-col md:flex-row border py-2 px-2 rounded-2xl gap-2 shadow-xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <input
                id="search-bar"
                placeholder="Search here"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                <div className="relative">
                  <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"></div>
                  <div className="flex items-center transition-all opacity-1">
                    <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                      Search ...
                    </span>
                  </div>
                </div>
              </button>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-5 mr-3">
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "inactive"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleFilterChange("inactive")}
        >
          Deactive
        </button>
      </div>
      <DriverData searchQuery={searchQuery} activeFilter={activeFilter} />
    </div>
  );
};

export default Drivers;

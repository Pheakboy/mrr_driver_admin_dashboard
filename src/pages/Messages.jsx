import React, { useState } from 'react';

const Messages = () => {
  const [activeTab, setActiveTab] = useState('driver');

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-yellow-600">Message</h1>
        <div className="flex mb-4">
          <button
            type="button"
            className={`flex-1 py-2 text-center ${
              activeTab === 'driver'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setActiveTab('driver')}
          >
            DRIVER
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-center ${
              activeTab === 'customer'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setActiveTab('customer')}
          >
            CUSTOMER
          </button>
        </div>
        {activeTab === 'driver' && (
          <div>
            <label className="block mb-2 text-sm text-gray-600" htmlFor="select-driver">
              Select Driver
            </label>
            <select id="select-driver" className="block w-full p-2 mb-4 border rounded">
              <option>Select Drivers</option>
              <option>All</option>
              {/* Add options here */}
            </select>
            <label className="block mb-2 text-sm text-gray-600" htmlFor="message-driver">
              Message
            </label>
            <textarea
              id="message-driver"
              className="block w-full p-2 mb-4 border rounded h-32"
              placeholder="Message"
            />
            <button type="button" className="bg-yellow-500 text-white px-8 py-3 rounded">
              SEND
            </button>
          </div>
        )}
        {activeTab === 'customer' && (
          <div>
            <label className="block mb-2 text-sm text-gray-600" htmlFor="message-customer">
              Message
            </label>
            <textarea
              id="message-customer"
              className="block w-full p-2 mb-4 border rounded h-32"
              placeholder="Message"
            />
            <button type="button" className="bg-yellow-500 text-white px-8 py-3 rounded">
              SEND
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;

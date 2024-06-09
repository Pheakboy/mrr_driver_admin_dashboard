import React from "react";

const TransactionsData = () => {
  const data = [
    {
      id: 340,
      name: "Noah",
      paymentType: "App Payment",
      amount: "£22.00",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 339,
      name: "Liam",
      paymentType: "App Payment",
      amount: "£50.00",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 338,
      name: "Mason",
      paymentType: "App Payment",
      amount: "£08.88",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 337,
      name: "Jacob",
      paymentType: "App Payment",
      amount: "£22.00",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 336,
      name: "William",
      paymentType: "App Payment",
      amount: "£25.00",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 335,
      name: "Ethan",
      paymentType: "App Payment",
      amount: "£23.00",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 334,
      name: "James",
      paymentType: "App Payment",
      amount: "£12.05",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 333,
      name: "Alexander",
      paymentType: "App Payment",
      amount: "£20.00",
      date: "28,Dec 17 - 01:22 PM",
    },
    {
      id: 332,
      name: "Alex",
      paymentType: "App Payment",
      amount: "£22.00",
      date: "28,Dec 17 - 01:22 PM",
    },
  ];
  return (
   
        <div className=" border shadow-lg rounded-xl overflow-hden">
          <table className="min-w-max w-full table-auto ">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Driver Name</th>
                <th className="py-3 px-6 text-left">Payment Type</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data.map((row, index) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out"
                  key={index}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">{row.id}</td>
                  <td className="py-3 px-6 text-left">{row.name}</td>
                  <td className="py-3 px-6 text-left">{row.paymentType}</td>
                  <td className="py-3 px-6 text-left">{row.amount}</td>
                  <td className="py-3 px-6 text-left">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      // </div>
  );
};

export default TransactionsData;

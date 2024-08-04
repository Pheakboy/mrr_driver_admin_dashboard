import React from "react";

const TransactionsData = ({ searchQuery }) => {
  const data = [
    { id: 1, name: "heng", paymentType: "App Payment", amount: "$22.00", date: "28,Dec 17 - 01:22 PM" },
    { id: 2, name: "hong", paymentType: "Cash Payment", amount: "$50.00", date: "28,Dec 17 - 01:22 PM" },
    { id: 3, name: "hang", paymentType: "App Payment", amount: "$22.00", date: "28,Dec 17 - 01:22 PM" },
    { id: 4, name: "jonh", paymentType: "Cash Payment", amount: "$25.00", date: "28,Dec 17 - 01:22 PM" },
    { id: 5, name: "Taihor", paymentType: "App Payment", amount: "$23.00", date: "28,Dec 17 - 01:22 PM" },
    { id: 6, name: "Lun", paymentType: "App Payment", amount: "$12.05", date: "28,Dec 17 - 01:22 PM" },
    { id: 7, name: "dara", paymentType: "Cash Payment", amount: "$20.00", date: "28,Dec 17 - 01:22 PM" },
    { id: 8, name: "kunvath", paymentType: "App Payment", amount: "$22.00", date: "28,Dec 17 - 01:22 PM" },
    { id: 9, name: "meng", paymentType: "Cash Payment", amount: "$8.88", date: "28,Dec 17 - 01:22 PM" },
  ];

  const filteredData = data.filter(row => 
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.paymentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="border shadow-lg rounded-xl overflow-hidden">
      <table className="min-w-max w-full table-auto">
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
          {filteredData.map((row) => (
            <tr
              className="border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out"
              key={row.id}
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
  );
};

export default TransactionsData;

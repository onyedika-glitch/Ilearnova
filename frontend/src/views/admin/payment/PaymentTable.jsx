import React from 'react';

const PaymentTable = ({ items }) => {
  return (
    <table className="min-w-full bg-white dark:bg-navy-700 dark:text-white">
      <thead>
        <tr>
          <th className="py-2">Date</th>
          <th className="py-2">Transaction ID</th>
          <th className="py-2">Description</th>
          <th className="py-2">Amount</th>
          <th className="py-2">Payment Method</th>
          <th className="py-2">Status</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className="p-4">{item.date}</td>
            <td className="p-4">{item.transactionId}</td>
            <td className="p-4">{item.description}</td>
            <td className="p-4">{item.amount}</td>
            <td className="p-4">{item.method}</td>
            <td className="p-4">
              <span className={`py-1 px-3 rounded-full text-white ${item.status === "Paid" ? "bg-green-500" : item.status === "Failed" ? "bg-red-500" : "bg-yellow-500"}`}>
                {item.status}
              </span>
            </td>
            <td className="p-4">{item.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;
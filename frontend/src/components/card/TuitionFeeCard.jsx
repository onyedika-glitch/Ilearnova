import React from 'react';

const TuitionFeeCard = ({ fee }) => {
    const feeData = {}; // Complete the object declaration or remove if not needed
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-white rounded-lg shadow-lg p-6 flex">
        <div className="w-1/2 pr-6">
          <h1 className="text-2xl font-bold mb-2">{fee.title}</h1>
          <p className="text-blue-600 text-3xl font-semibold">${fee.amount}<span className="text-gray-600 text-sm">/ {fee.session}</span></p>
          <p className="text-gray-700 mt-4">{fee.description}</p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 w-full">Proceed to payment</button>
              </div>
               <TuitionFeeCard fee={feeData} />
        <div className="w-1/2">
          <img src="assets/img/payment/image1.png" alt="Payment illustration" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default TuitionFeeCard;

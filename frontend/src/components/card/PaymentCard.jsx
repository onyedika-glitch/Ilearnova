import React from 'react';
import { useNavigate } from 'react-router-dom';
const PaymentCard = ({ id, title, fee, feeType, buttonText, description }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/PaymentDetailPage/${id}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md max-w-xs dark:bg-navy-700 dark:text-white" onClick={handleCardClick}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-blue-600 text-3xl font-bold mt-2">
        {fee}
        <span className="text-sm font-normal text-black"> / {feeType}</span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
        {buttonText}
      </button>
      <p className="text-gray-600 text-sm mt-4">{description}</p>
    </div>
  );
};
  
export default PaymentCard;
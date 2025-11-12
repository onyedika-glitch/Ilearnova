import React from 'react';

const AddClassCard = ({ onAdd }) => {
  return (
    <button 
      className="p-4 border rounded shadow bg-blue-500 text-white w-full" 
      onClick={onAdd}
    >
      + Add class
    </button>
  );
};
export default AddClassCard;
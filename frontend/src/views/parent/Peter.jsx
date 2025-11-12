import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterModal from "./FilterModal";
import Metrics from "./Metrics";

const data = [
  {
    id: 1,
    name: "Reliance HMO",
    email: "admin@reliancehmo.com",
    allocatedFunds: 500000000,
    usedFunds: 5000000,
    unusedFunds: 400000000,
    status: "Active",
  },
  {
    id: 2,
    name: "FIRS",
    email: "admin@firs.com",
    allocatedFunds: 500000000,
    usedFunds: 5000000,
    unusedFunds: 400000000,
    status: "Active",
  },
  {
    id: 3,
    name: "Tony Elumelu Foundation",
    email: "admin@elemelufoundation.org",
    allocatedFunds: 500000000,
    usedFunds: 5000000,
    unusedFunds: 400000000,
    status: "Inactive",
  },
  {
    id: 4,
    name: "NFF Abuja",
    email: "admin@nffabuja.com",
    allocatedFunds: 500000000,
    usedFunds: 5000000,
    unusedFunds: 400000000,
    status: "Active",
  },
  {
    id: 5,
    name: "Standard Chartered",
    email: "admin@standardchartered.com",
    allocatedFunds: 500000000,
    usedFunds: 5000000,
    unusedFunds: 400000000,
    status: "Active",
  },
];

const ITEMS_PER_PAGE = 2;

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleRowClick = (id) => {
    navigate(`/details/${id}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const [isFilterOpen, setFilterOpen] = useState(false);

  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };
  return (
    <div className="container mx-auto p-4">
      <Metrics />
      <button
        onClick={() => setFilterOpen(true)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Open Filter
      </button>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={handleApplyFilters}
      />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email Address</th>
              <th className="border px-4 py-2">Allocated Funds</th>
              <th className="border px-4 py-2">Used Funds</th>
              <th className="border px-4 py-2">Unused Funds</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleRowClick(item.id)}
              >
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">
                  ₦{item.allocatedFunds.toLocaleString()}
                </td>
                <td className="border px-4 py-2">
                  ₦{item.usedFunds.toLocaleString()}
                </td>
                <td className="border px-4 py-2">
                  ₦{item.unusedFunds.toLocaleString()}
                </td>
                <td
                  className={`text-$ {item.status === "Active" ?
                    "green-600" : "red-600"} border px-4 py-2 font-bold`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;

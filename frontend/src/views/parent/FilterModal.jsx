import React, { useState } from "react";

const FilterModal = ({ isOpen, onClose, onApply }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("Active");

  const resetFilters = () => {
    setFromDate("");
    setToDate("");
    setStatus("Active");
  };

  const applyFilters = () => {
    onApply({ fromDate, toDate, status });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filter by</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>

        {/* Date Range */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Select Date
          </label>
          <div className="flex gap-4">
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Status Dropdown */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={resetFilters}
            className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

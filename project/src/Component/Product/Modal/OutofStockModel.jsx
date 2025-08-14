import React, { useEffect, useState } from "react";

const OutofStockModel = ({ stockModel, onClose }) => {
  const [visible, setVisible] = useState(stockModel);

  useEffect(() => {
    if (stockModel) {
      setVisible(true); // show immediately
      const timer = setTimeout(() => {
        setVisible(false); // hide after 3s
        if (onClose) onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [stockModel, onClose]);

  if (!visible) return null; // don't render if hidden

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto max-w-sm bg-white z-[9999] text-gray-800 px-4 py-3 rounded-lg shadow-lg border border-gray-200 flex items-start sm:items-center gap-3 animate-slide-down">
      <div className="bg-red-100 text-red-600 rounded-full p-2 flex-shrink-0">
        ⚠
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-sm sm:text-base">Out of Stock</span>
        <span className="text-xs sm:text-sm text-gray-500">
          This item is currently unavailable.
        </span>
      </div>
    </div>
  );
};

export default OutofStockModel;

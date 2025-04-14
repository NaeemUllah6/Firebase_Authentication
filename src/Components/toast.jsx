import React, { useEffect } from 'react';

const Toast = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Call the parent function to reset state
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-5 bg-white border border-gray-300 shadow-md rounded-md px-4 py-3 w-64 z-50">
      <div className="flex items-center gap-2">
        <span className="p-1 bg-blue-400 rounded-full text-white text-sm">✔</span>
        <p className="text-gray-800">User Deleted Successfully</p>
      </div>
    </div>
  );
};

export default Toast;

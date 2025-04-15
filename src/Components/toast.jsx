import React, { useEffect, useState } from 'react';

const Toast = ({ onClose }) => {
  const [progress, setProgress] = useState('w-full');

  useEffect(() => {
    const startProgress = setTimeout(() => setProgress('w-0'), 50);

    const timer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(startProgress);
    };
  }, [onClose]);

  return (
    <div className="fixed top-24 right-5 bg-white border border-gray-300 shadow-md rounded-md px-4 py-3 w-64 z-50">
      <div className="flex items-center gap-2">
        <span className="p-1 bg-blue-400 rounded-full text-white text-sm">✔</span>
        <p className="text-gray-800">User Deleted Successfully</p>
      </div>

      <div className="mt-2 h-1 bg-blue-300 rounded overflow-hidden">
        <div className={`h-full bg-blue-600 transition-all duration-1000 ease-linear ${progress}`} />
      </div>
    </div>
  );
};

export default Toast;


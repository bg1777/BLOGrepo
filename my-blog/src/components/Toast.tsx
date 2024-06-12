import React from 'react';

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast mb-2 bg-customRed-500 text-white p-3 rounded-xl shadow-lg flex items-center w-64">
      {message}
      <button onClick={onClose} className="ml-4 text-xl font-bold">&times;</button>
    </div>
  );
};

export default Toast;
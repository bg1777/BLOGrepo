import React, { useEffect, useState } from 'react';

const SuccessToast = ({ message, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const slideInTimeout = setTimeout(() => setFadeOut(true), 3000); // Start fade out after 3 seconds
    const fadeOutTimeout = setTimeout(onClose, 3500); // Close after 3.5 seconds

    return () => {
      clearTimeout(slideInTimeout);
      clearTimeout(fadeOutTimeout);
    };
  }, []);

  return (
    <div className={`success-toast mb-2 bg-green-500 text-white p-3 rounded-xl shadow-lg flex items-center w-64 justify-center ${fadeOut ? 'fade-out' : 'slide-in-right'}`}>
      {message}
    </div>
  );
};

export default SuccessToast;
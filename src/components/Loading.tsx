import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-indigo-200 rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-4 border-indigo-600 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-0 border-4 border-purple-600 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
        <h2 className="text-2xl font-bold text-indigo-600 animate-pulse">
          로딩 중{dots}
        </h2>
        <p className="text-gray-500 mt-2">(Cargando{dots})</p>
      </div>
    </div>
  );
};

export default Loading; 
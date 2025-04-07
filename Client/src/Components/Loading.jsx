import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-t-indigo-600 border-b-indigo-600 border-l-transparent border-r-transparent animate-spin"></div>
        <div className="absolute top-1/2 text-sm left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-700 font-semibold">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
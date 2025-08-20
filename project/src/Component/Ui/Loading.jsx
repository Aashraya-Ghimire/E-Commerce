import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-fit">
      <div className="relative w-8 h-8">
        <div className="absolute w-full h-full border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute inset-1 border-2 border-blue-300 border-b-transparent rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Loading;

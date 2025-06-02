import React from "react";

const LoadingComponent = () => {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center bg-main-black">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-logo-button border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-1 border-4 border-main-white border-t-transparent rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default LoadingComponent;

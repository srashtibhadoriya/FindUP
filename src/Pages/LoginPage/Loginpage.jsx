import { useState } from "react";
import Signin from "./Signin";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B3C53] via-purple-100 to-[#D2C1B6] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-[#1B3C53] mb-4">
            More than just friends truly connect
          </h1>
          <p className="text-gray-600 mb-6">
            Connect with global community on pingup.
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User 1"
              />
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="User 2"
              />
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="User 3"
              />
            </div>
            <span className="text-sm text-gray-600">
              Used by 12k+ developers ⭐⭐⭐⭐⭐
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-xl shadow-md w-full md:w-full max-w-sm">
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

function MainAuth() {
  const [screen, setScreen] = useState(true);

  return (
    <div className="relative min-h-screen bg-center bg-cover bg-no-repeat bg-[url('/ecom.png')] px-4">
      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Centered card container */}
      <div className="relative z-10 flex items-center justify-center h-[100vh]">
        <div className="w-full max-w-sm sm:max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-black/30 p-4 transition-all duration-300 ease-in-out">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {screen ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-sm text-gray-500">
              {screen ? "Signup to get started" : "Login to continue"}
            </p>
          </div>
          {screen ? (
            <Signup setScreen={setScreen} />
          ) : (
            <Login setScreen={setScreen} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainAuth;

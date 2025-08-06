import React from "react";
import { FaTrashAlt, FaSignOutAlt } from "react-icons/fa";
import deleteUserApi from "../../Api/User/deleteUserApi";

const DeleteAccount = () => {
  const handelLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handelDelete = () => {
    deleteUserApi();
  };

  return (
    <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl p-6 md:p-10 m-3 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        {/* Delete Account Section */}
        <div className="flex flex-col items-center justify-center space-y-5 px-4">
          <h2 className="text-2xl font-semibold italic text-red-700">
            Delete Account
          </h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
          <button
            onClick={handelDelete}
            className="w-full max-w-xs flex items-center justify-center gap-2 border border-red-400 bg-red-500 hover:bg-red-600 hover:border-red-600 text-white px-6 py-2 rounded-md font-semibold shadow-sm hover:shadow-lg transition-all"
          >
            <FaTrashAlt className="text-white" />
            Confirm Delete
          </button>
        </div>

        {/* Logout Section */}
        <div className="flex flex-col items-center justify-center space-y-5 px-4">
          <h2 className="text-2xl font-semibold italic text-gray-700">
            Log Out
          </h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Securely log out from your account. You can always log in again
            later.
          </p>
          <button
            onClick={handelLogout}
            className="w-full max-w-xs flex items-center justify-center gap-2 border border-gray-400 bg-gray-600 hover:bg-gray-700 hover:border-gray-700 text-white px-6 py-2 rounded-md font-semibold shadow-sm hover:shadow-lg transition-all"
          >
            <FaSignOutAlt className="text-white" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;

import React, { useState } from "react";
import {
  FaTrashAlt,
  FaSignOutAlt,
  FaQuestionCircle,
  FaTimesCircle,
} from "react-icons/fa";
import deleteUserApi from "../../Api/User/deleteUserApi";

const DeleteAccount = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleLogoutConfirm = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleDeleteConfirm = () => {
    deleteUserApi();
  };

  return (
    <div>
      {/* Buttons Section */}
      <div className="flex flex-row md:flex-col gap-4 w-full md:justify-center">
        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex-1 flex items-center gap-4 text-gray-700 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:bg-gray-300 transition-all cursor-pointer"
        >
          <FaSignOutAlt className="text-gray-700 text-2xl" />
          <span className="hidden md:inline">Log Out</span>
        </button>

        {/* Delete Account Button */}
        <button
          onClick={() => setShowDeleteModal(true)}
          className="flex-1 flex items-center gap-4 text-red-600 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:bg-red-100 transition-all cursor-pointer"
        >
          <FaTrashAlt className="text-red-600 text-2xl" />
          <span className="hidden md:inline">Delete Account</span>
        </button>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-[7px] flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg animate-fade-in">
            <div className="flex justify-center mb-4 text-red-600 text-4xl">
              <FaQuestionCircle />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Are you sure you want to log out?
            </h2>
            <p className="text-gray-500 mb-6">
              You’ll need to log in again to access your account.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition-all"
              >
                <FaTimesCircle />
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="flex items-center gap-2 px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-all"
              >
                <FaSignOutAlt />
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-[7px] flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg animate-fade-in">
            <div className="flex justify-center mb-4 text-red-600 text-4xl">
              <FaTrashAlt />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Are you sure you want to delete your account?
            </h2>
            <p className="text-gray-500 mb-6">
              This action is permanent and cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition-all"
              >
                <FaTimesCircle />
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex items-center gap-2 px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-all"
              >
                <FaTrashAlt />
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;

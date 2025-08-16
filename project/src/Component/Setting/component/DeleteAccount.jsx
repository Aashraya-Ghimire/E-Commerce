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
    <>
      {/* Main Section */}
      <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl p-6 md:p-10 m-3 md:mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          {/* Delete Account Section */}
          <div className="flex flex-col items-center justify-center space-y-5 px-4">
            <h2 className="text-2xl font-semibold text-red-700">
              Delete Account
            </h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Permanently delete your account and all associated data. This
              action cannot be undone.
            </p>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="w-full max-w-xs flex items-center justify-center gap-2 border border-red-400 bg-red-500 hover:bg-red-600 hover:border-red-600 text-white px-6 py-2 rounded-md font-semibold shadow-sm hover:shadow-lg transition-all"
            >
              <FaTrashAlt className="text-white" />
              Confirm Delete
            </button>
          </div>

          {/* Logout Section */}
          <div className="flex flex-col items-center justify-center space-y-5 px-4">
            <h2 className="text-2xl font-semibold text-gray-700">Log Out</h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Securely log out from your account. You can always log in again
              later.
            </p>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full max-w-xs flex items-center justify-center gap-2 border border-gray-400 bg-gray-600 hover:bg-gray-700 hover:border-gray-700 text-white px-6 py-2 rounded-md font-semibold shadow-sm hover:shadow-lg transition-all"
            >
              <FaSignOutAlt className="text-white" />
              Log Out
            </button>
          </div>
        </div>
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
    </>
  );
};

export default DeleteAccount;

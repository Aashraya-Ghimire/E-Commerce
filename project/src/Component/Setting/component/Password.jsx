import React, { useRef, useState } from "react";
import TextInput from "../../InputField/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import changePassword from "../../Api/User/changePassword";
import { FaQuestionCircle, FaTimesCircle } from "react-icons/fa";

const Password = () => {
  const prevPasswordRef = useRef();
  const currentPasswordRef = useRef();
  const [error, setError] = useState(0);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleUpdate = () => {
    if (prevPasswordRef.current?.value.length < 8) {
      setError(1);
    } else if (currentPasswordRef.current?.value.length < 8) {
      setError(2);
    } else {
      setError(0);
      const tempData = {
        prevPassword: prevPasswordRef.current.value,
        currentPassword: currentPasswordRef.current.value,
      };
      changePassword(tempData);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300 rounded-xl p-6 md:p-8 m-3 md:mx-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        <div className="flex-1 space-y-4 px-3">
          <div className="text-2xl font-bold text-gray-800 border-b pb-2 border-orange-400">
            Change Password
          </div>

          <TextInput
            err={error === 1}
            errormessage="Please provide your old password (min 8 characters)"
            label="Old Password"
            placeholder="Enter your old password"
            ref={prevPasswordRef}
          />
          <TextInput
            err={error === 2}
            errormessage="Please provide a valid new password (min 8 characters)"
            label="New Password"
            placeholder="Enter your new password"
            ref={currentPasswordRef}
          />

          <div className="pt-2 flex justify-center lg:justify-start">
            <OrangeButton
              title="Update"
              onClick={() => setShowUpdateModal(true)}
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-4 px-3 lg:px-4 mt-4 lg:mt-0">
          <div className="text-orange-600 font-bold text-xl text-center lg:text-left">
            Protect Your Account
          </div>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            Regularly updating your password is essential for maintaining
            account security. Enter your{" "}
            <span className="font-medium text-gray-800">old password</span> and
            set a{" "}
            <span className="font-medium text-gray-800">strong new one</span> to
            prevent unauthorized access and protect your personal data.
          </p>
        </div>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-[7px] flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg animate-fade-in">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              <FaQuestionCircle />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Confirm Update?
            </h2>
            <p className="text-gray-500 mb-6">
              Are you sure you want to update this information?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition-all"
              >
                <FaTimesCircle />
                Cancel
              </button>
              <button
                onClick={() => {
                  handleUpdate();
                  setShowUpdateModal(false);
                }}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-all"
              >
                <FaQuestionCircle />
                Yes, Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Password;

import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../InputField/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import updateUserApi from "../../Api/User/updateUserApi";
import { FaQuestionCircle, FaTimesCircle } from "react-icons/fa";

const General = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const [error, setError] = useState(0);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    if (nameRef.current) nameRef.current.value = data.userName || "";
    if (emailRef.current) emailRef.current.value = data.email || "";
    if (contactRef.current) contactRef.current.value = data.contactNumber || "";
  }, [data]);

  const handleUpdate = () => {
    if (!nameRef.current?.value || nameRef.current.value.length < 3) {
      setError(1);
    } else if (!emailRef.current?.value) {
      setError(2);
    } else if (
      !contactRef.current?.value ||
      contactRef.current.value.length < 9
    ) {
      setError(3);
    } else {
      setError(0);
      const updatedData = {
        userName: nameRef.current.value,
        email: emailRef.current.value,
        contactNumber: contactRef.current.value,
      };
      updateUserApi(updatedData);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-4 sm:p-6 md:p-10 m-2 sm:m-4 md:mx-12 transition-all hover:shadow-xl">
      {/* Header */}
      <div className="text-xl sm:text-2xl font-bold text-gray-800 border-b border-orange-400 pb-2 sm:mb-3 text-center md:text-left">
        General Information
      </div>

      {/* Form */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-4 sm:gap-6">
        <div className="flex-1 min-w-[200px]">
          <TextInput
            err={error === 1}
            errormessage="Please provide a valid name"
            label="Name"
            placeholder="Enter your Name"
            ref={nameRef}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <TextInput
            err={error === 2}
            errormessage="Please provide a valid email"
            label="Email"
            placeholder="Enter your Email"
            ref={emailRef}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <TextInput
            err={error === 3}
            errormessage="Please provide a valid phone number"
            label="Contact Number"
            placeholder="Enter your Contact Number"
            ref={contactRef}
          />
        </div>
      </div>

      {/* Update Button */}
      <div className="mt-3 sm:mt-2 flex justify-center md:justify-start">
        <OrangeButton
          title="Update"
          onClick={() => setShowUpdateModal(true)}
          className="px-6 py-3 transition-all hover:scale-105 w-full sm:w-auto"
        />
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-md shadow-2xl animate-fade-in">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl sm:text-5xl">
              <FaQuestionCircle />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">
              Confirm Update?
            </h2>
            <p className="text-gray-500 mb-6 text-center text-sm sm:text-base">
              Are you sure you want to update this information?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-all hover:scale-105"
              >
                <FaTimesCircle />
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowUpdateModal(false);
                  handleUpdate();
                }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all hover:scale-105"
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

export default General;

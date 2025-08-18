import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../InputField/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import updateUserApi from "../../Api/User/updateUserApi";
import { FaQuestionCircle, FaTimesCircle } from "react-icons/fa";

const Location = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};
  const cityRef = useRef();
  const streetRef = useRef();
  const deliveryDescriptionRef = useRef();
  const [error, setError] = useState(0);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    if (cityRef.current) cityRef.current.value = data.city || "";
    if (streetRef.current) streetRef.current.value = data.street || "";
    if (deliveryDescriptionRef.current)
      deliveryDescriptionRef.current.value = data.deliveryDescription || "";
  }, [data]);

  const handleUpdate = () => {
    if (!cityRef.current?.value) {
      setError(1);
    } else if (!streetRef.current?.value) {
      setError(2);
    } else if (!deliveryDescriptionRef.current?.value) {
      setError(3);
    } else {
      setError(0);
      const updatedData = {
        city: cityRef.current.value,
        street: streetRef.current.value,
        deliveryDescription: deliveryDescriptionRef.current.value,
      };
      updateUserApi(updatedData);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-4 sm:p-6 md:p-10 m-2 sm:m-4 md:mx-12 transition-all hover:shadow-xl">
      {/* Header */}
      <div className="text-xl sm:text-2xl font-bold text-gray-800 border-b border-orange-400 pb-2 mb-4 sm:mb-3 text-center md:text-left">
        Delivery Information
      </div>

      {/* Form */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-4 sm:gap-4">
        <div className="flex-1 min-w-[200px]">
          <TextInput
            err={error === 1}
            errormessage="Please provide a valid city"
            label="City"
            placeholder="Enter your City"
            ref={cityRef}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <TextInput
            err={error === 2}
            errormessage="Please provide a valid street"
            label="Street"
            placeholder="Enter your Street"
            ref={streetRef}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <TextInput
            err={error === 3}
            errormessage="Please provide a valid delivery description"
            label="Delivery Description"
            placeholder="Enter any delivery instructions"
            ref={deliveryDescriptionRef}
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

export default Location;

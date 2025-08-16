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
    if (nameRef.current?.value == "" || nameRef.current?.value.length < 3) {
      setError(1);
    } else if (emailRef.current?.value == "") {
      setError(2);
    } else if (
      contactRef.current?.value == "" ||
      contactRef.current?.value.length < 9
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
    <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300 rounded-xl p-6 md:p-8 m-3 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-4">
          <div className="text-2xl font-bold text-gray-800 border-b pb-2 border-orange-400">
            General Information
          </div>

          <TextInput
            err={error === 1}
            errormessage="Please provide a valid input"
            label="Name"
            placeholder="Enter your Name"
            ref={nameRef}
            className="flex items-center"
          />
          <TextInput
            err={error === 2}
            errormessage="Please provide a valid password"
            label="Email"
            placeholder="Enter your Email"
            ref={emailRef}
          />
          <TextInput
            err={error === 3}
            errormessage="Please provide a valid phone number"
            label="Contact Number"
            placeholder="Enter your Contact Number"
            ref={contactRef}
          />

          <div className="pt-2">
            <OrangeButton
              title="Update"
              onClick={() => {
                setShowUpdateModal(true);
              }}
              className="inline-flex px-6 py-2"
            />
          </div>
        </div>

        {/* Info Text Section */}
        <div className="hidden md:flex flex-col justify-center gap-4 px-4">
          <div className="text-center text-xl font-semibold text-orange-600">
            Why Update?
          </div>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Keep your profile information current to ensure smooth communication
            and better user experience. Update your{" "}
            <span className="font-medium text-gray-800">name</span>,
            <span className="font-medium text-gray-800"> email</span>, and
            <span className="font-medium text-gray-800">
              {" "}
              contact number
            </span>{" "}
            to maintain accurate account details.
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
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition-all"
              >
                <FaTimesCircle />
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowUpdateModal(false), handleUpdate();
                  console.log("Update confirmed");
                }}
                className="flex items-center gap-2 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-all"
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

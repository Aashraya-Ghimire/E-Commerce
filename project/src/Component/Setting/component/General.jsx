import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../InputField/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import updateUserApi from "../../Api/User/updateUserApi";

const General = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const [error, setError] = useState(0);

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
          <div className="text-2xl font-bold text-gray-800 italic border-b pb-2 border-orange-400">
            General Information
          </div>

          <TextInput
            err={error === 1}
            errormessage="Please provide a valid input"
            label="Name"
            placeholder="Enter your Name"
            ref={nameRef}
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
              onClick={handleUpdate}
              className="inline-flex px-6 py-2"
            />
          </div>
        </div>

        {/* Info Text Section */}
        <div className="hidden md:flex flex-col justify-center gap-4 px-4">
          <div className="text-center text-xl font-semibold italic text-orange-600">
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
    </div>
  );
};

export default General;

import React, { useRef, useState } from "react";
import TextInput from "../../InputField/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import changePassword from "../../Api/User/changePassword";

const Password = () => {
  const token = localStorage.getItem("token");
  const prevPasswordRef = useRef();
  const currentPasswordRef = useRef();
  const [error, setError] = useState(0);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-4 px-3">
          <div className="text-2xl font-bold text-gray-800 italic border-b pb-2 border-orange-400">
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

          <div className="pt-2">
            <OrangeButton title="Update" onClick={handleUpdate} />
          </div>
        </div>

        {/* Info Section */}
        <div className="hidden md:flex flex-col justify-center gap-4 px-4">
          <div className="text-orange-600 font-bold text-xl italic text-center">
            Protect Your Account
          </div>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Regularly updating your password is essential for maintaining
            account security. Enter your{" "}
            <span className="font-medium text-gray-800">old password</span> and
            set a{" "}
            <span className="font-medium text-gray-800">strong new one</span> to
            prevent unauthorized access and protect your personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Password;

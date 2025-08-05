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
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className=" w-full md:w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl italic">
          General Information
        </div>
        <div>
          <TextInput
            err={error == 1 && true}
            errormessage={"Please provide a valid input"}
            label={"Name"}
            placeholder={"Enter your Name"}
            ref={nameRef}
          />
          <TextInput
            err={error == 2 && true}
            errormessage={"Please provide a valid password"}
            label={"Email"}
            placeholder={"Enter your Name"}
            ref={emailRef}
          />
          <TextInput
            err={error == 3 && true}
            errormessage={"Please provide a valid phone Number"}
            label={"Contact Number"}
            placeholder={"Enter your Contact Number"}
            ref={contactRef}
          />
        </div>
        <div>
          <OrangeButton title={"Update"} onClick={() => handleUpdate()} />
        </div>
      </div>
      <div className=" hidden md:flex flex-col justify-center flex-1 gap-3 ">
        <div className="text-gray-700 font-bold text-xl italic text-center ">
          General Information
        </div>
        <p className="text-gray-500 font-medium lg:text-lg text-justify">
          Update your name, contact number, and email address from this section
          to keep your profile information up to date. Manage your personal
          information here. You can easily update your name, contact number, and
          email address to keep your account details accurate and current.
        </p>
      </div>
    </div>
  );
};

export default General;

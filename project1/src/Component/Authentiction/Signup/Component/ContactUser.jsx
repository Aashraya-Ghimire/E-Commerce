import React, { useRef, useState } from "react";
import TextInput from "../../../InputField/TextInput";
import OrangeButton from "../../../Button/OrangeButton";

function ContactUser({ userDetails, setUserDetail, setStage }) {
  const [error, setError] = useState(0);
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const emailRef = useRef();
  const errorMessageRef = useRef();

  const handleData = () => {
    if (nameRef.current?.value == "" || nameRef.current?.value.length < 3) {
      errorMessageRef.current = "Name must me at least 3 character long  ";
      setError(1);
    } else if (
      emailRef.current?.value == "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)
    ) {
      errorMessageRef.current = "Please provide a valid Email";
      setError(2);
    } else if (
      contactNumberRef.current?.value == "" ||
      contactNumberRef.current?.value.length < 9 ||
      !/^\d+$/.test(contactNumberRef.current.value)
    ) {
      errorMessageRef.current = "Number must be at least 10 character";

      setError(3);
    } else {
      setError(0);
      setUserDetail({
        userName: nameRef.current.value,
        contactNumber: contactNumberRef.current.value,
        email: emailRef.current.value,

        password: "",
        city: "",
        street: "",
        deliveryDescription: "",
      });
      setStage(1);
    }
  };

  return (
    <div>
      <TextInput
        err={error == 1 && true}
        label={"Name"}
        placeholder={"Enter your name"}
        ref={nameRef}
        errormessage={errorMessageRef.current}
        type={"text"}
      />
      <TextInput
        err={error == 2 && true}
        label={"Email"}
        placeholder={"Enter your email"}
        ref={emailRef}
        errormessage={errorMessageRef.current}
        type={"email"}
      />
      <TextInput
        err={error == 3 && true}
        label={"Contact"}
        placeholder={"Enter your Contact Number"}
        ref={contactNumberRef}
        errormessage={errorMessageRef.current}
        // type={"number"}
      />
      <div className="flex justify-center">
        <OrangeButton title={"Proceed"} onClick={() => handleData()} />
      </div>
    </div>
  );
}

export default ContactUser;

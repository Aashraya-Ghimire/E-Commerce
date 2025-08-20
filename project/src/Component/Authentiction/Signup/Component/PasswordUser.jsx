import React, { useRef, useState } from "react";
import TextInput from "../../../InputField/TextInput";
import OrangeButton from "../../../Button/OrangeButton";
import signupApi from "../../../Api/Auth/signupApi";
import { useNavigate } from "react-router";
import Loading from "../../../Ui/Loading";

const PasswordUser = ({ userDetail, setUserDetail, setStage }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const errorMessageRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [loading, setLoading] = useState(false);

  const handelSend = async () => {
    if (passwordRef.current.value.length < 8) {
      errorMessageRef.current = "password must be 8 character long";
      setError(1);
    } else if (
      confirmPasswordRef.current?.value == "" ||
      passwordRef.current?.value != confirmPasswordRef.current?.value
    ) {
      errorMessageRef.current = "Password and confirm passwords did not match";
      setError(2);
    } else {
      try {
        setError(0);
        setLoading(true);
        let tempUserDetail = userDetail;
        tempUserDetail.password = passwordRef.current.value;
        await signupApi(tempUserDetail, navigate, setStage, setUserDetail);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <p className="text-center text-[10px] italic">Set up password</p>
      <TextInput
        err={error == 1 && error}
        label={"Password"}
        placeholder={"Enter your Password"}
        ref={passwordRef}
        errormessage={errorMessageRef.current}
        type={"password"}
      />
      <TextInput
        err={error == 2 && error}
        label={"Confirm Password"}
        placeholder={"Enter your Password Again"}
        ref={confirmPasswordRef}
        errormessage={errorMessageRef.current}
        type={"password"}
      />
      <div className="flex justify-center">
        {loading ? (
          <Loading />
        ) : (
          <OrangeButton title={"SignUp"} onClick={() => handelSend()} />
        )}
      </div>
    </div>
  );
};

export default PasswordUser;

import React, { useRef, useState } from "react";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router";
import loginApi from "../../Api/Auth/loginApi";
import TextInput from "../../InputField/TextInput";

const Login = ({ setScreen }) => {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState(0);

  const handleLogin = () => {
    if (userNameRef.current?.value === "") {
      setErr(1);
    } else if (passwordRef.current?.value === "") {
      setErr(2);
    } else {
      setErr(0);
      loginApi(
        {
          userName: userNameRef.current.value,
          password: passwordRef.current.value,
        },
        navigate,
        setErr
      );
    }
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Heading */}
      <div className="text-2xl font-bold text-orange-500 text-center">
        Login
      </div>

      {/* Input Fields */}
      <div className="space-y-2">
        <TextInput
          err={err === 1}
          label="UserName"
          placeholder="Enter UserName"
          errormessage="Please provide valid userName"
          ref={userNameRef}
          type={"text"}
        />
        <TextInput
          err={err === 2}
          label="Password"
          placeholder="Enter Password"
          errormessage="Provide Password"
          ref={passwordRef}
          type={"password"}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-2">
        <OrangeButton title="Login" onClick={handleLogin} />
      </div>

      {/* Signup Toggle */}
      <div className="mt-2 text-sm text-center font-medium text-gray-600">
        Don't have an account?{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => setScreen(true)}
        >
          Signup
        </span>
      </div>

      {/* Error Message */}
      {err === 3 && (
        <p className="text-xs text-red-500 text-center mt-2">
          Internal server error
        </p>
      )}
    </div>
  );
};

export default Login;

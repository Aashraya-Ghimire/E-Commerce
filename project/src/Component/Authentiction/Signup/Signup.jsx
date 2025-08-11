import React, { useState } from "react";
import ContactUser from "./Component/ContactUser";
import AddressUser from "./Component/AddressUser";
import PasswordUser from "./Component/PasswordUser";

const Signup = ({ setScreen }) => {
  const [userDetail, setUserDetail] = useState({
    userName: "",
    contactNumber: "",
    email: "",
    password: "",
    city: "",
    street: "",
    deliveryDescription: "",
  });
  const [stage, setStage] = useState(0);
  return (
    <div className="p-4 sm:p-6">
      <div className="text-xl font-bold text-green-500 text-center">SignUp</div>
      <div className="space-y-2">
        {stage == 0 && (
          <ContactUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
        {stage == 1 && (
          <AddressUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
        {stage == 2 && (
          <PasswordUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
      </div>
      <div className="mt-2 text-sm text-center font-medium text-gray-600">
        Already have an account ?{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => setScreen(false)}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;

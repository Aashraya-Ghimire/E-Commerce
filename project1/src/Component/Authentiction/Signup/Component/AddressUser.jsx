import React, { useRef, useState } from "react";
import TextInput from "../../../InputField/TextInput";
import OrangeButton from "../../../Button/OrangeButton";

const AddressUser = ({ userDetail, setUserDetail, setStage }) => {
  const [error, setError] = useState(0);
  const errorMessageRef = useRef();
  const cityRef = useRef();
  const streetRef = useRef();
  const deliveryDescriptionRef = useRef();
  const handelNext = () => {
    if (cityRef.current?.value == "") {
      errorMessageRef.current = "Please provide your city";
      setError(1);
    } else if (streetRef.current?.value == "") {
      errorMessageRef.current = "Please provide your street";
      setError(2);
    } else if (deliveryDescriptionRef.current?.value == "") {
      errorMessageRef.current = "Please provide your Delivery Description";
      setError(3);
    } else {
      setError(0);
      console.log("user data", userDetail);
      let tempUserDetail = userDetail;
      tempUserDetail.city = cityRef.current.value;
      tempUserDetail.street = streetRef.current.value;
      tempUserDetail.deliveryDescription = deliveryDescriptionRef.current.value;
      setUserDetail(tempUserDetail);
      setStage(2);
    }
  };
  return (
    <div>
      <p className="text-[10px] italic text-center">
        Provide your deliver Instructions
      </p>
      <TextInput
        err={error == 1 && true}
        label={"City"}
        placeholder={"Enter City"}
        ref={cityRef}
        errormessage={errorMessageRef.current}
      />
      <TextInput
        err={error == 2 && true}
        label={"Street"}
        placeholder={"Enter Street"}
        ref={streetRef}
        errormessage={errorMessageRef.current}
      />
      <TextInput
        err={error == 3 && true}
        label={"Delivery Description"}
        placeholder={"Enter Delivery Description"}
        ref={deliveryDescriptionRef}
        errormessage={errorMessageRef.current}
      />
      <div className="flex justify-center">
        <OrangeButton title={"Next"} onClick={() => handelNext()} />
      </div>
    </div>
  );
};

export default AddressUser;

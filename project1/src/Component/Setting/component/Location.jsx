import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../InputField/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import updateUserApi from "../../Api/User/updateUserApi";

const Location = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};
  const cityRef = useRef();
  const streetRef = useRef();
  const deliveryDescriptionRef = useRef();
  const [error, setError] = useState(0);

  useEffect(() => {
    if (cityRef.current) cityRef.current.value = data.city || "";
    if (streetRef.current) streetRef.current.value = data.street || "";
    if (deliveryDescriptionRef.current)
      deliveryDescriptionRef.current.value = data.deliveryDescription || "";
  }, [data]);

  const handleUpdate = () => {
    if (cityRef.current?.value == "") {
      setError(1);
    } else if (streetRef.current?.value == "") {
      setError(2);
    } else if (deliveryDescriptionRef.current?.value == "") {
      setError(3);
    } else {
      const updatedData = {
        city: cityRef.current.value,
        street: streetRef.current.value,
        deliveryDescription: deliveryDescriptionRef.current.value,
      };
      updateUserApi(updatedData);
    }
  };

  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className=" w-full md:w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl italic">
          Delivery Information
        </div>
        <div>
          <TextInput
            err={error == 1 && true}
            errormessage={"Please provide a valid city"}
            label={"City"}
            placeholder={"Enter your City"}
            ref={cityRef}
          />
          <TextInput
            err={error == 2 && true}
            errormessage={"Please provide a valid street"}
            label={"Street"}
            placeholder={"Enter your Street"}
            ref={streetRef}
          />
          <TextInput
            err={error == 3 && true}
            errormessage={"Please provide a valid phone Number"}
            label={"DeliveryDescription"}
            placeholder={"Enter your Delivery description"}
            ref={deliveryDescriptionRef}
          />
        </div>
        <div>
          <OrangeButton title={"Update"} onClick={() => handleUpdate()} />
        </div>
      </div>
      <div className=" hidden md:flex flex-col justify-center flex-1 gap-3 ">
        <div className="text-gray-700 font-bold text-xl italic text-center ">
          Delivery Information
        </div>
        <p className="text-gray-500 font-medium lg:text-lg text-justify">
          In this section, you can add or update your delivery details to ensure
          your orders reach you without any issues. Include accurate information
          such as your street address, city, and any specific delivery
          instructions or landmarks. Keeping this information up to date helps
          us deliver your items faster and more efficiently.
        </p>
      </div>
    </div>
  );
};

export default Location;

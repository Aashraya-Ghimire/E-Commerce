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
    if (cityRef.current?.value === "") {
      setError(1);
    } else if (streetRef.current?.value === "") {
      setError(2);
    } else if (deliveryDescriptionRef.current?.value === "") {
      setError(3);
    } else {
      setError(0);
      const updatedData = {
        city: cityRef.current.value,
        street: streetRef.current.value,
        deliveryDescription: deliveryDescriptionRef.current.value,
      };
      updateUserApi(updatedData);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300 rounded-xl p-6 md:p-8 m-3 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-4 px-3">
          <div className="text-2xl font-bold text-gray-800 italic border-b pb-2 border-orange-400">
            Delivery Information
          </div>

          <TextInput
            err={error === 1}
            errormessage="Please provide a valid city"
            label="City"
            placeholder="Enter your City"
            ref={cityRef}
          />
          <TextInput
            err={error === 2}
            errormessage="Please provide a valid street"
            label="Street"
            placeholder="Enter your Street"
            ref={streetRef}
          />
          <TextInput
            err={error === 3}
            errormessage="Please provide a valid delivery description"
            label="Delivery Description"
            placeholder="Enter any delivery instructions"
            ref={deliveryDescriptionRef}
          />

          <div className="pt-2">
            <OrangeButton title="Update" onClick={handleUpdate} />
          </div>
        </div>

        {/* Info Section */}
        <div className="hidden md:flex flex-col justify-center gap-4 px-4">
          <div className="text-orange-600 font-bold text-xl italic text-center">
            Why it matters?
          </div>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Add or update your delivery details here to avoid delays. Include
            your <span className="font-medium text-gray-800">street</span>,{" "}
            <span className="font-medium text-gray-800">city</span>, and any
            specific{" "}
            <span className="font-medium text-gray-800">
              instructions or landmarks
            </span>{" "}
            to help our delivery team reach you faster and more accurately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;

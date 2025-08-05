import React from "react";

const TextInput = React.forwardRef(
  ({ label, placeholder, err, errormessage, type }, ref) => {
    return (
      <div className="mb-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}:
        </label>

        <input
          className={`w-full px-3 py-2 text-sm rounded-md shadow-sm border transition duration-200 
          ${
            err
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          } 
          focus:outline-none focus:ring-1 bg-white`}
          placeholder={placeholder}
          ref={ref}
          type={type}
        />

        <div className="h-5 mt-1 text-sm text-red-500 px-1">
          {err && (
            <span>
              {errormessage ? errormessage : "Please provide a valid input"}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default TextInput;

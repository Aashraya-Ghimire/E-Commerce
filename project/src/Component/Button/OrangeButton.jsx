import React from "react";

function OrangeButton({ title, ...props }) {
  return (
    <div
      {...props}
      className="cursor-pointer flex justify-center sm:gap-2 px-2 py-2 bg-green-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
    >
      {title}
    </div>
  );
}

export default OrangeButton;

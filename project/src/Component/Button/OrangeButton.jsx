import React from "react";

function OrangeButton({ title, ...props }) {
  return (
    <div
      {...props}
      className="cursor-pointer flex justify-center sm:gap-2 px-4 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
    >
      {title}
    </div>
  );
}

export default OrangeButton;

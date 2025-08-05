import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Ordersuccess({ success, setSuccess }) {
  const navigate = useNavigate();
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setShowCheck(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowCheck(false);
    }
  }, [success]);

  if (!success) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full animate-fadeInScale transition-all">
        <div className="flex items-center justify-center mb-4 h-20">
          {!showCheck ? (
            <div className="w-12 h-12 border-4 border-orange-300 border-t-orange-500 rounded-full animate-spin"></div>
          ) : (
            <svg
              className="w-16 h-16 text-green-500 animate-pop"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
        </div>

        <h2 className="text-2xl font-bold text-green-600 mb-2">
          {showCheck ? "Order Placed Successfully!" : "Placing your order..."}
        </h2>

        <p className="text-gray-600 mb-6 text-sm">
          {showCheck
            ? "Thank you for your order. We’ll process it shortly."
            : "Please wait while we confirm your order."}
        </p>

        {showCheck && (
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-xl shadow-md transition-all duration-300"
            onClick={() => {
              setSuccess(false);
              navigate("/");
            }}
          >
            Go to Home
          </button>
        )}
      </div>
    </div>
  );
}

export default Ordersuccess;

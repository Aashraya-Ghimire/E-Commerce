import React, { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function Categories({ maindata, setProductData }) {
  const categories = [
    { label: "All", img: "/all.jpg" },
    { label: "Athletics", img: "/athletics.jpg" },
    { label: "Indoor", img: "/indoor.jpg" },
    { label: "Outdoor", img: "/outdoor.jpg" },
    { label: "Shoes", img: "/shoes.jpg" },
    { label: "Sports Wear", img: "/clothes.jpg" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Update visibleCount based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3); // tablet
      } else {
        setVisibleCount(4); // desktop
      }
    };

    updateVisibleCount(); // run on mount
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const scrollLeft = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, categories.length - visibleCount)
    );
  };

  const sort = (name) => {
    if (name === "All") {
      setProductData(maindata);
    } else {
      const temp = maindata.filter(
        (item) => item.category.toLowerCase() === name.toLowerCase()
      );
      setProductData(temp);
    }
  };

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div className="mx-auto my-5 w-full box-border px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold my-8 sm:my-12 text-center text-green-600">
        Product Category
      </h2>

      <div className="flex items-center gap-4 sm:gap-8 lg:gap-20 justify-center">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          disabled={startIndex === 0}
          className={`p-2 rounded-full shadow-md transition ${
            startIndex > 0
              ? "bg-white hover:scale-105"
              : "opacity-40 bg-gray-200 cursor-not-allowed"
          }`}
        >
          <IoIosArrowDropleft className="text-3xl sm:text-4xl text-red-400" />
        </button>

        {/* Visible categories */}
        <div
          className={`grid gap-4 flex-1`}
          style={{
            gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
          }}
        >
          {visibleCategories.map((cat, i) => (
            <div
              key={i}
              onClick={() => sort(cat.label)}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl object-cover hover:shadow-lg hover:shadow-gray-400 transition-all duration-300"
              />
              <div className="text-center mt-2 text-sm sm:text-lg font-medium">
                {cat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          disabled={startIndex >= categories.length - visibleCount}
          className={`p-2 rounded-full shadow-md transition ${
            startIndex < categories.length - visibleCount
              ? "bg-white hover:scale-105"
              : "opacity-40 bg-gray-200 cursor-not-allowed"
          }`}
        >
          <IoIosArrowDropright className="text-3xl sm:text-4xl text-red-400" />
        </button>
      </div>

      <hr className="my-6 opacity-20" />
    </div>
  );
}

export default Categories;

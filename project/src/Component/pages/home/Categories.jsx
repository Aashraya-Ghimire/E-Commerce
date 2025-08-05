import React from "react";

function Categories({ maindata, setProductData }) {
  const categories = [
    { label: "All", img: "/all.jpg" },
    { label: "Dinner", img: "/fruits.png" },
    { label: "Lunch", img: "/dairy.png" },
    { label: "Snack", img: "/snacks.png" },
    { label: "Breakfast", img: "/drinks.png" },
    { label: "Beverage", img: "/fast.png" },
  ];
  const sort = (name) => {
    let temp = maindata.filter(
      (item) => item.mealType[0].toLowerCase() == name.toLowerCase()
    );
    setProductData(temp);
    if (name == "All") {
      setProductData(maindata);
    }
    console.log(temp);
  };
  return (
    <div>
      <div className="mx-[10%] my-5 text-2xl font-bold">Categories</div>

      <div className="flex flex-wrap justify-around gap-6 px-4 sm:px-8 md:px-[10%]">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => sort(cat.label)}
            className="flex flex-col items-center w-24 sm:w-28 md:w-32"
          >
            <div
              style={{ backgroundImage: `url(${cat.img})` }}
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-center bg-cover cursor-pointer hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400 transition-all duration-300"
            />
            <div className="text-center mt-2 text-sm sm:text-base">
              {cat.label}
            </div>
          </div>
        ))}
      </div>

      <hr className="mx-[5%] my-6 opacity-20" />
    </div>
  );
}

export default Categories;

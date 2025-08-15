import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router";

const SearchBar = ({ setProductData, maindata }) => {
  const location = useLocation();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const element = document.getElementById("product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const pathsToIgnore = ["/cart", "/setting", "/addProduct", "/dashboard"];

    if (!pathsToIgnore.includes(location.pathname) && Array.isArray(maindata)) {
      let temp = maindata.filter((dta) => {
        dta.pName.toLowerCase().includes(search.toLowerCase()) ||
          dta.category.toLowerCase().includes(search.toLowerCase());
      });

      setProductData(temp);
    }
  }, [search, location.pathname, maindata, setProductData]);

  return (
    <div>
      <div className="flex items-center bg-gray-100 rounded-2xl text-black h-10 w-60 justify-between px-2">
        <input
          type="text"
          className="text-[15px] outline-none bg-transparent w-full px-2"
          placeholder="Search here"
          value={search}
          onClick={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoIosSearch className="text-xl" />
      </div>
    </div>
  );
};

export default SearchBar;

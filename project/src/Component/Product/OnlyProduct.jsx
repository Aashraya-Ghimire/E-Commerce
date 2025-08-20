import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Items from "../pages/home/Items";
import { useOutletContext } from "react-router";
import Footer from "../Footer/Footer";

const OnlyProduct = () => {
  const productData = useOutletContext(); // all products

  // States for filters
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const unique = [...new Set(productData.map((p) => p.category))];
    return ["all", ...unique];
  }, [productData]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    return productData.filter((p) => {
      const inCategory = category === "all" || p.category === category;
      const inPrice =
        !p.price || (p.price >= priceRange[0] && p.price <= priceRange[1]);
      const inRating = !p.rating || p.rating >= minRating;
      const inStock = !inStockOnly || (p.stock && p.stock > 0);

      return inCategory && inPrice && inRating && inStock;
    });
  }, [productData, category, priceRange, minRating, inStockOnly]);

  const [data, setData] = useState(filteredProducts);
  useEffect(() => {
    setData(filteredProducts);
  }, [filteredProducts]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setProductData={setData} maindata={productData} />

      {/* Page Header */}
      <header className="sticky top-16 z-20 text-center sm:px-6 lg:px-8 py-2 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide break-words">
          All Products
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg opacity-90 mx-auto max-w-full break-words">
          Browse our complete collection of premium items
        </p>
      </header>

      {/* Product Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 mt-10">
        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 bg-white p-4 rounded-xl shadow-sm">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range: Rs {priceRange[0]} - Rs {priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              className="w-full"
            />
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Rating
            </label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="border rounded-lg px-4 py-2"
            >
              <option value={0}>All Ratings</option>
              <option value={1}>⭐ 1 & up</option>
              <option value={2}>⭐ 2 & up</option>
              <option value={3}>⭐ 3 & up</option>
              <option value={4}>⭐ 4 & up</option>
              <option value={5}>⭐ 5 only</option>
            </select>
          </div>

          {/* In Stock Filter */}
          <div className="flex items-center items-center mt-2 md:mt-0">
            <input
              type="checkbox"
              id="inStock"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="inStock" className="ml-2 text-gray-700 text-sm">
              In Stock Only
            </label>
          </div>
        </div>

        {/* Product Grid */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          {filteredProducts.length > 0 ? (
            <Items productData={data} />
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OnlyProduct;

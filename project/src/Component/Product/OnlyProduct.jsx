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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 bg-white p-6 rounded-xl shadow-md">
          {/* Category Filter */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg px-4 h-10 w-full text-sm"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                min="0"
                className="w-1/2 border rounded-lg px-2 h-10 text-sm"
                placeholder="Min"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                min="0"
                className="w-1/2 border rounded-lg px-2 h-10 text-sm"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Rating Filter */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Rating
            </label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="border rounded-lg px-4 h-10 w-full text-sm"
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
          <div className="flex flex-col justify-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Availability
            </label>
            <div className="flex items-center h-10">
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

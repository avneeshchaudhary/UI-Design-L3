// Product.js
import React, { useState, useEffect, useContext } from "react";
import Card from "./card";
import { GlobalContext } from "./GlobalState";
import "./Product.css";

const Product = () => {
  const productsPerPage = 12;
  const { preferences } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const initialProducts = [
      { name: "Whole Wheat Bread", price: 2.99, category: "Bread", lactoseFree: true, nutFree: true, organic: true },
      { name: "Milk", price: 3.49, category: "Dairy", lactoseFree: false, nutFree: true, organic: false },
      { name: "Cheddar Cheese", price: 5.49, category: "Dairy", lactoseFree: false, nutFree: true, organic: false },
      { name: "Bananas", price: 1.45, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Chicken Breast", price: 6.99, category: "Proteins", lactoseFree: true, nutFree: true, organic: false },
      { name: "Brown Rice", price: 2.19, category: "Grains", lactoseFree: true, nutFree: true, organic: true },
      { name: "Avocado", price: 2.99, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Quinoa", price: 4.49, category: "Grains", lactoseFree: true, nutFree: true, organic: true },
      { name: "Chicken Breast", price: 6.99, category: "Proteins", lactoseFree: true, nutFree: true, organic: false },
      { name: "Blueberries", price: 3.29, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Spinach", price: 1.99, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Dark Chocolate", price: 4.99, category: "Snacks", lactoseFree: true, nutFree: false, organic: false },
      { name: "Almond Milk", price: 2.79, category: "Dairy", lactoseFree: true, nutFree: true, organic: true },
      { name: "Sweet Potato", price: 1.49, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Orange Juice", price: 3.99, category: "Beverages", lactoseFree: true, nutFree: true, organic: false },
      { name: "Greek Yogurt", price: 4.79, category: "Dairy", lactoseFree: false, nutFree: true, organic: false },
      { name: "Whole Wheat Pasta", price: 2.19, category: "Grains", lactoseFree: true, nutFree: true, organic: false },
      { name: "Cheddar Cheese", price: 5.49, category: "Dairy", lactoseFree: false, nutFree: true, organic: false },
      { name: "Salmon", price: 8.99, category: "Seafood", lactoseFree: true, nutFree: true, organic: false },
      { name: "Apples", price: 1.15, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Banana", price: 1.45, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Chips", price: 3.99, category: "Snacks", lactoseFree: true, nutFree: true, organic: false },
      { name: "Nutella", price: 5.49, category: "Spreads", lactoseFree: true, nutFree: false, organic: false },
      { name: "Broccoli", price: 2.49, category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true },
      { name: "Milk", price: 3.49, category: "Dairy", lactoseFree: false, nutFree: true, organic: false },
      { name: "Peanut Butter Ice Cream", price: 5.99, category: "Frozen Treats", lactoseFree: false, nutFree: false, organic: false },
      { name: "Bread", price: 2.99, category: "Bakery", lactoseFree: true, nutFree: true, organic: true },
      { name: "Cheese", price: 3.99, category: "Dairy", lactoseFree: false, nutFree: true, organic: false },
      // ... Add more products with their details
    ];

    const filterAndPaginateProducts = () => {
      const { lactose, nuts, organic } = preferences;

      const filteredProducts = initialProducts.filter((product) => {
        return (
          (lactose && product.lactoseFree) ||
          (nuts && product.nutFree) ||
          (organic && product.organic) ||
          (!lactose && !nuts && !organic)
        );
      });

      const startIndex = currentSlide * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      setProducts(paginatedProducts);
    };

    filterAndPaginateProducts();
  }, [preferences, currentSlide]); // Include only the necessary dependencies

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    const maxSlide = Math.ceil(products.length / productsPerPage) - 1;
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, maxSlide));
  };

  return (
    <div className="prod">
      <h1>Products</h1>
      <div className="prod_container">
        <div className="prod_wrapper">
          {products.map((item, index) => (
            <ul key={index} className="prod_ul">
              <Card product={item} />
            </ul>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevSlide} disabled={currentSlide === 0}>
            {"<"}
          </button>
          <span>{`${currentSlide + 1}/${Math.ceil(products.length / productsPerPage)}`}</span>
          <button onClick={handleNextSlide} disabled={currentSlide === Math.ceil(products.length / productsPerPage) - 1}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

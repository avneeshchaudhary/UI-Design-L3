import React, { useState, useEffect } from "react";
import Card from "./card.js";
import './Product.css';

const Product = () => {
  const initialProducts = [
    { name: "Whole Wheat Bread", category: "Bread", lactoseFree: true, nutFree: true, organic: true, price: 2.99 },
    { name: "Milk", category: "Dairy", lactoseFree: false, nutFree: true, organic: false, price: 3.49 },
    { name: "Cheddar Cheese", category: "Dairy", lactoseFree: false, nutFree: true, organic: false, price: 5.49 },
    { name: "Bananas", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 1.45 },
    { name: "Chicken Breast", category: "Proteins", lactoseFree: true, nutFree: true, organic: false, price: 6.99 },
    { name: "Brown Rice", category: "Grains", lactoseFree: true, nutFree: true, organic: true, price: 2.19 },
    { name: "Avocado", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 2.99 },
    { name: "Quinoa", category: "Grains", lactoseFree: true, nutFree: true, organic: true, price: 4.49 },
    { name: "Chicken Breast", category: "Proteins", lactoseFree: true, nutFree: true, organic: false, price: 6.99 },
    { name: "Blueberries", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 3.29 },
    { name: "Spinach", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 1.99 },
    { name: "Dark Chocolate", category: "Snacks", lactoseFree: true, nutFree: false, organic: false, price: 4.99 },
    { name: "Almond Milk", category: "Dairy", lactoseFree: true, nutFree: true, organic: true, price: 2.79 },
    { name: "Sweet Potato", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 1.49 },
    { name: "Orange Juice", category: "Beverages", lactoseFree: true, nutFree: true, organic: false, price: 3.99 },
    { name: "Greek Yogurt", category: "Dairy", lactoseFree: false, nutFree: true, organic: false, price: 4.79 },
    { name: "Whole Wheat Pasta", category: "Grains", lactoseFree: true, nutFree: true, organic: false, price: 2.19 },
    { name: "Cheddar Cheese", category: "Dairy", lactoseFree: false, nutFree: true, organic: false, price: 5.49 },
    { name: "Salmon", category: "Seafood", lactoseFree: true, nutFree: true, organic: false, price: 8.99 },
    { name: "Apples", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 1.15 },
    { name: "Banana", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 1.45 },
    { name: "Chips", category: "Snacks", lactoseFree: true, nutFree: true, organic: false, price: 3.99 },
    { name: "Nutella", category: "Spreads", lactoseFree: true, nutFree: false, organic: false, price: 5.49 },
    { name: "Broccoli", category: "Fresh Produce", lactoseFree: true, nutFree: true, organic: true, price: 2.49 },
    { name: "Milk", category: "Dairy", lactoseFree: false, nutFree: true, organic: false, price: 3.49 },
    { name: "Peanut Butter Ice Cream", category: "Frozen Treats", lactoseFree: false, nutFree: false, organic: false, price: 5.99 },
    { name: "Bread", category: "Bakery", lactoseFree: true, nutFree: true, organic: true, price: 2.99 },
    { name: "Cheese", category: "Dairy", lactoseFree: false, nutFree: true, organic: false, price: 3.99 },
  ];

  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const filterProducts = () => {
      const lactose = JSON.parse(sessionStorage.getItem("lactoseFree")) || false;
      const nuts = JSON.parse(sessionStorage.getItem("nutFree")) || false;
      const organic = JSON.parse(sessionStorage.getItem("organic")) || false;

      const filteredProducts = initialProducts.filter(product => {
        return (
          (lactose && product.lactoseFree) ||
          (nuts && product.nutFree) ||
          (organic && product.organic) ||
          (!lactose && !nuts && !organic)
        );
      });

      const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    };

    filterProducts();
  }, []);

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
      </div>
    </div>
  );
};

export default Product;

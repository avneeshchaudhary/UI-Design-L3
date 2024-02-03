// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Customer from "./components/Customer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";
import { GlobalProvider } from "./components/GlobalState";

function App() {
  return (
    <div className="appContainer">
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            {/* Home route with redirect from root */}
            <Route
              path="/"
              element={<Navigate to="/UI-Design-L2" replace />}
            />
            <Route path="/UI-Design-L2/" element={<Customer />} />
            <Route path="/UI-Design-L2/product" element={<Product />} />
            <Route path="/UI-Design-L2/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;

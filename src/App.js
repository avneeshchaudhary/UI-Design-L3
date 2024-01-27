import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route path="/demo/" element={<Customer />} />
            <Route path="/demo/product" element={<Product />} />
            <Route path="/demo/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </GlobalProvider>
    </div>
 );
}

export default App;

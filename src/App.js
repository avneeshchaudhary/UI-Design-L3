import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Customer from "./components/Customer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
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
            <Route path="/UI-Design-L3" element={<Customer />} />
            <Route path="/UI-Design-L3/product" element={<Product />} />
            <Route path="/UI-Design-L3/cart" element={<Cart />} />
            <Route path="/UI-Design-L3/faq" element={<FAQ />} />
            <Route path="/UI-Design-L3/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/UI-Design-L3" replace />} />
          </Routes>
          <Footer />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;

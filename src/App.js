import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Customer from "./components/Customer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { GlobalProvider } from "./components/GlobalState";

function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    // Simulate loading time for the survey
    const timeoutId = setTimeout(() => {
      setShowHomePage(true);
    }, 2000); // Adjust the duration as needed

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="appContainer">
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/demo/" element={<Customer />} />
            {showHomePage && (
              <>
                <Route path="/demo/product" element={<Product />} />
                <Route path="/demo/cart" element={<Cart />} />
              </>
            )}
          </Routes>
          <Footer />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;

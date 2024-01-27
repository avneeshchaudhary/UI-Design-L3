import React, { useState, useEffect } from "react";
import "./Customer.css"; // You can create a separate CSS file for styling

const Customer = () => {
  // State used to track user preferences
  const [preferences, setPreferences] = useState({
    lactose: JSON.parse(sessionStorage.getItem("lactoseFree")) || false,
    nuts: JSON.parse(sessionStorage.getItem("nutFree")) || false,
    organic: JSON.parse(sessionStorage.getItem("organic")) || false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    const validateForm = () => {
      const errors = {};
      let isValid = true;

      // Validate at least one preference is selected
      if (!preferences.lactose && !preferences.nuts && !preferences.organic) {
        errors.preferences = "Select at least one preference.";
        isValid = false;
      }

      setFormErrors(errors);
      setIsFormValid(isValid);
    };

    validateForm();
  }, [preferences]);

  const handleChange = (evt) => {
    const { name, checked } = evt.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: checked,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isFormValid) {
      // Add user preferences to session storage
      sessionStorage.setItem("lactoseFree", JSON.stringify(preferences.lactose));
      sessionStorage.setItem("nutFree", JSON.stringify(preferences.nuts));
      sessionStorage.setItem("organic", JSON.stringify(preferences.organic));
      alert("Saved Preferences!");
    } else {
      alert("Please correct the form errors before saving.");
    }
  };

  return (
    <div className="customer">
      <h1 className="customerTitle">Customer Preferences</h1>
      <div className="customerContainer">
        <p className="instructions">
          If applicable, please select one or more of the categories below
        </p>
        <form onSubmit={handleSubmit}>
          <div className="checkbox-wrapper">
            <label>
              Would you like to see our lactose-free products?
              <input
                type="checkbox"
                checked={preferences.lactose}
                onChange={handleChange}
                name="lactose"
              />
            </label>
            <label>
              Would you like to see our nut-free products?
              <input
                type="checkbox"
                checked={preferences.nuts}
                onChange={handleChange}
                name="nuts"
              />
            </label>
            <label>
              Would you like to see our organic products?
              <input
                type="checkbox"
                checked={preferences.organic}
                onChange={handleChange}
                name="organic"
              />
            </label>
          </div>
          {formErrors.preferences && (
            <p className="error">{formErrors.preferences}</p>
          )}
          <button className="btn" type="submit" disabled={!isFormValid}>
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
};

export default Customer;

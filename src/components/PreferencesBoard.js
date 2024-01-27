// PreferencesBoard.js
import React, { useState } from 'react';

const PreferencesBoard = ({ onPreferencesChange }) => {
  const [lactoseFree, setLactoseFree] = useState(false);
  const [nutFree, setNutFree] = useState(false);
  const [organic, setOrganic] = useState(false);

  const handleCheckboxChange = (category) => {
    switch (category) {
      case 'lactoseFree':
        setLactoseFree(!lactoseFree);
        break;
      case 'nutFree':
        setNutFree(!nutFree);
        break;
      case 'organic':
        setOrganic(!organic);
        break;
      default:
        break;
    }

    onPreferencesChange({
      lactoseFree,
      nutFree,
      organic,
    });
  };

  return (
    <div className="preferences-board">
      <h1>Customer Preferences</h1>
      <p>If applicable, please select one or more of the categories below</p>

      <div className="preference-checkbox">
        <input
          type="checkbox"
          id="lactoseFree"
          checked={lactoseFree}
          onChange={() => handleCheckboxChange('lactoseFree')}
        />
        <label htmlFor="lactoseFree">Would you like to see our lactose-free products?</label>
      </div>

      <div className="preference-checkbox">
        <input
          type="checkbox"
          id="nutFree"
          checked={nutFree}
          onChange={() => handleCheckboxChange('nutFree')}
        />
        <label htmlFor="nutFree">Would you like to see our nut-free products?</label>
      </div>

      <div className="preference-checkbox">
        <input
          type="checkbox"
          id="organic"
          checked={organic}
          onChange={() => handleCheckboxChange('organic')}
        />
        <label htmlFor="organic">Would you like to see our organic products?</label>
      </div>
    </div>
  );
};

export default PreferencesBoard;

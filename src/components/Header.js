import React from "react";

const Header = ({ toggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => toggleDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save"
      >
        Toggle
      </button>
    </div>
  );
};

export default Header;

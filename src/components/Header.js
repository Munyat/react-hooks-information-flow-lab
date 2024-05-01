import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  function darkModeClick() {
    onDarkModeClick();
  }
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={darkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;

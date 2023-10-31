import React from "react";

const Header = ({ setIsAdding }) => {
  return (
    <div>
      <h1>IT Management Solutions</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button on onClick={() => setIsAdding(true)} className="round-button">
          Add Assest
        </button>
      </div>
    </div>
  );
};

export default Header;

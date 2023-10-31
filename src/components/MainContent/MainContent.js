import React from "react";

const MainContent = ({ children }) => {
  return (
    <main
      style={{
        paddingLeft: "230px",
        transition: "all .5s",
      }}
    >
      {children}
    </main>
  );
};

export default MainContent;

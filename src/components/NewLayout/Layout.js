import React from "react";
import Footer from "../NewFooter/Footer";
import Header from "../NewHeader/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }} className="max-w-full mx-auto px-4">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

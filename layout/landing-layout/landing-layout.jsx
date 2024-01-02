import Footer  from "../../src/components/footer/footer";
import Header from "../../src/components/header/header";
import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default LandingLayout;

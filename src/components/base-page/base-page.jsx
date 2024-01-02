import { Container } from "@mui/material";
import React from "react";

const BasePage = ({ children, title, fluid, fixed }) => {
  return (
    <Container maxWidth={fluid} fixed={fixed} className="border" style={{border:'3px solid'}}>
      {/* <Helmet>
        <title>{title}</title>
      </Helmet> */}
      {children}
    </Container>
  );
};

export default BasePage;

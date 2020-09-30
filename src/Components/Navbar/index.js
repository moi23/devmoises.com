import React from "react";

import { Container } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <>
        <a href="http://localhost:3000/">DEVMOISES</a>
      </>
      <div>
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/">About Me</a>
        <a href="http://localhost:3000/">Services</a>
        <a href="http://localhost:3000/">Works</a>
        <a href="http://localhost:3000/">My Contact</a>
      </div>
    </Container>
  );
};

export default Navbar;

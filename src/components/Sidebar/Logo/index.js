import React from "react";
import logo from "../../../logo.svg";
import { Container, Title, Image } from "./styles";

const Logo = () => {
  return (
    <Container horizontal="center" vertical="center">
      <Image src={logo} alt="logo" />
      <Title>Dashboard</Title>
    </Container>
  );
};

export default Logo;

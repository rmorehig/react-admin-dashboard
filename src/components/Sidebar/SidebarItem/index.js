import React from "react";
import { Container, Title, ActiveBar } from "./styles";

export const SidebarItem = ({ title, active, handleClick }) => {
  return (
    <Container active={active} onClick={handleClick}>
      {active && <ActiveBar />}
      <Title active={active}>{title}</Title>
    </Container>
  );
};

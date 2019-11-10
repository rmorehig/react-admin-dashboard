import React from "react";
import logo from "../../../logo.svg";
import styled from "styled-components";

export default () => {
  return (
    <LogoWrapper horizontal="center" vertical="center">
      <img src={logo} alt="logo" />
      <span>Dashboard</span>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
  margin-left: 32px;
  margin-right: 32px;
  img {
    height: 10vmax;
  }
`;

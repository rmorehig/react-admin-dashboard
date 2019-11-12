import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: ${props =>
    props.active ? "rgba(221, 226, 255, 0.08)" : "#363740"};
  cursor: pointer;
  height: 56px;
  padding-left: 32px;
  padding-right: 32px;
  &:hover {
    background-color: rgba(221, 226, 255, 0.08);
  }
`;

export const Separator = styled.div`
  border-top: "1px solid #DFE0EB";
  margin-top: 16;
  margin-bottom: 16;
  opacity: 0.06;
`;

export const Title = styled.span`
  color: ${props => (props.active ? "#DDE2FF" : "#A4A6B3")};
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 20px;
  margin-left: 24px;
`;

import React from "react";
import styled from "@emotion/styled";
const MyHeader = styled.header`
  background-color: blue;
  font-family: roboto;
  letter-spacing: 1.3px;
  padding: 3px;
  grid-row: 1/-1;
  grid-column: 1/-1;
`;

export const Header = () => {
  return <MyHeader>My Header</MyHeader>;
};

import React from "react";
import { SideBar } from "../ui/SideBar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Div = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  gap: 10px;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: yellow;
`;

export const Layout = () => {
  return (
    <Div>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </Div>
  );
};

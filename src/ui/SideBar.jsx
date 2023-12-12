import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 0;
  margin: 0;
`;

const Aside = styled.aside`
  background-color: rgba(238, 238, 238, 255);
  font-family: roboto;
  width: 180px;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  :hover {
    background-color: #9d28b4;
    color: white;
  }
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const LinkAccesos = styled(Link)`
  letter-spacing: 1.3px;
  text-decoration: none;
  :hover {
    color: white;
  }
  font-size: 10px;
  color: gray;
`;
export const SideBar = () => {
  return (
    <>
      <Aside>
        <nav>
          <hr></hr>

          <Ul>
            <Li>
              <MdDashboard />
              <LinkAccesos to={"Dashboard"}>Dashboard</LinkAccesos>
            </Li>
            <Li>
              <AiOutlineTransaction />
              <LinkAccesos to={"Transacciones"}>Transaccioones</LinkAccesos>
            </Li>
            <Li>
              <BiSolidCategory />
              <LinkAccesos>Categorias</LinkAccesos>
            </Li>
            <Li>
              <MdDashboard />
              <LinkAccesos>Presupuesto</LinkAccesos>
            </Li>
            <Li>
              <MdDashboard />
              <LinkAccesos>Estadísticas</LinkAccesos>
            </Li>
          </Ul>
        </nav>
      </Aside>
    </>
  );
};

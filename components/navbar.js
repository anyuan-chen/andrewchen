/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import media from "../util/media";
import { Logo } from "./icons/logo";
const Background = styled.div`
  background-color: #021923;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: space-between;

  @media (${media.laptop}) {
    height: 100vh;
    background-color: white;
  }
`;
const StyledLogo = styled(Logo)`
  color: white;
  @media (${media.laptop}) {
    color: black;
  }     
`;
export default function Navbar() {
  return (
    <Background>
      <StyledLogo></StyledLogo>
      
      <img src="/icons/hamburger_menu.svg" alt="menu"></img>

    </Background>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import media from "../../util/media";
import { Logo } from "../icons/logo";
import { Hamburger } from "../icons/hamburger";
import NavbarElement from "./navbarElement";
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
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
const StyledLogo = styled(Logo)`
  color: white;
  @media (${media.laptop}) {
    color: black;
    height: 191.7px;
    width: 170px;
  }
`;
const StyledHamburger = styled(Hamburger)`
  color: white;
  @media (${media.laptop}) {
    display: none;
  }
`;
const DesktopNav = styled.nav`
  display: none;
  @media (${media.laptop}) {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    border-bottom: 1px solid #d8d8d8;
  }
`;
export default function Navbar() {
  return (
    <Background>
      <StyledLogo></StyledLogo>
      <StyledHamburger></StyledHamburger>
      <DesktopNav>
        <NavbarElement text="home"></NavbarElement>
        <NavbarElement text="work"></NavbarElement>
        <NavbarElement text="writing"></NavbarElement>
        <NavbarElement text="resume"></NavbarElement>
        <NavbarElement text="about"></NavbarElement>
        <NavbarElement text="contact" className="last"></NavbarElement>
      </DesktopNav>
    </Background>
  );
}

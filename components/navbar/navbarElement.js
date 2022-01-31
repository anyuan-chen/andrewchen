import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
const NavbarHeading = styled.h3`
  ${TextStyles.laptopNav}
`;
export default function NavbarElement({ text }) {
  return <NavbarHeading>{text}</NavbarHeading>; 
}

import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
const NavbarHeading = styled.h3`
  ${TextStyles.laptopNav}
`;
const Button = styled.button`
  background: none;
  text-align: left;
  border-top: 1px solid #d8d8d8;
  width: 170px;
`;
export default function NavbarElement({ text }) {
  return (
    <Button>
      <NavbarHeading>{text}</NavbarHeading>
    </Button>
  );
}

import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarHeading = styled.a`
  ${TextStyles.laptopNav}
`;
const Button = styled.button`
  background: none;
  text-align: left;
  border-top: 1px solid #d8d8d8;
  width: 170px;
  padding-top: 25px;
  padding-bottom: 25px;

`;
export default function NavbarElement({ text, link }) {
  return (
    <Button
      as={motion.button}
      whileHover={{
        backgroundColor: "snow",
        transition: { duration: 0.2 },
      }}
    > 
      <Link href={link} passHref>
        <NavbarHeading>{text}</NavbarHeading>
      </Link>
    </Button>
  );
}

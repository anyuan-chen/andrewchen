import Link from "next/link";
import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
import Text from "../shared/text";
import theme from "../../theme";
import { motion } from "framer-motion";
const Heading = styled.div`
  a {
    display: block;
  }
`;
export default function ResumeElement({ link, children }) {
  return (
    <Link href={link} passHref>
      <motion.a
        transition={{ type: "spring", stiffness: 100 }}
        style={{
          textDecoration: "underline rgba(255, 255, 255, 0) 5px",
          textUnderlineOffset: "7px",
        }}
        whileHover={{ textDecoration: "underline rgba(255, 255, 255, 1) 5px" }}
      >
        <Text color={theme.colors.white} fontSize={theme.fontSize.h1}>
          {children}
        </Text>
      </motion.a>
    </Link>
  );
}

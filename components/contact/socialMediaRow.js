import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
import theme from "../../theme";
import Text from "../shared/text";
import Link from "next/link";
import { motion } from "framer-motion";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;
export default function SocialMediaRow({ title, link }) {
  return (
    <Container>
      <Text color={theme.colors.gray} fontSize={theme.fontSize.h3}>
        {title}
      </Text>
      <Link href={`https://www.${link}`} passHref>
        <motion.a
        style={{
          textDecoration: "underline rgba(255, 255, 255, 0) 5px",
          textUnderlineOffset: "12px",
        }}
        whileHover={{ textDecoration: "underline rgba(255, 255, 255, 1) 5px" }}>
          <Text color={theme.colors.white} fontSize={theme.fontSize.h1}>
            {link}
          </Text>
        </motion.a>
      </Link>
    </Container>
  );
}

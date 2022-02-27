import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
import theme from "../../theme";
import Text from "../shared/text";
import Link from "next/link";
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
      <Link href={link}>
        <a>
          <Text color={theme.colors.white} fontSize={theme.fontSize.h1}>
            {link}
          </Text>
        </a>
      </Link>
    </Container>
  );
}

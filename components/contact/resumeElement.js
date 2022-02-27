import Link from "next/link";
import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
import Text from "../shared/text";
import theme from "../../theme";
const Heading = styled.div`
  h1 {
    ${TextStyles.oversized}
  }
  a{
      display: block;
  }
`;
export default function ResumeElement({ link, children }) {
  return (
    <Link href={link} passHref>
      <Heading>
        <a>
          <Text color={theme.colors.white} fontSize={theme.fontSize.h1} >{children}</Text>
        </a>
      </Heading>
    </Link>
  );
}

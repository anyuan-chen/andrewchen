import Link from "next/link";
import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
import Text from "../shared/text";
import theme from "../../theme";
const Heading = styled.div`
  a{
      display: block;
  }
`;
export default function ResumeElement({ link, children }) {
  return (
    <Link href={link} passHref>
        <a>
          <Text color={theme.colors.white} fontSize={theme.fontSize.h1} >{children}</Text>
        </a>
    </Link>
  );
}

import Link from "next/link";
import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
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
          <h1>{children}</h1>
        </a>
      </Heading>
    </Link>
  );
}

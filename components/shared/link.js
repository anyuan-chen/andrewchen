import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TextStyles from "../../util/textStyles";

const MainLink = styled.a`
    ${TextStyles.link}
    padding-bottom: 1rem;
`
export default function LinkMain() {
  return (
    <Link href="/work" passHref>
      <MainLink>See all</MainLink>
    </Link>
  );
}

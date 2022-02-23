import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
const Title = styled.h1`
  ${TextStyles.oversized}
  padding-bottom: 2rem;
`;
export default function Heading({ children }) {
  return <Title>{children}</Title>;
}

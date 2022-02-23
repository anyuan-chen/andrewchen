/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";

const Container = styled.section`
  background-color: #021923;
  box-sizing: border-box;
  border-bottom: 7px solid #cacaca;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
`;

export default function ArticleLayout({ children, fullWidth }) {
  return <Container>{children}</Container>;
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
import TitleArea from "./titleArea";

const Container = styled.section`
  background-color: #021923;
  box-sizing: border-box;
  border-bottom: 7px solid #cacaca;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  h1 {
    ${TextStyles.heading}
  }
  p {
    ${TextStyles.oversized}
  }
`;

export default function Box({ children, title, fullWidth }) {
  return (
    <Container>
      <TitleArea title={title}> </TitleArea>
      {children}
    </Container>
  );
}

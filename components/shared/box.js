/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import media from "../../util/media";
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
  h3 {
    ${TextStyles.normal}
  }
  @media ${media.laptop} {
    border: none;
    ${(props) => props.styles}
  }
`;

export default function Box({ children, title, fullWidth, styles }) {
  return (
    <Container styles={styles}>
      <TitleArea title={title}> </TitleArea>
      {children}
    </Container>
  );
}

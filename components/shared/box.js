/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
import TitleArea from "./titleArea";


const Container = styled.section`
  background-color: #021923;
  padding: 1rem 3rem;
  box-sizing: border-box;
  border-width: 0 5px 5px 5px;
  border-color: #cacaca;
  border-style: solid; 
  display: flex;
  flex-direction: column;
  h1 {
    ${TextStyles.heading}
  }
  p {
    ${TextStyles.oversized}
  }
`;

export default function Box({ children, title }) {
  return (
    <Container>
      <TitleArea title={title}> </TitleArea>
      {children}
    </Container>
  );
}

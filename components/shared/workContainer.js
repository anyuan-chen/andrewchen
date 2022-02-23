import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 4rem;
  }
  padding-top: 1rem;
`;
export default function WorkContainer({ children }) {
  return <Container>{children}</Container>;
}

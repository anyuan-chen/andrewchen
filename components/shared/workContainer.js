import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9rem;
  overflow-y: auto;
`;
export default function WorkContainer({ children }) {
  return <Container>{children}</Container>;
}

import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none; 
  row-gap: 3rem;
  li {
    decoration: none;
    ${TextStyles.normal}
  }
`;
export default function LikesContainer({ children }) {
  return <List>{children}</List>;
}

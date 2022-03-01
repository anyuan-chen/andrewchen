import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none; 
  row-gap: 6rem;
  font-family:  -apple-system, BlinkMacSystemFont, Helvetica, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  li {
    decoration: none;

  }
`;
export default function LikesContainer({ children }) {
  return <List>{children}</List>;
}

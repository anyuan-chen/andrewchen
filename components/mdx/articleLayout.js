/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import media from "../../util/media";
import Box from "../shared/box";

const Container = styled(Box)`
  background-color: #021923;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
`;

export default function ArticleLayout({ children, fullWidth }) {
  return <Container>{children}</Container>;
}

import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import media from "../util/media";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-gap: 10px;
  margin-top: 90px;
  border-right: 7px solid #cacaca;
  border-left: 7px solid #cacaca;
  width: 100vw;
  @media ${media.laptop} {
    width: calc(100vw - 28.75rem);
    height: 100vh;
    overflow-y: auto;
    margin-top: 0;
    background: #162932;
    border: none;
  }
`;

const Background = styled.div`
  display: flex;
`;
export default function Page({ children }) {
  return (
    <Background>
      <Navbar></Navbar>
      <Container>{children}</Container>
    </Background>
  );
}

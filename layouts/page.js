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
  @media ${media.laptop} {
    width: calc(100vw - 28.75rem);
    height: 100vh;
    border-top: 7px solid #cacaca;
    margin-top: 0;
  }
`;

const Background = styled.div`
  display: flex;
`;
export default function Page({ children }) {
    
  return (
    <Background>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>
      <Container>{children}</Container>
    </Background>
  );
}

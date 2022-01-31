import Head from "next/head";
import Image from "next/image";
import TextStyles from "../util/textStyles";
import styled from "styled-components";
import media from "../util/media";
import Navbar from "../components/navbar/navbar";
const Heading = styled.h1`
  ${TextStyles.oversized}
`;
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <div>
        <Navbar></Navbar>
      </div>
    </>
  );
}

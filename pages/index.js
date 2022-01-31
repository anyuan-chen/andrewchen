import Head from "next/head";
import Image from "next/image";
import TextStyles from "../util/textStyles";
import styled from "styled-components";
import media from "../util/media";
const Heading = styled.h1`
  ${TextStyles.oversized}
`;
export default function Home() {
  return (
    <div>
      <Heading>hi my name is andrew</Heading>
    </div>
  );
}

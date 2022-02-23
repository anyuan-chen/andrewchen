/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import TextStyles from "../util/textStyles";
import styled from "styled-components";
import media from "../util/media";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";
import Box from "../components/shared/box";
import WorkRow from "../components/shared/workRow";
import LinkMain from "../components/shared/link";
import WorkContainer from "../components/shared/workContainer";
import WritingContainer from "../components/shared/writingContainer";
import ArticlePreview from "../components/shared/writingArticlePreview";
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

export default function Home() {
  return (
    <Background>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>
      <Container>
        <Box title="About Me">
          <p style={{ paddingBottom: "7rem" }}>
            I’m a software engineer based in Toronto who I design and build
            refreshing web experiences, packed to the punch with delightful
            interactions.
          </p>
        </Box>
        <Box title="Work">
          <WorkContainer>
            <WorkRow projectName={"hi"} year={2022}></WorkRow>
            <WorkRow projectName={"hi"} year={2022}></WorkRow>
            <WorkRow projectName={"hi"} year={2022}></WorkRow>
          </WorkContainer>
          <LinkMain></LinkMain>
        </Box>
        <Box title="Writing">
          <WritingContainer>
            <ArticlePreview
              title={
                "This is a title of the Article that I Wrote today in the Morning"
              }
              description={
                "Description goes here. Description goes here. Description goes here. Description goes here.Description goes here. Description goes here. Description goes here. Description "
              }
            ></ArticlePreview>
            <ArticlePreview
              title={
                "This is a title of the Article that I Wrote today in the Morning"
              }
              description={
                "Description goes here. Description goes here. Description goes here. Description goes here.Description goes here. Description goes here. Description goes here. Description "
              }
            ></ArticlePreview>
            <ArticlePreview
              title={
                "This is a title of the Article that I Wrote today in the Morning"
              }
              description={
                "Description goes here. Description goes here. Description goes here. Description goes here.Description goes here. Description goes here. Description goes here. Description "
              }
            ></ArticlePreview>
          </WritingContainer>
        </Box>
      </Container>
    </Background>
  );
}

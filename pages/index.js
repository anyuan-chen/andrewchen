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
const Container = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  flex-gap: 10px;
  margin-top: 70px;
`;

const Background = styled.div``;

export default function Home() {
  return (
    <Background>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>
      <Container>
        <Box title="About Me">
          <p>
            I’m a software engineer based in Toronto who I design and build
            refreshing web experiences, packed to the punch with delightful
            interactions.
          </p>
        </Box>
        <Box title="Work">
          <p>
            I’m a software engineer based in Toronto who I design and build
            refreshing web experiences, packed to the punch with delightful
            interactions.
          </p>
        </Box>
      </Container>
    </Background>
  );
}
{
  /* <AboutBox>
          <div style={{ display: "flex" }}>
            <h1>About Me</h1>
            <img src="/icons/arrow_downward.svg" alt="arrow"></img>
          </div>
          <p>
            I’m a software engineer based in Toronto who I design and build
            refreshing web experiences, packed to the punch with delightful
            interactions.
          </p>
        </AboutBox>
        <WorkBox>
          <div style={{ display: "flex", paddingBottom: "30px" }}>
            <h1>Work</h1>
            <img src="/icons/arrow_downward.svg" alt="arrow"></img>
          </div>
          <div styled={{ display: "flex" }}>
            {work.map((project, index) => {
              return (
                <WorkRow key={index}>
                  <h2>{project.name}</h2>
                  <h2>{project.year}</h2>
                </WorkRow>
              );
            })}
          </div>
          <a style={{ paddingBottom: "20px", paddingTop: "10px" }}>See all</a>
        </WorkBox>
        <WritingBox>
          <div style={{ display: "flex" }}>
            <h1>Writing</h1>
            <img src="/icons/arrow_downward.svg" alt="arrow"></img>
          </div>
          <div>
            {articles.map((article, index) => {
              <ArticleBox key={index}>
                <Link href={article.link}>
                  <a>
                    <h1>{article.title}</h1>     
                    <h2>{article.subtitle}</h2>              
                  </a>
                </Link>
              </ArticleBox>;
            })}
          </div>
        </WritingBox> */
}

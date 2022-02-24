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
import Page from "../layouts/page";


export default function Home() {
  return (
    <Page>
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
            
          </WorkContainer>
          <LinkMain></LinkMain>
        </Box>
        <Box title="Writing">
          <WritingContainer>
            
          </WritingContainer>
        </Box>
    </Page>
  );
}

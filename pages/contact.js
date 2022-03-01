import React from "react";
import Page from "../layouts/page";
import Box from "../components/shared/box";
import SocialMediaRow from "../components/contact/socialMediaRow";
import ResumeBox from "../components/contact/resumeBox";
import ResumeElement from "../components/contact/resumeElement";
import HomeLayout from "../components/index/homeLayout";
import TitleArea from "../components/shared/titleArea";
import Text from "../components/shared/text";
import theme from "../theme";
import styled from "styled-components";
import Head from "next/head";
const SpacedBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;
export default function Contact() {
  return (
    <Page>
      <Head><title>Contact Me</title></Head>
      <HomeLayout>
        <Box gridRow="1/4" gridColumn="1/3">
          <TitleArea title="Get In Touch"></TitleArea>
          <SpacedBox>
            <SocialMediaRow
              link="andrew.chen.anyuan@gmail.com"
              title="Email"
            ></SocialMediaRow>
            <SocialMediaRow
              link="linkedin.com/in/anyuan-chen"
              title="LinkedIn"
            ></SocialMediaRow>
            <SocialMediaRow
              link="github.com/anyuan-chen"
              title="Github"
            ></SocialMediaRow>
          </SpacedBox>
        </Box>
        <Box gridRow="4/6" gridColumn="1/2">
          <TitleArea title="Resume"></TitleArea>
          <ResumeBox>
            <ResumeElement link="/resume/AndrewChenResume.pdf">
              .pdf
            </ResumeElement>
            <ResumeElement link="/resume/AndrewChenResume.docx">
              .docx
            </ResumeElement>
            <ResumeElement link="/resume/AndrewChenResume.tex">
              .tex
            </ResumeElement>
          </ResumeBox>
        </Box>
        <Box gridRow="4/6" gridColumn="2/3">
          <TitleArea title="Availablity"></TitleArea>

          <Text color={theme.colors.white} fontSize={theme.fontSize.h3} fontWeight={400}>
            I am currently studying full-time, but open to part time
            opportunities!
          </Text>
        </Box>
      </HomeLayout>
    </Page>
  );
}

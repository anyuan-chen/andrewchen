import React from "react";
import Page from "../layouts/page";
import Box from "../components/shared/box";
import SocialMediaRow from "../components/contact/socialMediaRow";
import ResumeBox from "../components/contact/resumeBox";
import ResumeElement from "../components/contact/resumeElement";
export default function Contact() {
  return (
    <Page>
      <Box title="Get In Touch">
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
      </Box>
      <Box title="Resume">
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
      <Box title="Availablity">
        <p>
          I am currently studying full-time, but open to part time
          opportunities!
        </p>
      </Box>
    </Page>
  );
}

import React from "react";
import Page from "../layouts/page";
import Box from "../components/shared/box";
import SocialMediaRow from "../components/contact/socialMediaRow";
import ResumeBox from "../components/contact/resumeBox";
import ResumeElement from "../components/contact/resumeElement";
import HomeLayout from "../components/index/homeLayout";
export default function Contact() {
  return (
    <Page>
      <HomeLayout>
        <Box
          title="Get In Touch"
          styles={{ gridRow: "1/4", gridColumn: "1/3" }}
        >
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
        <Box title="Resume" styles={{ gridRow: "4/6", gridColumn: "1/2" }}>
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
        <Box title="Availablity" styles={{ gridRow: "4/6", gridColumn: "2/3" }}>
          <p>
            I am currently studying full-time, but open to part time
            opportunities!
          </p>
        </Box>
      </HomeLayout>
    </Page>
  );
}

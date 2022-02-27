/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import TextStyles from "../util/textStyles";
import styled from "styled-components";
import media from "../util/media";
import Link from "next/link";
import Box from "../components/shared/box";
import WorkRow from "../components/shared/workRow";
import LinkMain from "../components/shared/link";
import WorkContainer from "../components/shared/workContainer";
import WritingContainer from "../components/shared/writingContainer";
import ArticlePreview from "../components/shared/writingArticlePreview";
import Page from "../layouts/page";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import HomeLayout from "../components/index/homeLayout";
import ResumeBox from "../components/contact/resumeBox";
import ResumeElement from "../components/contact/resumeElement";
import TitleArea from "../components/shared/titleArea";
import Text from "../components/shared/text";
import theme from "../theme";

export default function Home({ workData, articleData }) {
  return (
    <Page>
      <HomeLayout>
        <Box gridColumn="1 / 3">
          <TitleArea title="About Me"></TitleArea>
          <Text
            paddingBottom="7rem"
            color={theme.colors.white}
            fontSize={theme.fontSize.h1}
          >
            I’m a software engineer based in Toronto who I design and build
            refreshing web experiences, packed to the punch with delightful
            interactions.
          </Text>
        </Box>
        <Box title="Work" gridColumn="1/ 1" gridRow="2/5">
          <TitleArea title="Work"></TitleArea>
          <WorkContainer>
            {workData.map((project, index) => {
              return (
                <WorkRow
                  key={index}
                  projectName={project.title}
                  year={project.year}
                  link={project.link}
                ></WorkRow>
              );
            })}
          </WorkContainer>
          <LinkMain></LinkMain>
        </Box>
        <Box title="Writing" gridColumn="2/ 3" gridRow="2/4">
          <TitleArea title="Writing"></TitleArea>

          <WritingContainer>
            {articleData.map((article, index) => {
              if (index < 2) {
                return (
                  <ArticlePreview
                    key={index}
                    link={article.link}
                    title={article.title}
                    description={article.description}
                  ></ArticlePreview>
                );
              }
            })}
          </WritingContainer>
        </Box>
        <Box gridColumn="2/ 3" gridRow="4/5" title="Resume">
          <TitleArea title={"Resume"}></TitleArea>
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
      </HomeLayout>
    </Page>
  );
}
export async function getStaticProps() {
  const work = fs.readdirSync("portfolio");
  const workData = work.map((project) => {
    const projectData = fs.readFileSync(path.join("portfolio", project));
    const { data: frontmatter } = matter(projectData);
    frontmatter.link = project.substr(0, project.length - 4);
    return frontmatter;
  });
  const articles = fs.readdirSync("articles");
  const articleData = articles.map((article) => {
    const articleData = fs.readFileSync(path.join("articles", article));
    const { data: frontmatter } = matter(articleData);
    frontmatter.link = article.substr(0, article.length - 4);
    return frontmatter;
  });
  console.log(workData);
  workData.sort((a, b) => (a.year > b.year ? -1 : 1));

  return {
    props: {
      workData,
      articleData,
    },
  };
}

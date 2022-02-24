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

export default function Home({ workData, articleData }) {
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
      <Box title="Writing">
        <WritingContainer>
          {articleData.map((article, index) => {
            return (
              <ArticlePreview
                key={index}
                link={article.link}
                title={article.title}
                description={article.description}
              ></ArticlePreview>
            );
          })}
        </WritingContainer>
      </Box>
    </Page>
  );
}
export async function getStaticProps() {
  const work = fs.readdirSync("portfolio");
  const workData = work.map((project) => {
    const projectData = fs.readFileSync(path.join("portfolio", project));
    const { data: frontmatter } = matter(projectData);
    frontmatter.link = project.substr(0, project.length - 4);
    return  frontmatter ;
  });
  const articles = fs.readdirSync("articles");
  const articleData = articles.map((article) => {
    const articleData = fs.readFileSync(path.join("articles", article));
    const { data: frontmatter } = matter(articleData);
    frontmatter.link = article.substr(0, article.length - 4);
    return frontmatter;
  });
  console.log(workData);
  return {
    props: {
      workData,
      articleData,
    },
  };
}

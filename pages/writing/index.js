import React from "react";
import WritingContainer from "../../components/shared/writingContainer";
import Page from "../../layouts/page";
import Box from "../../components/shared/box";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticlePreview from "../../components/writing/articlePreview";
import TitleArea from "../../components/shared/titleArea";

export default function Writing({ frontmatter }) {
  return (
    <Page>
      <Box >
        <TitleArea title="Writing"></TitleArea>
        <WritingContainer>
          {frontmatter.map((article, index) => {
            return (
              <ArticlePreview
                key={index}
                url={article.file.substr(0, article.file.length - 4)}
                title={article.title}
                description={article.description}
                date={article.date}
              ></ArticlePreview>
            );
          })}
        </WritingContainer>
      </Box>
    </Page>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("articles"));
  const frontmatter = files.map((file) => {
    const fileBuffer = fs.readFileSync(path.join("articles", `${file}`));
    const {
      data: { title, date, description },
    } = matter(fileBuffer);
    return {
      file,
      title,
      date,
      description,
    };
  });
  return {
    props: {
      frontmatter,
    },
  };
}

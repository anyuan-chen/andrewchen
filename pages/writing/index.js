import React from "react";
import ArticlePreview from "../../components/shared/writingArticlePreview";
import WritingContainer from "../../components/shared/writingContainer";
import Page from "../../layouts/page";
import Box from "../../components/shared/box";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DetailedArticlePreview from "../../components/work/DetailedProjectPreview";

export default function Writing({ frontmatter }) {
  return (
    <Page>
      <Box title="Writing">
        <WritingContainer>
          {frontmatter.map((article, index) => {
            return (
              <ArticlePreview
                key={index}
                link={article.file.substr(0, article.file.length - 4)}
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

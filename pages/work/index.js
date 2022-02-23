import React from "react";
import Page from "../../layouts/page";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DetailedArticlePreview from "../../components/work/DetailedArticlePreview";
import Box from "../../components/shared/box";

export default function Work({ files }) {
  return (
    <Page>
      <Box title="Work" fullWidth={true} >  
        {files.map((file, index) => {  
          return file.thumbnailUrl ? (     
            <DetailedArticlePreview
              title={file.title}
              key={index}
              year={file.year}
              imgUrl={file.thumbnailUrl}
              description={file.description}
            ></DetailedArticlePreview>
          ) : (
            <DetailedArticlePreview 
              title={file.title}
              key={index}
              year={file.year}
              imgUrl={file.thumbnailUrl}
              description={file.description}
            ></DetailedArticlePreview>
          );
        })}   
      </Box>
    </Page>
  );
}

export async function getStaticProps() {
  const works = fs.readdirSync(path.join("portfolio"));
  const files = works.map((work) => {
    const buffer = fs.readFileSync(path.join("portfolio", `${work}`));
    const {
      data: { title, date, description, thumbnailUrl, year },
    } = matter(buffer);
    return {
      title,
      date,
      description,
      thumbnailUrl,
      year,
    };
  });
  return {
    props: {
      files,
    },
  };
}

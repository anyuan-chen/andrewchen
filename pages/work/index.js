import React from "react";
import Page from "../../layouts/page";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DetailedProjectPreview from "../../components/work/DetailedProjectPreview";
import Box from "../../components/shared/box";
import TitleArea from "../../components/shared/titleArea";
import styled from "styled-components";
import Title from "../../components/shared/title";
import Text from "../../components/shared/text";
import theme from "../../theme";
const Container = styled.div`
  row-gap: 8rem;
  display: flex;
  flex-direction: column;
`;
const DynamicTitle = styled.div``;
export default function Work({ files }) {
  return (
    <Page>
      <Box>
        <DynamicTitle>
          <TitleArea title="Work"></TitleArea>
        </DynamicTitle>
        <Container>
          {files.map((file, index) => {
            return file.thumbnailUrl ? (
              <DetailedProjectPreview
                title={file.title}
                key={index}
                year={file.year}
                imgUrl={file.thumbnailUrl}
                description={file.description}
              ></DetailedProjectPreview>
            ) : (
              <DetailedProjectPreview
                title={file.title}
                key={index}
                year={file.year}
                imgUrl={file.thumbnailUrl}
                description={file.description}
              ></DetailedProjectPreview>
            );
          })}
        </Container>
      </Box>
    </Page>
  );
}

export async function getStaticProps() {
  const works = fs.readdirSync(path.join("portfolio"));
  const files = works.map((work) => {
    const buffer = fs.readFileSync(path.join("portfolio", `${work}`));
    const {
      data: { title, thumbnailUrl, year, date, description },
    } = matter(buffer);
    return {
      title,
      thumbnailUrl,
      year,
      description,
      date,
    };
  });
  files.sort((a, b) => (a.year > b.year ? -1 : 1));
  return {
    props: {
      files,
    },
  };
}

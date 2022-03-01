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
import media from "../../util/media";
import WorkComponent from "../../components/shared/workComponent";
import Head from "next/head";

const Container = styled.div`
  row-gap: 8rem;
  display: flex;
  flex-direction: column;
  @media ${media.laptop} {
    display: none;
  }
`;
const DesktopContainer = styled.div`
  display: none;
  @media ${media.laptop} {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
export default function Work({ files }) {
  return (
    <Page>
      <Head><title>Work</title></Head>
      <Box>
        <Container>
          <TitleArea title="Work"></TitleArea>
        </Container>
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
                link={file.link}
              ></DetailedProjectPreview>
            );
          })}
        </Container>
        <DesktopContainer>
          <Title color={theme.colors.gray} fontSize={theme.fontSize.h2}>
            Work
          </Title>
          <WorkComponent files={files}></WorkComponent>
        </DesktopContainer>
      </Box>
    </Page>
  );
}

export async function getStaticProps() {
  const works = fs.readdirSync(path.join("portfolio"));
  const files = works.map((work) => {
    const buffer = fs.readFileSync(path.join("portfolio", `${work}`));
    let {
      data: { title, thumbnailUrl, year, date, description, link },
    } = matter(buffer);
    link = work.substr(0, work.length - 4);
    return {
      title,
      thumbnailUrl,
      year,
      description,
      date,
      link,
    };
  });
  files.sort((a, b) => (a.year > b.year ? -1 : 1));
  return {
    props: {
      files,
    },
  };
}

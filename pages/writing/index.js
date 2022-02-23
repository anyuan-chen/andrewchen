import React from "react";
import ArticlePreview from "../../components/shared/writingArticlePreview";
import WritingContainer from "../../components/shared/writingContainer";
import Page from "../../layouts/page";
import Box from "../../components/shared/box";


export default function Writing() {
  return (
    <Page>
      <Box title="Writing">
        <WritingContainer>
          <ArticlePreview></ArticlePreview>
        </WritingContainer>
      </Box>
    </Page>
  );
}



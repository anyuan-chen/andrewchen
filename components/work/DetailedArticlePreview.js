/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";

const Container = styled.div` 
  h1 {
    ${TextStyles.oversized}
  }
  h2 {
    ${TextStyles.heading} 
    padding-bottom: 4rem;   
  }
`;
export default function DetailedArticlePreview({
  title,
  description,
  imgUrl,
  year,
}) {
  return (
    <Container>
      {imgUrl && <img src={imgUrl} alt={description}></img>}
      <h1>{title}</h1>
      <h2>{year}</h2>
    </Container>
  );
}

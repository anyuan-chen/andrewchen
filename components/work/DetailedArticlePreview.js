/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
import Link from "next/link";

const Container = styled.div`
  h1 {
    ${TextStyles.oversized}
  }
  h2 {
    ${TextStyles.heading}
    margin-bottom: 4rem;
  }
`;
export default function DetailedArticlePreview({
  title,
  description,
  imgUrl,
  year,
}) {
  return (
    <Link href={`/work/${title.toLowerCase()}`} passHref>
      <Container>
        <a>
          {imgUrl && <img src={imgUrl} alt={description}></img>}
          <h1>{title}</h1>
          <h2>{year}</h2>
        </a>
      </Container>
    </Link>
  );
}

import React from "react";
import styled from "styled-components";
import media from "../../util/media";
import Link from "next/link";
import TextStyles from "../../util/textStyles";

const Container = styled.div`
  @media ${media.laptop} {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    border: 1px gray solid;
    padding: 3rem;
  }
`;
const Row = styled.div`
  @media ${media.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a{
        ${TextStyles.link}
    }
    h2{
        ${TextStyles.subtitleInter}
    }
  }
`;

export default function ArticlePreview({ title, description, date, url }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <Row>
        <Link href={url}>
          <a>Read More</a>
        </Link>
        <h2>{date}</h2>
      </Row>
    </Container>
  );
}

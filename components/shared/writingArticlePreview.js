import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
import Link from "next/link";
const WritingContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    ${TextStyles.heading}
    color: white;
    margin-top: 2rem;
  }
  p {
    margin-top: 2rem;
    ${TextStyles.paragraph}
  }
  hr {
    margin-top: 4rem;
    width: 92%;
    opacity: 60%;
  }
`;

export default function ArticlePreview({ title, description, link }) {
  return (
    <WritingContainer>
      <Link href={`/writing/${link.toLowerCase()}`}>
        <a>
          <h1>{title}</h1>
          <p>{description}</p>
        </a>
      </Link>
      <hr></hr>
    </WritingContainer>
  );
}

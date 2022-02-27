import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Text from "./text";
import theme from "../../theme";

const WritingContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 2rem;
  }
 
`;

export default function ArticlePreview({ title, description, link }) {
  return (
    <WritingContainer>
      <Link href={`/writing/${link.toLowerCase()}`}>
        <a>
          <Text fontSize={theme.fontSize.h2} color={theme.colors.white}>
            {title}
          </Text>
          <Text fontSize={theme.fontSize.p} color={theme.colors.lightGray}>
            {description}
          </Text>
        </a>
      </Link>
    </WritingContainer>
  );
}

import React from "react";
import styled from "styled-components";
import media from "../../util/media";
import Link from "next/link";
import TextStyles from "../../util/textStyles";
import Title from "../shared/title";
import theme from "../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Line = styled.hr`
  margin-top: 6rem;
  height: 1px;
  opacity: 20%;
  color: gray;
`
export default function ArticlePreview({ title, description, date, url }) {
  return (
    <Container>
        <Title fontSize={theme.fontSize.h2} color={theme.colors.white} style={{fontWeight: 500}}>
          {title}
        </Title>
        <Title fontSize={theme.fontSize.p} color={theme.colors.lightGray}>
          {description}
        </Title>
        <Row>
          <Link href={url}>
            <a>
              <Title
                fontSize={theme.fontSize.p}
                color={theme.colors.gray}
                style={{textDecoration: "underline"}}
              >
                Read More
              </Title>
            </a>
          </Link>
          <div>
            <Title fontSize={theme.fontSize.p} color={theme.colors.gray} fontStyle="italic">
              {date}
            </Title>
          </div>
        </Row>
        <Line></Line>
    </Container>
  );
}

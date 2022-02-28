import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Text from "./text";
import theme from "../../theme";
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
export default function WorkRow({ projectName, year, link }) {
  return (
    <Link href={`/work/${link}`}>
      <a>
        <Row>
          <Text fontSize={theme.fontSize.h1} color={theme.colors.white}>
            {projectName}
          </Text>
          <Text fontSize={theme.fontSize.h2} color={theme.colors.gray} fontWeight="300" >
            {year}
          </Text>
        </Row>
      </a>
    </Link>
  );
}

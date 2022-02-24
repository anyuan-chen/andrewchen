import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  row-gap: 1rem;
  h2 {
    ${TextStyles.subtitleInter}
  }
  h1 {
    ${TextStyles.normal}
  }
`;
export default function SocialMediaRow({ title, link }) {
  return (
    <Container>
      <h2>{title}</h2>
      <h1>{link}</h1>
    </Container>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TextStyles from "../../util/textStyles";
import media from "../../util/media";
import theme from "../../theme";
import Text from "../shared/text";
const Container = styled.div`
  display: flex;
  column-gap: 4rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 2%;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  row-gap: 4rem;
  
`;
export default function MusicBox({ name, artist, album, imgUrl, lastFmUrl }) {
  return (
    <a href={lastFmUrl} target="_blank" rel="noreferrer">
      <Container>
        <img src={imgUrl} alt={album}></img>
        <InnerContainer>
          <Text color={theme.colors.white} fontSize={theme.fontSize.h2}>{name}</Text>
          <Text color={theme.colors.white} fontSize={theme.fontSize.h3}>{artist}</Text>
          <Text color={theme.colors.white} fontSize={theme.fontSize.p}>{album}</Text>
        </InnerContainer>
      </Container>
    </a>
  );
}

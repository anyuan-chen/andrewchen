/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TextStyles from "../../util/textStyles";
import media from "../../util/media";
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
  h1 {
    ${TextStyles.normal}
    @media ${media.tablet} {
      ${TextStyles.oversized}
    }
  }
  h2 {
    ${TextStyles.subtitleInter}
  }
`;
export default function MusicBox({ name, artist, album, imgUrl, lastFmUrl }) {
  return (
    <a href={lastFmUrl} target="_blank" rel="noreferrer">
      <Container>
        <img src={imgUrl} alt={album}></img>
        <InnerContainer>
          <h1>{name}</h1>
          <h2>By: {artist}</h2>
          <h2>From the album: {album}</h2>
        </InnerContainer>
      </Container>
    </a>
  );
}

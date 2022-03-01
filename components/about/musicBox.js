/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TextStyles from "../../util/textStyles";
import media from "../../util/media";
import theme from "../../theme";
import Text from "../shared/text";
import { useEffect } from "react";
import { flex } from "styled-system";
const Container = styled.div`
  display: flex;
  column-gap: 4rem;
  background-color: #1c3039;
  border-radius: 2%;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem;
  width: 100%;
  row-gap: 4rem;
`;
export default function MusicBox({ name, artist, album, imgUrl, lastFmUrl }) {
  useEffect(() => {
    let words = name.split();
    let count = 0;
    let lengthCounter = 0;
    while (count != words.length - 1 && lengthCounter + words[count] <= 18) {
      lengthCounter += words[count].length;
      count++;
    }
  }, [name]);
  return (
    <a href={lastFmUrl} target="_blank" rel="noreferrer">
      <Container>
        <img src={imgUrl} alt={album} style={{objectFit: "cover"}}></img>
        <InnerContainer>
          <Text color={theme.colors.white} fontSize={theme.fontSize.h2}>
            {name}
          </Text>
          <hr style={{ width: "100%" }}></hr>
          <div style={{ display: "flex", columnGap: "15px", paddingTop: "4rem" , alignItems: "center" }}>
            <Text color={theme.colors.gray} fontSize={theme.fontSize.p}>
              Artist Name:
            </Text>
            <Text color={theme.colors.white} fontSize={theme.fontSize.p}>
              {artist}
            </Text>
          </div>
          <div style={{ display: "flex", columnGap: "15px", alignItems: "center" }}>
            <Text color={theme.colors.gray} fontSize={theme.fontSize.p}>
              Album Name:
            </Text>
            <Text color={theme.colors.white} fontSize={theme.fontSize.p}>
              {album}
            </Text>
          </div>
        </InnerContainer>
      </Container>
    </a>
  );
}

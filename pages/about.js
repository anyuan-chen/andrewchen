import React from "react";
import Page from "../layouts/page";
import Box from "../components/shared/box";
import LikesContainer from "../components/about/likesContainer";
import MusicBox from "../components/about/musicBox";
import HomeLayout from "../components/index/homeLayout";
import Text from "../components/shared/text";
import theme from "../theme";
import TitleArea from "../components/shared/titleArea";
export default function About({
  songInfo: { artist, imgUrl, album, name, lastFmUrl },
}) {
  return (
    <Page>
      <HomeLayout>
        <Box gridColumn="1/ 3" gridRow="1/4">
          <TitleArea title="About Me"></TitleArea>
          <Text fontSize={theme.fontSize.h2} color={theme.colors.white}>
            I’m a software engineer based in Toronto who I design and build
            refreshing web experiences, packed to the punch with delightful
            interactions. I’m a software engineer based in Toronto who I design
            and build refreshing web experiences, packed to the punch with
            delightful.
          </Text>
        </Box>
        <Box gridColumn="1/ 2" gridRow="4/6">
          <TitleArea title="My Likes"></TitleArea>
          <LikesContainer>
            <Text color={theme.colors.white} fontSize={theme.fontSize.h3} >
            Built using Next.js, Styled Components, Framer Motion,
            </Text>
            <Text color={theme.colors.white} fontSize={theme.fontSize.h3}>
            Built using Next.js, Styled Components, Framer Motion, 
            </Text>
            <Text color={theme.colors.white} fontSize={theme.fontSize.h3}>
            Built using Next.js, Styled Components, Framer Motion, 
            </Text>
          </LikesContainer>
        </Box>
        <Box gridColumn="2/ 3" gridRow="4/5">
          <TitleArea title="What I'm Listening To "></TitleArea>
          <MusicBox
            name={name}
            artist={artist}
            imgUrl={imgUrl}
            album={album}
            lastFmUrl={lastFmUrl}
          ></MusicBox>
        </Box>
        <Box gridColumn="2/ 3" gridRow="5/6">
          <TitleArea title="Credits"></TitleArea>
          <Text color={theme.colors.white} fontSize={theme.fontSize.p}>
            Built using Next.js, Styled Components, Framer Motion, MDX and
            Netlify.
          </Text>
        </Box>
      </HomeLayout>
    </Page>
  );
}
export async function getServerSideProps() {
  const apiKey = process.env.LAST_FM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=andrewchen2004&api_key=${apiKey}&format=json`;
  const req = await fetch(url);
  const res = await req.json();
  const firstSong = res.recenttracks.track[0];
  const artist = firstSong.artist["#text"];

  const imgUrl = firstSong.image[firstSong.image.length - 2]["#text"];
  const album = firstSong.album["#text"];
  const name = firstSong.name;
  const lastFmUrl = firstSong.url;
  const songInfo = { artist, imgUrl, album, name, lastFmUrl };
  return {
    props: {
      songInfo,
    },
  };
}

import React from "react";
import Page from "../layouts/page";
import Box from "../components/shared/box";
import LikesContainer from "../components/about/likesContainer";
import MusicBox from "../components/about/musicBox";
import HomeLayout from "../components/index/homeLayout";
import Text from "../components/shared/text";
import theme from "../theme";
import TitleArea from "../components/shared/titleArea";
import Head from "next/head";
export default function About({
  songInfo: { artist, imgUrl, album, name, lastFmUrl },
}) {
  return (
    <Page>
      <Head>
        <title>About Me</title>
      </Head>
      <HomeLayout>
        <Box gridColumn="1/ 3" gridRow="1/4">
          <TitleArea title="About Me"></TitleArea>
          <Text
            fontSize={theme.fontSize.h1}
            color={theme.colors.white}
            style={{ paddingBottom: "3rem" }}
          >
            I build web experiences with a focus on interaction design.
          </Text>
          {/* <Text fontSize={theme.fontSize.h3} color={theme.colors.lightGray}>
            I build web experiences with a focus on interaction design, exporing
            how we can best deliver joy to users.
          </Text> */}
        </Box>
        <Box gridColumn="2/ 3" gridRow="4/5">
          <TitleArea title="What I've been doing"></TitleArea>
          <LikesContainer>
            <Text color={theme.colors.lightGray} fontSize={theme.fontSize.h3}>
              Smushing my finger trying to hone my knife skills
            </Text>
            <Text color={theme.colors.lightGray} fontSize={theme.fontSize.h3}>
              Salvaging old computers
            </Text>
            <Text color={theme.colors.lightGray} fontSize={theme.fontSize.h3}>
              Catching a game of Team WE in the LPL
            </Text>
            <Text color={theme.colors.lightGray} fontSize={theme.fontSize.h3}>
              Going 8th in Teamfight Tactics
            </Text>
          </LikesContainer>
        </Box>
        <Box gridColumn="1/ 2" gridRow="4/6">
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
          <Text color={theme.colors.lightGray} fontSize={theme.fontSize.h3}>
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

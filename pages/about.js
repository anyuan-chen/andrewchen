import React from "react";
import Page from "../layouts/page";
import Box from "../components/shared/box";
import LikesContainer from "../components/about/likesContainer";
import MusicBox from "../components/about/musicBox";
import HomeLayout from "../components/index/homeLayout";
export default function About({
  songInfo: { artist, imgUrl, album, name, lastFmUrl },
}) {
  return (
    <Page>
      <HomeLayout>
        <Box title="About Me" styles={{ gridColumn: "1/ 3", gridRow: "1/4" }}>
          <h3>
            I’m a software engineer based in Toronto who I design and build
            refreshing web experiences, packed to the punch with delightful
            interactions. I’m a software engineer based in Toronto who I design
            and build refreshing web experiences, packed to the punch with
            delightful.
          </h3>
        </Box>
        <Box title="My Likes  " styles={{ gridColumn: "1/ 2", gridRow: "4/6" }}>
          <LikesContainer>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </LikesContainer>
        </Box>
        <Box title="What I'm Listening To Right Now" styles={{ gridColumn: "2/ 3", gridRow: "4/5" }}>
          <MusicBox
            name={name}
            artist={artist}
            imgUrl={imgUrl}
            album={album}
            lastFmUrl={lastFmUrl}
          ></MusicBox>
        </Box>
        <Box title="Credits" styles={{ gridColumn: "2/ 3", gridRow: "5/6" }}>
          <h3>
            Built using Next.js, Styled Components, Framer Motion, MDX and
            Netlify.
          </h3>
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

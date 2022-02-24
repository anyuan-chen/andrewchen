import React from "react";
import Page from "../layouts/page";
import Box from "../components/shared/box";
import LikesContainer from "../components/about/likesContainer";
export default function About() {
  return (
    <Page>
      <Box title="About Me">
        <h3>
          I’m a software engineer based in Toronto who I design and build
          refreshing web experiences, packed to the punch with delightful
          interactions. I’m a software engineer based in Toronto who I design
          and build refreshing web experiences, packed to the punch with
          delightful.
        </h3>
      </Box>
      <Box title="My Likes  ">
        <LikesContainer>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </LikesContainer>
      </Box>
      <Box title="What I'm Listening To"></Box>
      <Box title="Credits">
        <h3>
          Built using Next.js, Styled Components, Framer Motion, MDX and Netlify.
        </h3>
      </Box>
    </Page>
  );
}

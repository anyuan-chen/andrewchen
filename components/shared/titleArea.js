/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "./title";
import theme from "../../theme";
import styled from "styled-components";

const Image = styled.img`
  height: 30px;
  @media only screen and (min-width: 52em){
    height: 60px;
  }
`
export default function TitleArea({ title }) {
  return (
    <Title fontSize={theme.fontSize.h2} color={theme.colors.gray}>
      {title}
      <Image
        src="/icons/arrow_downward.svg"
        alt="arrow"
        styles={{ alignSelf: "start" }}
      ></Image>
    </Title>
  );
}

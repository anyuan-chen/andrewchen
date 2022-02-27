/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Title from "./title";
import theme from "../../theme";

export default function TitleArea({ title }) {
  return (
    <Title fontSize={theme.fontSize.h2} color={theme.colors.white}>
      {title}
      <img
        src="/icons/arrow_downward.svg"
        alt="arrow"
        styles={{ alignSelf: "start" }}
      ></img>
    </Title>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { gridColumn, gridRow } from "styled-system";
import media from "../../util/media";
import TextStyles from "../../util/textStyles";
import TitleArea from "./titleArea";

const Box = styled.section`
  background-color: #021923;
  box-sizing: border-box;
  border-bottom: 7px solid #cacaca;
  display: flex;
  flex-direction: column;
  padding-top: 6rem;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-bottom: 8rem;
 
  @media ${media.laptop} {
    border: none;
    ${gridColumn}
    ${gridRow}
    padding-top: 12rem;
    padding-left: 16rem;
    padding-right: 16rem;
    padding-bottom: 16rem;

  }
`;

export default Box;
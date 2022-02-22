/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
const Title = styled.div`
    display: flex;
    width: 100%;
`
export default function TitleArea({title}) {
  return (
    <Title> 
      <h1>{title}</h1>
      <img src="/icons/arrow_downward.svg" alt="arrow"></img>
    </Title>
  ); 
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Container = styled.div`
  display: flex;
`;
const Text = styled.h2`
  color: white;
  font-family: Platform;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.04em;
`;
const ImageContainer = styled.div`
  max-height: 19px;
`;
const Row = styled.div`
  display: flex;
  column-gap: 10rem;
`;
export default function LinksRow({ links }) {
  return (
    <Row>
      {links.map((l, index) => {
        return (
          <Link href={l.link} key={index}>
            <a>
              <Container>
                <Text>{l.text}</Text>
                <ImageContainer>
                  <img
                    src="/icons/whitearrow.svg"
                    alt="arrow"
                    height="25px"
                    style={{ transform: "translate(0,-5px)" }}
                  ></img>
                </ImageContainer>
              </Container>
            </a>
          </Link>
        );
      })}
    </Row>
  );
}

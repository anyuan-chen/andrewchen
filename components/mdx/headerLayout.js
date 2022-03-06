import React from "react";
import media from "../../util/media";
import Heading from "./heading";
import InfoRow from "./infoRow";
import LinksRow from "./LinksRow";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  @media ${media.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    grid-gap: 16rem;
    padding: 16rem;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  hr {
    opacity: 0.4;
  }
  row-gap: 6rem;
  @media ${media.laptop} {
    row-gap: 18rem;
    padding-top: 10rem;
  }
`;

export default function HeaderLayout({ media, children }) {
  // pass through both the type and the url (youtube/image)
  return (
    <Container>
      <Column>{children}</Column>
      <Column>
        {media.type === "youtube" ? (
          <div style={{ width: "100%", height: "100%", minHeight: "300px" }}>
            <iframe
              width="100%"
              height="100%"
              src={media.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "300px",
              maxHeight: "500px",
            }}
          >
            <img
              src={media.url}
              alt="demo image"
              width="100%"
              height="100%"
              style={{ objectFit: "scale-down" }}
            ></img>
          </div>
        )}
      </Column>
    </Container>
  );
}

import React from "react";
import WorkDisplay from "./workDisplay";
import WorkRow from "./workRow";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
`;
export default function WorkComponent({ files }) {
  return (
    <Container>
      {files.map((file, index) => {
        return (
          <WorkDisplay
            title={file.title}
            imageUrl={file.imageUrl}
            year={file.year}
            key={index}
            link={file.link}
          ></WorkDisplay>
        );
      })}
    </Container>
  );
}

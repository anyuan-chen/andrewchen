import React from "react";
import media from "../../util/media";
import styled from "styled-components";

const Grid = styled.div`
    @media ${media.laptop}{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        height: 100vh;
        gap: 5px;
    }
`;

export default function HomeLayout({ children }) {
  return <Grid>{children}</Grid>;
}

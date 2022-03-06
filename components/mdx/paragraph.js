import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";

const P = styled.p`
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: white;
  line-height: 36px;
`;
export default function Paragraph({ children }) {
  return <P>{children}</P>;
}

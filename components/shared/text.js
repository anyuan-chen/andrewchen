import styled from "styled-components";
import { color, fontFamily, fontSize, fontStyle, fontWeight } from "styled-system";

const Text = styled.p`
  ${fontSize}
  ${color}
  ${fontWeight}
  ${fontFamily}
  ${fontStyle}
  font-family: Platform, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
export default Text;

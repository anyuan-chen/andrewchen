import styled from "styled-components";
import {
  color,
  fontSize,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
} from "styled-system";

const Text = styled.p`
  ${fontSize}
  ${color}
  ${paddingBottom}
  ${paddingTop}
  ${paddingRight}
  ${paddingLeft}
`;
export default Text;

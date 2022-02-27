import { css } from "styled-components";
import media from "./media";

const h1 = css`
  font-family: Platform, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 7.475rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  @media ${media.laptop} {
    font-family: Platform;
    font-size: 18rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`;

const h2 = css`
  font-family: Platform;
  font-size: 5.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.45px;
  @media ${media.laptop} {
    font-family: Platform;
    font-size: 11rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.88px;
  }
`;
const h3 = css`
  font-family: Platform;
  font-size: 4.207rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.34px;
  @media ${media.laptop} {
    font-family: Platform;
    font-size: 6.852rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.55px;
  }
`;
const h3Inter = css`
  font-family: Inter;
  font-size: 4.207rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;
const pInter = css`
  @media ${media.laptop} {
    font-family: Inter;
    font-size: 4.235rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
`;
const p = css`
  @media ${media.laptop} {
    font-family: Platform;
    font-size: 4.235rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.34px;
  }
`;

const TextStyles = {
  h1,
  h2,
  h3,
  h3Inter,
  p,
  pInter,
};

export default TextStyles;

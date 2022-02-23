import { css } from "styled-components";
import media from "./media";

const oversized = css`ff
  font-family: Platform, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: white;
  font-weight: 400;
  @media ${media.laptop} {
    font-size: 9.313rem;
  }
  @media ${media.tablet} {
    font-size: 4.75rem;
  }
  @media ${media.phone} {
    font-size: 4.55rem;
  }
`;
//48 laptop,
const heading = css`
  font-size: 5.96rem;
  font-family: Platform, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  @media ${media.laptop} {
    font-size: 4.74rem;
  }
  @media ${media.tablet} {
    font-size: 5.75rem;
  }
  @media ${media.phone} {
    font-size: 3.6rem;
  }
`;
const subtitle = css`
  font-size: 3.052rem;
  font-family: Platform, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  letter-spacing: 0.08em;
  font-weight: 400;
  @media ${media.laptop} {
    font-size: 3.052rem;
  }
  @media ${media.tablet} {
    font-size: 2.5rem;
  }
  @media ${media.phone} {
    font-size: 2rem;
  }
`;
const laptopNav = css`
  font-size: 3.052rem;
  font-family: Platform, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  letter-spacing: 0.08em;
  font-weight: 400;
  font-size: 2rem;
  @media ${media.tablet} {
    font-size: 2.5rem;
  }
  @media ${media.laptop} {
    font-size: 3.052rem;
  }
`;

const subtitleInter = css`
  font-size: 3.052rem;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: white;
  font-weight: 400;
  font-size: 2rem;
  @media ${media.tablet} {
    font-size: 2.5rem;
  }
  @media ${media.laptop} {
    font-size: 3.052rem;
  }
`;
const paragraph = css`
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.953rem;
  font-weight: 400;
  color: #ccd1d3;
  @media ${media.laptop} {
    font-size: 2rem;
  }
  @media ${media.tablet} {
    font-size: 2rem;
  }
  @media ${media.phone} {
    font-size: 2rem;
  }
`;
const link = css`
  color: inherit;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-decoration: underline;
  font-size: 2.441rem;
  font-weight: 400;
  color: #ccd1d3;
  text-underline-offset: 3px;
  @media ${media.laptop} {
    font-size: 4rem;
  }
  @media ${media.tablet} {
    font-size: 3rem;
  }
  @media ${media.phone} {
    font-size: 2.5rem;
  }
`;
const TextStyles = {
  oversized,
  heading,
  subtitle,
  laptopNav,
  subtitleInter,
  paragraph,
  link,
};

export default TextStyles;

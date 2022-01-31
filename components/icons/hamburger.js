import styled from "styled-components";
import icon from "./icon";

const Svg = styled(icon)``;

export const Hamburger = ({ className }) => {
  return (
    <Svg
      width="29"
      height="19"
      viewBox="0 0 29 19"
      fill="none"
      className={className}
    >
      <path
        d="M0.625 18.75H28.375V15.6667H0.625V18.75ZM0.625 11.0417H28.375V7.95833H0.625V11.0417ZM0.625 0.25V3.33333H28.375V0.25H0.625Z"
        fill="currentColor"
      />
    </Svg>
  );
};

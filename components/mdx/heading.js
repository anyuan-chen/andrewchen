import React from "react";
import TextStyles from "../../util/textStyles";
import styled from "styled-components";
import theme from "../../theme";
import Text from "../shared/text";

export default function Heading({ children }) {
  return (
    <Text fontSize={theme.fontSize.h1} color={theme.colors.gray}>
      {children}
    </Text>
  );
}

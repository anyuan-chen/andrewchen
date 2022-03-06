import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import Text from "../shared/text";
import theme from "../../theme";
const Container = styled.div`
  display: flex;
  column-gap: 12rem;
`;
const Label = styled.h3`
  font-family: Platform;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 19px;
  letter-spacing: 0.08em;
`;
const Value = styled.h3`
  font-family: Platform;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  line-height: 22px;
  /* identical to box height */
  letter-spacing: 0.04em;
  color: white;
   max-width: 200px;
`;
export default function InfoRow({ infos }) {
  return (
    <Container>
      {infos.map((info, index) => {
        return (
          <div key={index}>
            <Text color={theme.colors.gray}>
              <Label>{info.label}</Label>
            </Text>
            <Text color={theme.colors.white}>
              <Value>{info.value}</Value>
            </Text>
          </div>
        );
      })}
    </Container>
  );
}

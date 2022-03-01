import React from "react";
import theme from "../../theme";
import Text from "./text";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { flex } from "styled-system";
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const slashMotion = {
  rest: {
    ease: "easeOut",
    duration: 0.8,
    type: "tween",
  },
  hover: {
    transform: "translate(20px, -30px)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export default function WorkDisplay({ title, year, imageUrl, link }) {
  return (
    <Link href={`work/${link}`}>
      <a>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <Row>
            <motion.div style={{ display: "flex" }}>
              <Text fontSize={theme.fontSize.h1} color={theme.colors.white}>
                {title}
              </Text>
              <motion.div
                style={{ justifySelf: "center" }}
                variants={slashMotion}
              >
                <img src="/icons/whitearrow.svg" style={{transform: "translate(0,-8px)"}}></img>
              </motion.div>
            </motion.div>

            <Text
              fontSize={theme.fontSize.h2}
              color={theme.colors.gray}
              fontWeight="300"
            >
              {year}
            </Text>
          </Row>
        </motion.div>
      </a>
    </Link>
  );
}

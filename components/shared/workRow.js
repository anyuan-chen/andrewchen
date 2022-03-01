import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Text from "./text";
import theme from "../../theme";
import { AnimatePresence, motion } from "framer-motion";
const Row = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const underline = {
  rest: { },
  hover: {
    textDecoration: "underline rgba(255, 255, 255, 1) 5px",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
export default function WorkRow({ projectName, year, link }) {
  return (
    <AnimatePresence>
      <Link href={`/work/${link}`}>
        <a>
          <Row initial="rest" whileHover="hover" animate="rest">
            <motion.div
              variants={underline}
              style={{
                textDecoration: "underline rgba(255, 255, 255, 0) 5px",
                textUnderlineOffset: "1px",
              }}
            >
              <Text fontSize={theme.fontSize.h1} color={theme.colors.white}>
                {projectName}
              </Text>
            </motion.div>
            <Text
              fontSize={theme.fontSize.h2}
              color={theme.colors.gray}
              fontWeight="300"
            >
              {year}
            </Text>
          </Row>
        </a>
      </Link>
    </AnimatePresence>
  );
}

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Text from "./text";
import theme from "../../theme";
import { AnimatePresence, motion } from "framer-motion";

const WritingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 2rem;
  }
`;
const slashMotion = {
  rest: { opacity: 1, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 0.8,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
export default function ArticlePreview({ title, description, link }) {
  return (
    <AnimatePresence>
      <Link href={`/writing/${link.toLowerCase()}`}>
        <a>
          <WritingContainer initial="rest" whileHover="hover" animate="rest">
            <motion.div variants={slashMotion}>
              <Text fontSize={theme.fontSize.h2} color={theme.colors.white}>
                {title}
              </Text>
              <Text fontSize={theme.fontSize.p} color={theme.colors.lightGray}>
                {description}
              </Text>
            </motion.div>
          </WritingContainer>
        </a>
      </Link>
    </AnimatePresence>
  );
}
